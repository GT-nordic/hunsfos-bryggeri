import { NextResponse } from 'next/server';
import { SAUNA_GIN, formatKr } from '@/lib/sauna-og-gin/config';
import { lesForesporsel, validerForesporsel, type Foresporsel } from '@/lib/sauna-og-gin/validering';

/**
 * Tar imot forespørsler fra skjemaet på /opplevelser/sauna-og-gin og sender dem
 * som e-post til post@hunsfos-bryggeri.no.
 *
 * Standard: FormSubmit (https://formsubmit.co), samme som bestilling.nordic-river.com.
 * Ingen nøkler trengs, men mottakeradressen må aktiveres én gang via lenken
 * FormSubmit sender til post@hunsfos-bryggeri.no ved første innsending.
 *
 * Valgfritt: settes RESEND_API_KEY og FORESPORSEL_FRA i Vercel, brukes Resend i stedet.
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
  return { subject, text, html, rader };
}

const NETTSTED = 'https://hunsfos-bryggeri.no';

async function sendViaFormSubmit(f: Foresporsel, subject: string, rader: [string, string][]): Promise<string | null> {
  const felter: Record<string, string> = {
    _subject: subject,
    _template: 'table',
    _captcha: 'false',
    _replyto: f.epost,
  };
  for (const [k, v] of rader) felter[k] = v;

  const res = await fetch(`https://formsubmit.co/ajax/${SAUNA_GIN.epostMottaker}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Origin: NETTSTED,
      Referer: `${NETTSTED}${SAUNA_GIN.sti}`,
    },
    body: JSON.stringify(felter),
  });
  const data = (await res.json().catch(() => ({}))) as { success?: unknown; message?: string };
  if (res.ok && String(data.success) === 'true') return null;
  return `FormSubmit ${res.status}: ${data.message ?? 'ukjent svar'}`;
}

async function sendViaResend(f: Foresporsel, apiKey: string, fra: string, subject: string, text: string, html: string): Promise<string | null> {
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: fra, to: [SAUNA_GIN.epostMottaker], reply_to: f.epost, subject, text, html }),
  });
  if (res.ok) return null;
  return `Resend ${res.status}: ${await res.text().catch(() => '')}`;
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

  const { subject, text, html, rader } = lagEpost(f);
  const apiKey = process.env.RESEND_API_KEY;
  const fra = process.env.FORESPORSEL_FRA;

  // Lokalt sendes ingen e-post med mindre SEND_EPOST_LOKALT=1
  if (process.env.NODE_ENV !== 'production' && process.env.SEND_EPOST_LOKALT !== '1') {
    console.log('[sauna-foresporsel] Lokal test – e-post IKKE sendt.\n', subject, '\n', text);
    return NextResponse.json({ ok: true, test: true });
  }

  let sendefeil: string | null;
  try {
    sendefeil = apiKey && fra
      ? await sendViaResend(f, apiKey, fra, subject, text, html)
      : await sendViaFormSubmit(f, subject, rader);
  } catch (e) {
    sendefeil = e instanceof Error ? e.message : String(e);
  }

  if (sendefeil) {
    console.error('[sauna-foresporsel] Sending feilet:', sendefeil);
    return NextResponse.json(
      { ok: false, melding: `Vi fikk ikke sendt forespørselen. Prøv igjen, eller send en e-post til ${SAUNA_GIN.epostMottaker}.` },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
