'use client';

import { useRef, useState, type FormEvent } from 'react';
import { SAUNA_GIN, formatKr, gruppestorrelser } from '@/lib/sauna-og-gin/config';
import { validerForesporsel, type Feil, type Foresporsel } from '@/lib/sauna-og-gin/validering';

const START: Foresporsel = {
  navn: '',
  epost: '',
  telefon: '',
  antall: SAUNA_GIN.minPersoner,
  onsketDato: '',
  onsketTid: '',
  altDato: '',
  altTid: '',
  melding: '',
  betaling: '',
  firmanavn: '',
  orgnr: '',
  fakturaadresse: '',
  godtattRegler: false,
  bekreftetAlder: false,
};

// Rekkefølgen feltene står i skjemaet – brukes for å flytte fokus til første feil.
const FELTREKKEFOLGE: (keyof Foresporsel)[] = [
  'navn', 'epost', 'telefon', 'antall', 'onsketDato', 'onsketTid', 'altDato', 'altTid',
  'melding', 'betaling', 'firmanavn', 'orgnr', 'fakturaadresse', 'godtattRegler', 'bekreftetAlder',
];

function iMorgen(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return new Intl.DateTimeFormat('sv-SE').format(d);
}

export default function ForesporselSkjema() {
  const [f, setF] = useState<Foresporsel>(START);
  const [feil, setFeil] = useState<Feil>({});
  const [status, setStatus] = useState<'klar' | 'sender' | 'sendt' | 'feil'>('klar');
  const [serverMelding, setServerMelding] = useState('');
  const [honning, setHonning] = useState('');
  const kvitteringRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const total = f.antall * SAUNA_GIN.prisPerPerson;
  const minDato = iMorgen();

  function sett<K extends keyof Foresporsel>(k: K, v: Foresporsel[K]) {
    setF((prev) => ({ ...prev, [k]: v }));
    if (feil[k]) setFeil((prev) => ({ ...prev, [k]: undefined }));
  }

  function fokuserForsteFeil(e: Feil) {
    const forste = FELTREKKEFOLGE.find((k) => e[k]);
    if (!forste) return;
    const el = formRef.current?.querySelector<HTMLElement>(`[data-felt="${forste}"]`);
    el?.focus();
  }

  async function send(e: FormEvent) {
    e.preventDefault();
    const nyeFeil = validerForesporsel(f);
    setFeil(nyeFeil);
    if (Object.keys(nyeFeil).length > 0) {
      fokuserForsteFeil(nyeFeil);
      return;
    }

    setStatus('sender');
    setServerMelding('');
    try {
      const res = await fetch('/api/sauna-foresporsel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...f, nettside: honning }),
      });
      const svar = await res.json().catch(() => ({}));
      if (res.ok && svar.ok) {
        setStatus('sendt');
        requestAnimationFrame(() => kvitteringRef.current?.focus());
        return;
      }
      if (svar.feil) {
        setFeil(svar.feil);
        fokuserForsteFeil(svar.feil);
      }
      setServerMelding(svar.melding || `Noe gikk galt. Prøv igjen, eller send en e-post til ${SAUNA_GIN.epostMottaker}.`);
      setStatus('feil');
    } catch {
      setServerMelding(`Vi fikk ikke kontakt med serveren. Prøv igjen, eller send en e-post til ${SAUNA_GIN.epostMottaker}.`);
      setStatus('feil');
    }
  }

  if (status === 'sendt') {
    return (
      <div className="sg-kvittering" ref={kvitteringRef} tabIndex={-1} role="status">
        <p className="sg-kvittering-tittel">Takk, forespørselen er sendt.</p>
        <p>
          Vi sjekker ledig tid i badstuen og kommer tilbake til deg på e-post. Når tiden er bekreftet,
          sender vi Vipps eller faktura. Plassen er bekreftet når betalingen er mottatt.
        </p>
      </div>
    );
  }

  const feilId = (k: keyof Foresporsel) => (feil[k] ? `sg-feil-${k}` : undefined);
  const Feilmelding = ({ k }: { k: keyof Foresporsel }) =>
    feil[k] ? (
      <p className="sg-feil" id={`sg-feil-${k}`}>
        {feil[k]}
      </p>
    ) : null;

  const tekstfelt = (
    k: 'navn' | 'epost' | 'telefon',
    label: string,
    type: string,
    autoComplete: string,
    inputMode?: 'tel' | 'email',
  ) => (
    <div className="sg-felt">
      <label htmlFor={`sg-${k}`}>{label}</label>
      <input
        id={`sg-${k}`}
        data-felt={k}
        name={k}
        type={type}
        inputMode={inputMode}
        autoComplete={autoComplete}
        required
        value={f[k]}
        onChange={(e) => sett(k, e.target.value)}
        aria-invalid={!!feil[k]}
        aria-describedby={feilId(k)}
      />
      <Feilmelding k={k} />
    </div>
  );

  return (
    <form ref={formRef} className="sg-skjema" onSubmit={send} noValidate>
      <p className="sg-skjema-info">Alle felt må fylles ut, med mindre det står «valgfritt».</p>

      <div className="sg-rad sg-rad-3">
        {tekstfelt('navn', 'Navn', 'text', 'name')}
        {tekstfelt('epost', 'E-post', 'email', 'email', 'email')}
        {tekstfelt('telefon', 'Telefon', 'tel', 'tel', 'tel')}
      </div>

      <fieldset className="sg-felt" aria-describedby={feilId('antall')}>
        <legend>Antall personer</legend>
        <div className="sg-valg">
          {gruppestorrelser().map((n, i) => (
            <label key={n} className="sg-valgknapp">
              <input
                type="radio"
                name="antall"
                value={n}
                data-felt={i === 0 ? 'antall' : undefined}
                checked={f.antall === n}
                onChange={() => sett('antall', n)}
              />
              <span>{n}</span>
            </label>
          ))}
        </div>
        <Feilmelding k="antall" />
        <div className="sg-pris-live" aria-live="polite">
          <span>
            {f.antall} personer × {formatKr(SAUNA_GIN.prisPerPerson)}, inkl. mva
          </span>
          <strong>Totalt {formatKr(total)}</strong>
        </div>
      </fieldset>

      <fieldset className="sg-felt">
        <legend>Ønsket dato og tidspunkt</legend>
        <div className="sg-rad sg-rad-2">
          <div>
            <label htmlFor="sg-onsketDato" className="sg-underlabel">Dato</label>
            <input id="sg-onsketDato" data-felt="onsketDato" type="date" min={minDato} required value={f.onsketDato}
              onChange={(e) => sett('onsketDato', e.target.value)} aria-invalid={!!feil.onsketDato} aria-describedby={feilId('onsketDato')} />
            <Feilmelding k="onsketDato" />
          </div>
          <div>
            <label htmlFor="sg-onsketTid" className="sg-underlabel">Tidspunkt</label>
            <input id="sg-onsketTid" data-felt="onsketTid" type="time" step={900} required value={f.onsketTid}
              onChange={(e) => sett('onsketTid', e.target.value)} aria-invalid={!!feil.onsketTid} aria-describedby={feilId('onsketTid')} />
            <Feilmelding k="onsketTid" />
          </div>
        </div>
      </fieldset>

      <fieldset className="sg-felt">
        <legend>Alternativ dato og tidspunkt</legend>
        <div className="sg-rad sg-rad-2">
          <div>
            <label htmlFor="sg-altDato" className="sg-underlabel">Dato</label>
            <input id="sg-altDato" data-felt="altDato" type="date" min={minDato} required value={f.altDato}
              onChange={(e) => sett('altDato', e.target.value)} aria-invalid={!!feil.altDato} aria-describedby={feilId('altDato')} />
            <Feilmelding k="altDato" />
          </div>
          <div>
            <label htmlFor="sg-altTid" className="sg-underlabel">Tidspunkt</label>
            <input id="sg-altTid" data-felt="altTid" type="time" step={900} required value={f.altTid}
              onChange={(e) => sett('altTid', e.target.value)} aria-invalid={!!feil.altTid} aria-describedby={feilId('altTid')} />
            <Feilmelding k="altTid" />
          </div>
        </div>
      </fieldset>

      <div className="sg-felt">
        <label htmlFor="sg-melding">
          Melding <span className="sg-valgfritt">(valgfritt)</span>
        </label>
        <textarea id="sg-melding" data-felt="melding" rows={4} maxLength={2000} value={f.melding}
          onChange={(e) => sett('melding', e.target.value)} aria-invalid={!!feil.melding} aria-describedby={feilId('melding')} />
        <Feilmelding k="melding" />
      </div>

      <fieldset className="sg-felt" aria-describedby={feilId('betaling')}>
        <legend>Foretrukket betaling</legend>
        <div className="sg-valg">
          {(['vipps', 'faktura'] as const).map((b, i) => (
            <label key={b} className="sg-valgknapp sg-valgknapp-bred">
              <input type="radio" name="betaling" value={b} data-felt={i === 0 ? 'betaling' : undefined}
                checked={f.betaling === b} onChange={() => sett('betaling', b)} />
              <span>{b === 'vipps' ? 'Vipps' : 'Faktura'}</span>
            </label>
          ))}
        </div>
        <Feilmelding k="betaling" />
      </fieldset>

      {f.betaling === 'faktura' && (
        <fieldset className="sg-felt sg-faktura">
          <legend>Fakturainformasjon <span className="sg-valgfritt">(valgfritt)</span></legend>
          <div className="sg-rad sg-rad-2">
            <div>
              <label htmlFor="sg-firmanavn" className="sg-underlabel">Firmanavn</label>
              <input id="sg-firmanavn" data-felt="firmanavn" type="text" autoComplete="organization" value={f.firmanavn}
                onChange={(e) => sett('firmanavn', e.target.value)} aria-invalid={!!feil.firmanavn} aria-describedby={feilId('firmanavn')} />
              <Feilmelding k="firmanavn" />
            </div>
            <div>
              <label htmlFor="sg-orgnr" className="sg-underlabel">Org.nr.</label>
              <input id="sg-orgnr" data-felt="orgnr" type="text" inputMode="numeric" value={f.orgnr}
                onChange={(e) => sett('orgnr', e.target.value)} aria-invalid={!!feil.orgnr} aria-describedby={feilId('orgnr')} />
              <Feilmelding k="orgnr" />
            </div>
          </div>
          <div>
            <label htmlFor="sg-fakturaadresse" className="sg-underlabel">Fakturaadresse</label>
            <textarea id="sg-fakturaadresse" data-felt="fakturaadresse" rows={2} autoComplete="street-address" value={f.fakturaadresse}
              onChange={(e) => sett('fakturaadresse', e.target.value)} aria-invalid={!!feil.fakturaadresse} aria-describedby={feilId('fakturaadresse')} />
            <Feilmelding k="fakturaadresse" />
          </div>
        </fieldset>
      )}

      {/* Honningfelle: skjult for mennesker, fanger spam-roboter */}
      <div className="sg-skjult" aria-hidden="true">
        <label htmlFor="sg-nettside">La dette feltet stå tomt</label>
        <input id="sg-nettside" type="text" tabIndex={-1} autoComplete="off" value={honning} onChange={(e) => setHonning(e.target.value)} />
      </div>

      <div className="sg-avkrysninger">
        <div className="sg-sjekk">
          <input id="sg-godtattRegler" data-felt="godtattRegler" type="checkbox" required checked={f.godtattRegler}
            onChange={(e) => sett('godtattRegler', e.target.checked)} aria-invalid={!!feil.godtattRegler} aria-describedby={feilId('godtattRegler')} />
          <label htmlFor="sg-godtattRegler">
            Jeg har lest <a href="#regler">reglene</a>, inkludert at medbrakt alkohol ikke er tillatt og at brudd
            avlyser arrangementet uten refusjon.
          </label>
        </div>
        <Feilmelding k="godtattRegler" />
        <div className="sg-sjekk">
          <input id="sg-bekreftetAlder" data-felt="bekreftetAlder" type="checkbox" required checked={f.bekreftetAlder}
            onChange={(e) => sett('bekreftetAlder', e.target.checked)} aria-invalid={!!feil.bekreftetAlder} aria-describedby={feilId('bekreftetAlder')} />
          <label htmlFor="sg-bekreftetAlder">Alle deltakere er fylt {SAUNA_GIN.aldersgrense} år.</label>
        </div>
        <Feilmelding k="bekreftetAlder" />
      </div>

      {status === 'feil' && serverMelding && (
        <p className="sg-serverfeil" role="alert">{serverMelding}</p>
      )}

      <div className="sg-send">
        <button type="submit" className="btn-primary" disabled={status === 'sender'}>
          {status === 'sender' ? 'Sender …' : 'Send forespørsel'}
        </button>
        <p className="sg-send-info">Dette er en forespørsel, ikke en bestilling. Du betaler ingenting her.</p>
      </div>
    </form>
  );
}
