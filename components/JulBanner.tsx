export default function JulBanner() {
  return (
    <section className="jul-banner" id="jul" aria-label="Direktørens Jul">
      <div className="jul-stars" aria-hidden="true" />

      <div className="jul-text">
        <p className="jul-label reveal">Julens øl · Sesong 2026</p>
        <h2 className="jul-title reveal reveal-delay-1">
          Direktørens <em>Jul</em>
        </h2>
        <p className="jul-desc reveal reveal-delay-2">
          Kraftig, smaksrik juleøl med aromatiske humler. Mørk, varm og med
          en sterk karakter, brygget i Møllehuset på Hunsfos Fabrikker.
        </p>
        <ul className="jul-facts reveal reveal-delay-2">
          <li><span>9,3 %</span> alkohol</li>
          <li><span>Terningkast 6</span> VG-test</li>
          <li><span>Sølvmedalje</span> London Beer Competition 2020</li>
        </ul>
        <div className="hero-actions reveal reveal-delay-3">
          <a href="#produkter" className="btn-primary">Se produktet</a>
          <a href="#kontakt" className="btn-ghost">Kontakt oss</a>
        </div>
      </div>

      <div className="jul-bottle reveal reveal-delay-1">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/direktorens-jul.png" alt="Direktørens Jul, Hunsfos Bryggeri" />
      </div>
    </section>
  );
}
