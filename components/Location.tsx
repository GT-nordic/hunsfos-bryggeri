export default function Location() {
  return (
    <div className="location-section" id="kontakt">
      <div className="location-map-placeholder reveal">
        <div className="location-pin">
          <svg width="32" height="42" viewBox="0 0 32 42" fill="none">
            <path
              d="M16 0C7.163 0 0 7.163 0 16C0 28 16 42 16 42C16 42 32 28 32 16C32 7.163 24.837 0 16 0Z"
              fill="rgba(196,112,42,0.2)"
              stroke="#c4702a"
              strokeWidth="1.5"
            />
            <circle cx="16" cy="16" r="5" fill="none" stroke="#c4702a" strokeWidth="1.5"/>
          </svg>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--copper)' }}>
            Vennesla, Agder
          </span>
        </div>
      </div>

      <div className="location-info reveal reveal-delay-1">
        <p className="section-label">Finn oss</p>
        <h2>Besøk<br />Bryggeriet</h2>
        <div className="location-address">
          Hunsfos Bryggeri &amp; Destilleri<br />
          Hunsfos Næringspark<br />
          Vennesla, Agder
        </div>

        <div className="opening-hours">
          <div className="hour-row">
            <span className="day">Ølsmaking / Arrangementer</span>
            <span>Etter booking</span>
          </div>
          <div className="hour-row">
            <span className="day">Smuget</span>
            <span>Etter reservasjon</span>
          </div>
          <div className="hour-row">
            <span className="day">Kontakt</span>
            <span>hunsfos-bryggeri.no</span>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://hunsfos-bryggeri.no/kontakt-oss" className="btn-primary">
            Kontakt oss
          </a>
        </div>
      </div>
    </div>
  );
}
