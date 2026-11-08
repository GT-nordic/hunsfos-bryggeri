import { NextResponse } from 'next/server';
import { SAUNA_GIN, formatKr } from '@/lib/sauna-og-gin/config';
import { lesForesporsel, validerForesporsel, type Foresporsel } from '@/lib/sauna-og-gin/validering';

/**
 * Tar imot forespørsler fra skjemaet på /opplevelser/sauna-og-gin og sender dem
 * som e-post til post@hunsfos-bryggeri.no via Resend (https://resend.com).
 *
 * Miljøvariabler (Vercel → Settings → Environment Variables):
 *   RESEND_API_KEY   – API-nøkkel fra Resend
 *   FORESPORSEL_FRA  – avsender på et verifisert domene, f.eks.
 *                      "Hunsfos Bryggeri <booking@hunsfos-bryggeri.no>"
 */

export const dynamic = 'force-dynamic';

function datoTekst(iso: string): string {
  const d = new Date(`${iso}T12:00:00Z`);
  return new Intl.DateTimeFormat('nb-NO', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC',
  }).format(d);
}

function esc(s: string): string {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
}

function lagEpost(f: Foresporsel) {
  const total = f.antall * SAUNA_GIN.prisPerPerson;
  const rader: [string, string][] = [
    ['Navn', f.navn],
    ['E-post', f.epost],
    ['Telefon', f.telefon],
    ['Antall personer', `${f.antall} personer × ${formatKr(SAUNA_GIN.prisPerPerson)} = ${formatKr(total)} inkl. mva`],
    ['Ønsket tid', `${datoTekst(f.onsketDato)} kl. ${f.onsketTid}`],
    ['Alternativ tid', `${datoTekst(f.altDato)} kl. ${f.altTid}`],
    ['Foretrukket betaling', f.betaling === 'vipps' ? 'Vipps' : 'Faktura'],
  ];
  if (f.betaling === 'faktura') {
    rader.push(['Firmanavn', f.firmanavn || '–'], ['Org.nr.', f.orgnr || '–'], ['Fakturaadresse', f.fakturaadresse || '–']);
  }
  rader.push(
    ['Melding', f.melding || '–'],
    ['Regler lest', 'Ja'],
    [`Alle fylt ${SAUNA_GIN.aldersgrense} år`, 'Ja'],
  );

  const subject = `Forespørsel sauna og gin: ${f.navn}, ${f.antall} pers., ${f.onsketDato}`;
  const text = `Ny forespørsel om sauna og ginsmaking\n\n${rader.map(([k, v]) => `${k}: ${v}`).join('\n')}\n\nSvar på denne e-posten for å svare kunden direkte.`;
  const html = `<h2 style="font-family:sans-serif">Ny forespørsel om sauna og ginsmaking</h2>
<table style="font-family:sans-serif;border-collapse:collapse">${rader
    .map(([k, v]) => `<tr><td style="padding:6px 16px 6px 0;vertical-align:top;color:#555"><strong>${esc(k)}</strong></td><td style="padding:6px 0;white-space:pre-wrap">${esc(v)}</td></tr>`)
    .join('')}</table>
<p style="font-family:sans-serif;color:#555">Svar på denne e-posten for å svare kunden direkte.</p>`;
  return { subject, text, html };
}

export async function POST(req: Request) {
  let data: unknown;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, melding: 'Ugyldig forespørsel.' }, { status: 400 });
  }

  // Honningfelle mot spam-roboter: feltet er skjult for mennesker.
  if (data && typeof data === 'object' && (data as Record<string, unknown>).nettside) {
    return NextResponse.json({ ok: true });
  }

  const f = lesForesporsel(data);
  const feil = validerForesporsel(f);
  if (Object.keys(feil).length > 0) {
    return NextResponse.json({ ok: false, feil, melding: 'Noen felter må rettes.' }, { status: 422 });
  }

  const { subject, text, html } = lagEpost(f);
  const apiKey = process.env.RESEND_API_KEY;
  const fra = process.env.FORESPORSEL_FRA;

  if (!apiKey || !fra) {
    if (process.env.NODE_ENV !== 'production') {
      console.log('[sauna-foresporsel] RESEND_API_KEY/FORESPORSEL_FRA mangler – e-post IKKE sendt (kun lokal test).\n', subject, '\n', text);
      return NextResponse.json({ ok: true, test: true });
    }
    console.error('[sauna-foresporsel] RESEND_API_KEY eller FORESPORSEL_FRA mangler');
    return NextResponse.json(
      { ok: false, melding: `Skjemaet virker ikke akkurat nå. Send oss en e-post på ${SAUNA_GIN.epostMottaker}.` },
      { status: 503 },
    );
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: fra,
      to: [SAUNA_GIN.epostMottaker],
      reply_to: f.epost,
      subject,
      text,
      html,
    }),
  });

  if (!res.ok) {
    console.error('[sauna-foresporsel] Resend feilet', res.status, await res.text().catch(() => ''));
    return NextResponse.json(
      { ok: false, melding: `Vi fikk ikke sendt forespørselen. Prøv igjen, eller send en e-post til ${SAUNA_GIN.epostMottaker}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
