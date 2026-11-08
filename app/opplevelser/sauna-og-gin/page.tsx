import type { Metadata } from 'next';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import ForesporselSkjema from '@/components/sauna-og-gin/ForesporselSkjema';
import { SAUNA_GIN, badstueVarighet, formatKr, tallSomOrd } from '@/lib/sauna-og-gin/config';

const { prisPerPerson, minPersoner, maksPersoner, aldersgrense, badstueMinutter, antallGin, epostMottaker, bilder, sti } = SAUNA_GIN;

const beskrivelse = `${badstueVarighet(true)} i badstuen ved elva i Vennesla, så smaking av ${tallSomOrd(antallGin)} Nordic River-gin hos Hunsfos Bryggeri. For grupper på ${minPersoner}–${maksPersoner} personer. ${formatKr(prisPerPerson)} per person, inkl. mva.`;

export const metadata: Metadata = {
  metadataBase: new URL('https://hunsfos-bryggeri.no'),
  title: 'Sauna og ginsmaking | Hunsfos Bryggeri',
  description: beskrivelse,
  alternates: { canonical: sti },
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: sti,
    siteName: 'Hunsfos Bryggeri & Destilleri',
    title: 'Sauna ved elva. Gin i bryggeriet.',
    description: beskrivelse,
    images: [{ url: bilder.og, width: bilder.ogBredde, height: bilder.ogHoyde, alt: 'Utsikt fra badstuen mot elva og Hunsfos' }],
  },
};

export default function SaunaOgGinPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main className="sg-side">
        {/* a) HERO */}
        <section className="sg-hero" aria-labelledby="sg-tittel">
          <div className="sg-hero-tekst">
            <p className="hero-eyebrow">Opplevelser i Vennesla</p>
            <h1 id="sg-tittel" className="sg-h1">
              Sauna ved elva.<br /><em>Gin i bryggeriet.</em>
            </h1>
            <p className="sg-ingress">
              {badstueVarighet(true)} i badstuen helt nede ved elvekanten, og så over til oss for å smake{' '}
              {tallSomOrd(antallGin)} Nordic River-gin. For vennegjengen, kollegaene eller familien.
            </p>
            <div className="sg-knapper">
              <a href="#booking" className="btn-primary">Send forespørsel</a>
              <a href="#pris" className="btn-ghost">Se pris</a>
            </div>
          </div>
          <div className="sg-hero-bilde">
            <Image
              src={bilder.hero}
              alt="Utsikt fra badstuen gjennom glassveggen, ut mot elva og Hunsfos"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 45vw"
            />
          </div>
        </section>

        {/* b) FAKTASTRIPE */}
        <section className="sg-fakta" aria-label="Kort fortalt">
          <ul>
            <li><strong>{badstueMinutter} min</strong><span>badstue ved elva</span></li>
            <li><strong>{antallGin} gin</strong><span>smaking i bryggeriet</span></li>
            <li><strong>{minPersoner}–{maksPersoner}</strong><span>personer per gruppe</span></li>
            <li><strong>{formatKr(prisPerPerson)}</strong><span>per person, inkl. mva</span></li>
          </ul>
        </section>

        {/* c) SLIK BLIR KVELDEN */}
        <section className="sg-seksjon sg-kvelden" aria-labelledby="sg-kvelden-tittel">
          <p className="section-label reveal">Programmet</p>
          <h2 id="sg-kvelden-tittel" className="reveal reveal-delay-1">Slik blir kvelden</h2>
          <ol className="sg-kort">
            <li>
              <span className="sg-kort-nr" aria-hidden="true">1</span>
              <h3>Badstue ved elva</h3>
              <p>
                Dere får {badstueVarighet()} i badstuen helt nede ved elvekanten, med mulighet for en dukkert
                mellom rundene.
              </p>
            </li>
            <li>
              <span className="sg-kort-nr" aria-hidden="true">2</span>
              <h3>Over til bryggeriet</h3>
              <p>Etter badstuen går dere videre til Hunsfos Bryggeri i Hunsfos Næringspark.</p>
            </li>
            <li>
              <span className="sg-kort-nr" aria-hidden="true">3</span>
              <h3>Ginsmaking</h3>
              {/* Hvilke tre gin som smakes velger vi selv, de oppgis ikke til kunden. */}
              <p>
                Smaking av {tallSomOrd(antallGin)} Nordic River-gin. Gin serveres først her, etter badstue og bading.
              </p>
            </li>
          </ol>
        </section>

        {/* d) PRIS */}
        <section id="pris" className="sg-seksjon sg-pris" aria-labelledby="sg-pris-tittel">
          <div>
            <p className="section-label">Pris</p>
            <h2 id="sg-pris-tittel">Pris og hva som er med</h2>
            <p className="sg-pris-tall">
              {formatKr(prisPerPerson)} <span>per person, inkl. mva</span>
            </p>
          </div>
          <div>
            <ul className="sg-liste">
              <li>Badstue ved elva, {badstueMinutter} minutter</li>
              <li>Smaking av {tallSomOrd(antallGin)} Nordic River-gin i bryggeriet</li>
              <li>Litt småsnacks fra vårt Gourmeen-utsalg til smakingen</li>
              <li>Minimum {minPersoner} og maks {maksPersoner} personer</li>
              <li>Betaling på forhånd, med Vipps eller faktura</li>
            </ul>
            <a href="#booking" className="btn-primary">Send forespørsel</a>
          </div>
        </section>

        {/* e) REGLER */}
        <section id="regler" className="sg-seksjon sg-regler-wrap" aria-labelledby="sg-regler-tittel">
          <div className="sg-regler">
            <h2 id="sg-regler-tittel">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M12 3 2 21h20L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 10v5M12 18h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              Viktig å vite
            </h2>
            <ul>
              <li>
                <strong>Medbrakt alkohol er ikke tillatt.</strong> Brudd på alkoholreglene avlyser arrangementet uten
                refusjon.
              </li>
              <li>I badstuen serveres kun vann.</li>
              <li>Gin serveres først i bryggeriet, etter badstue og bading. Ingen bading etter alkohol.</li>
              <li>
                <strong>Aldersgrense {aldersgrense} år</strong> for alle deltakere. Legitimasjon kontrolleres ved ankomst.
              </li>
            </ul>
          </div>
        </section>

        {/* f) FØR DU KOMMER */}
        <section className="sg-seksjon sg-for" aria-labelledby="sg-for-tittel">
          <p className="section-label">Praktisk</p>
          <h2 id="sg-for-tittel">Før du kommer</h2>
          <ul className="sg-liste">
            <li>Ta med to håndklær (ett å sitte på), badetøy og vann.</li>
            <li>Badstuen ligger helt ved elvekanten, med trapp ned til badeplassen.</li>
            <li>Det er ikke toalett eller dusj ved badstuen.</li>
            <li>Ta med søppel og pant ut igjen, og lukk døra når dere går.</li>
          </ul>
          <p className="sg-merknad">Veibeskrivelse og eksakt møtested får dere på e-post når bookingen er bekreftet.</p>
        </section>

        {/* g) BOOKING */}
        <section id="booking" className="sg-seksjon sg-booking" aria-labelledby="sg-booking-tittel">
          <p className="section-label">Forespørsel</p>
          <h2 id="sg-booking-tittel">Send forespørsel</h2>
          <p className="sg-booking-ingress">
            Fortell oss når dere vil komme. Vi sjekker ledig tid og svarer på e-post. Ingen betaling her på siden.
          </p>
          <ForesporselSkjema />
        </section>

        {/* h) BUNN */}
        <section className="sg-bunn" aria-label="Leverandør og kontakt">
          <p>
            Badstuen leveres av{' '}
            <a href="https://sydsauna.no" target="_blank" rel="noopener noreferrer">SydSauna</a>
          </p>
          <address>
            Hunsfos Bryggeri AS · Hunsfos Næringspark, 4700 Vennesla ·{' '}
            <a href={`mailto:${epostMottaker}`}>{epostMottaker}</a>
          </address>
        </section>
      </main>
      <Footer />
    </>
  );
}
