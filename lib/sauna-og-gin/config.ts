/**
 * Sauna og ginsmaking – alle tall og nøkkelverdier for opplegget.
 * Endre her, så oppdateres forsiden, undersiden, skjemaet og e-posten.
 */
export const SAUNA_GIN = {
  /** Pris per person i kroner, inkl. mva */
  prisPerPerson: 849,
  /** Minste antall personer per gruppe */
  minPersoner: 10,
  /** Største antall personer per gruppe */
  maksPersoner: 12,
  /** Aldersgrense for alle deltakere */
  aldersgrense: 20,
  /** Hvor lenge gruppen har badstuen, i minutter */
  badstueMinutter: 60,
  /** Antall Nordic River-gin som smakes */
  antallGin: 3,

  /** Mottaker av forespørsler fra skjemaet */
  epostMottaker: 'post@hunsfos-bryggeri.no',

  sti: '/opplevelser/sauna-og-gin',

  /**
   * Bilder. Nå laget fra «badstue .jpeg» (kun 388×515 px, oppskalert) –
   * bytt til originalbildet i full oppløsning når det finnes.
   * Bruk gjerne nye filnavn, ellers kan Next.js vise gamle bilder fra cache lokalt.
   */
  bilder: {
    hero: '/images/opplevelser/sauna-utsikt-hero.jpg', // 4:5
    teaser: '/images/opplevelser/sauna-utsikt-teaser.jpg', // 4:3
    og: '/images/opplevelser/sauna-utsikt-og.jpg', // delingsbilde, helst 1200×630
    ogBredde: 800,
    ogHoyde: 420,
  },
} as const;

const kr = new Intl.NumberFormat('nb-NO', { maximumFractionDigits: 0 });

/** «10 188 kr» */
export function formatKr(belop: number): string {
  return `${kr.format(belop)} kr`;
}

/** Liste over gyldige gruppestørrelser, f.eks. [10, 11, 12] */
export function gruppestorrelser(): number[] {
  const { minPersoner, maksPersoner } = SAUNA_GIN;
  return Array.from({ length: maksPersoner - minPersoner + 1 }, (_, i) => minPersoner + i);
}

/** «en time» for 60 min, ellers «90 minutter» osv. */
export function badstueVarighet(storForbokstav = false): string {
  const m = SAUNA_GIN.badstueMinutter;
  const tekst = m === 60 ? 'en time' : m % 60 === 0 ? `${m / 60} timer` : `${m} minutter`;
  return storForbokstav ? tekst.charAt(0).toUpperCase() + tekst.slice(1) : tekst;
}

/** «tre» for 3 osv. (brukes i løpende tekst) */
export function tallSomOrd(n: number): string {
  const ord = ['null', 'én', 'to', 'tre', 'fire', 'fem', 'seks', 'sju', 'åtte', 'ni', 'ti', 'elleve', 'tolv'];
  return ord[n] ?? String(n);
}
