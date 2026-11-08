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

  /** Kontaktadresse som vises på siden og i feilmeldinger */
  epostMottaker: 'post@hunsfos-bryggeri.no',
  /** Hvor forespørsler fra skjemaet sendes (må være aktivert i FormSubmit) */
  skjemaMottaker: 'gt@hunsfos-bryggeri.no',

  sti: '/opplevelser/sauna-og-gin',

  /**
   * Bilder: utsikt fra badstuen mot elva og Hunsfos (original 1080×1434 px).
   * Bruk nye filnavn når bildene byttes, ellers kan Next.js vise gamle bilder fra cache.
   */
  bilder: {
    hero: '/images/opplevelser/sauna-elva-hero.jpg', // 4:5
    teaser: '/images/opplevelser/sauna-elva-teaser.jpg', // 4:3
    og: '/images/opplevelser/sauna-elva-og.jpg', // delingsbilde 1200×630
    ogBredde: 1200,
    ogHoyde: 630,
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
