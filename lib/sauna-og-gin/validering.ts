import { SAUNA_GIN } from './config';

/** Felles validering for skjemaet – brukes både i nettleseren og i API-ruten. */

export type Betaling = 'vipps' | 'faktura';

export interface Foresporsel {
  navn: string;
  epost: string;
  telefon: string;
  antall: number;
  onsketDato: string; // ÅÅÅÅ-MM-DD
  onsketTid: string; // TT:MM
  altDato: string;
  altTid: string;
  melding: string;
  betaling: Betaling | '';
  firmanavn: string;
  orgnr: string;
  fakturaadresse: string;
  godtattRegler: boolean;
  bekreftetAlder: boolean;
}

export type Feil = Partial<Record<keyof Foresporsel, string>>;

const EPOST = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const DATO = /^\d{4}-\d{2}-\d{2}$/;
const TID = /^\d{2}:\d{2}$/;

const MAKS = { navn: 100, epost: 200, telefon: 30, melding: 2000, firmanavn: 150, orgnr: 20, fakturaadresse: 300 };

function iDag(): string {
  // Lokal dato (ÅÅÅÅ-MM-DD) i norsk tid
  return new Intl.DateTimeFormat('sv-SE', { timeZone: 'Europe/Oslo' }).format(new Date());
}

function gyldigDato(v: string): boolean {
  if (!DATO.test(v)) return false;
  const d = new Date(`${v}T00:00:00Z`);
  return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === v;
}

export function validerForesporsel(f: Foresporsel): Feil {
  const feil: Feil = {};
  const { minPersoner, maksPersoner, aldersgrense } = SAUNA_GIN;

  if (!f.navn.trim()) feil.navn = 'Skriv inn navnet ditt.';
  else if (f.navn.length > MAKS.navn) feil.navn = 'Navnet er for langt.';

  if (!f.epost.trim()) feil.epost = 'Skriv inn e-postadressen din.';
  else if (!EPOST.test(f.epost.trim()) || f.epost.length > MAKS.epost) feil.epost = 'E-postadressen ser ikke riktig ut.';

  const sifre = f.telefon.replace(/\D/g, '');
  if (!f.telefon.trim()) feil.telefon = 'Skriv inn telefonnummeret ditt.';
  else if (sifre.length < 8 || f.telefon.length > MAKS.telefon || !/^[+\d\s()-]+$/.test(f.telefon))
    feil.telefon = 'Telefonnummeret ser ikke riktig ut.';

  if (!Number.isInteger(f.antall) || f.antall < minPersoner || f.antall > maksPersoner)
    feil.antall = `Velg mellom ${minPersoner} og ${maksPersoner} personer.`;

  const dag = iDag();
  if (!f.onsketDato) feil.onsketDato = 'Velg ønsket dato.';
  else if (!gyldigDato(f.onsketDato)) feil.onsketDato = 'Datoen er ikke gyldig.';
  else if (f.onsketDato <= dag) feil.onsketDato = 'Velg en dato fram i tid.';
  if (!TID.test(f.onsketTid)) feil.onsketTid = 'Velg ønsket tidspunkt.';

  if (!f.altDato) feil.altDato = 'Velg en alternativ dato.';
  else if (!gyldigDato(f.altDato)) feil.altDato = 'Datoen er ikke gyldig.';
  else if (f.altDato <= dag) feil.altDato = 'Velg en dato fram i tid.';
  if (!TID.test(f.altTid)) feil.altTid = 'Velg alternativt tidspunkt.';

  if (f.melding.length > MAKS.melding) feil.melding = `Meldingen kan være maks ${MAKS.melding} tegn.`;

  if (f.betaling !== 'vipps' && f.betaling !== 'faktura') feil.betaling = 'Velg foretrukket betaling.';

  if (f.betaling === 'faktura') {
    if (f.firmanavn.length > MAKS.firmanavn) feil.firmanavn = 'Firmanavnet er for langt.';
    if (f.orgnr.trim() && !/^\d{9}$/.test(f.orgnr.replace(/\s/g, '')))
      feil.orgnr = 'Org.nr. skal ha 9 sifre.';
    if (f.fakturaadresse.length > MAKS.fakturaadresse) feil.fakturaadresse = 'Adressen er for lang.';
  }

  if (!f.godtattRegler) feil.godtattRegler = 'Du må bekrefte at du har lest reglene.';
  if (!f.bekreftetAlder) feil.bekreftetAlder = `Du må bekrefte at alle deltakere er fylt ${aldersgrense} år.`;

  return feil;
}

/** Gjør om ukjent JSON til et Foresporsel-objekt med riktige typer. */
export function lesForesporsel(data: unknown): Foresporsel {
  const d = (data && typeof data === 'object' ? data : {}) as Record<string, unknown>;
  const s = (k: string) => (typeof d[k] === 'string' ? (d[k] as string) : '');
  const betaling = s('betaling');
  return {
    navn: s('navn').trim(),
    epost: s('epost').trim(),
    telefon: s('telefon').trim(),
    antall: typeof d.antall === 'number' ? d.antall : Number(s('antall')),
    onsketDato: s('onsketDato'),
    onsketTid: s('onsketTid'),
    altDato: s('altDato'),
    altTid: s('altTid'),
    melding: s('melding').trim(),
    betaling: betaling === 'vipps' || betaling === 'faktura' ? betaling : '',
    firmanavn: s('firmanavn').trim(),
    orgnr: s('orgnr').trim(),
    fakturaadresse: s('fakturaadresse').trim(),
    godtattRegler: d.godtattRegler === true,
    bekreftetAlder: d.bekreftetAlder === true,
  };
}
