export default function About() {
  return (
    <div className="about" id="om-oss">
      <div className="about-visual reveal">
        <div className="about-frame" />
        <div style={{ position: 'relative', overflow: 'hidden', height: '100%', minHeight: '600px' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/brewery-dusk.png"
            alt="Hunsfos Bryggeri"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', position: 'absolute', inset: 0 }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,10,7,0.5) 0%, transparent 60%)' }} />
        </div>
      </div>

      <div className="about-text">
        <p className="section-label reveal">Om oss</p>
        <h2 className="reveal reveal-delay-1">Møllehuset<br />på Hunsfos</h2>
        <div className="about-body reveal reveal-delay-2">
          <p>
            Hunsfos Bryggeri ble til i 2014 av øl­entusiastene bak Venndøla lauget — folk som
            mente at Vennesla burde ha sin egen ølproduksjon. Det er vi enige i.
          </p>
          <p>
            I januar 2016 satte vi i gang i det gamle Møllehuset til tidligere Hunsfos Fabrikker.
            Industri­bygget gav oss ikke bare tak over hodet — det gav oss sjel. Vi brygger i dag
            et bredt sortiment av håndbrygget øl og destillerer under merket Nordic River.
          </p>
          <p>
            Vi jobber kontinuerlig med ølsortene for at de skal gi en flott og spennende
            smaksopplevelse — med særpreg som vekker og bringer videre nysgjerrigheten
            for håndbrygget øl.
          </p>
        </div>

        <div className="stat-row reveal reveal-delay-3">
          <div className="stat">
            <span className="stat-num">2016</span>
            <span className="stat-label">Oppstart brygging</span>
          </div>
          <div className="stat">
            <span className="stat-num">10+</span>
            <span className="stat-label">Ølsorter</span>
          </div>
          <div className="stat">
            <span className="stat-num">2</span>
            <span className="stat-label">Produksjonslinjer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
