import Image from 'next/image';
import { SAUNA_GIN, formatKr, tallSomOrd } from '@/lib/sauna-og-gin/config';

export default function SaunaTeaser() {
  const { minPersoner, maksPersoner, prisPerPerson, antallGin, bilder, sti } = SAUNA_GIN;
  return (
    <section className="sauna-teaser" id="opplevelser" aria-labelledby="sauna-teaser-tittel">
      <div className="sauna-teaser-bilde reveal">
        <Image
          src={bilder.teaser}
          alt="Utsikt fra badstuen ut mot elva og Hunsfos"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>
      <div className="sauna-teaser-tekst">
        <p className="section-label reveal">Ny opplevelse</p>
        <h2 id="sauna-teaser-tittel" className="reveal reveal-delay-1">Sauna og ginsmaking</h2>
        <p className="sauna-teaser-body reveal reveal-delay-2">
          Badstue ved elva, så smaking av {tallSomOrd(antallGin)} Nordic River-gin i bryggeriet. For grupper på{' '}
          {minPersoner} til {maksPersoner} personer.
        </p>
        <p className="sauna-teaser-pris reveal reveal-delay-2">
          {formatKr(prisPerPerson)} per person, inkl. mva
        </p>
        <a href={sti} className="btn-primary reveal reveal-delay-3">Les mer og send forespørsel</a>
      </div>
    </section>
  );
}
