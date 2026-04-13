const bubbles = [
  { width: 60, height: 60, left: '20%', duration: '6s', delay: '0s' },
  { width: 30, height: 30, left: '40%', duration: '8s', delay: '1.5s' },
  { width: 80, height: 80, left: '60%', duration: '7s', delay: '3s' },
  { width: 20, height: 20, left: '75%', duration: '5s', delay: '0.8s' },
  { width: 50, height: 50, left: '10%', duration: '9s', delay: '2.2s' },
  { width: 35, height: 35, left: '50%', duration: '6.5s', delay: '4s' },
];

export default function Smaking() {
  return (
    <div className="smaking-section" id="smaking">
      <div className="smaking-visual" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Building photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/smaking-building.jpg"
          alt="Hunsfos Bryggeri — nattbilde"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,10,7,0.7) 0%, rgba(15,10,7,0.2) 100%)', zIndex: 1 }} />

        {bubbles.map((b, i) => (
          <div
            key={i}
            className="bubble"
            style={{
              width: b.width,
              height: b.height,
              left: b.left,
              animationDuration: b.duration,
              animationDelay: b.delay,
              position: 'relative',
              zIndex: 2,
            }}
          />
        ))}

        {/* Beer glass illustration */}
        <svg width="200" height="260" viewBox="0 0 200 260" fill="none" opacity="0.3" style={{ position: 'relative', zIndex: 2 }}>
          <path d="M55 30 L45 220 L155 220 L145 30Z" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.5"/>
          <path d="M60 80 L52 220 L148 220 L140 80Z" fill="rgba(212,165,64,0.08)"/>
          <path d="M50 30 Q100 20 150 30 Q152 50 148 55 Q100 45 52 55 Q48 50 50 30Z" fill="rgba(240,228,204,0.1)" stroke="#c4702a" strokeWidth="1" opacity="0.4"/>
          <circle cx="90" cy="130" r="3" fill="rgba(212,165,64,0.4)"/>
          <circle cx="105" cy="160" r="2" fill="rgba(212,165,64,0.3)"/>
          <circle cx="120" cy="140" r="2.5" fill="rgba(212,165,64,0.35)"/>
          <circle cx="80" cy="170" r="2" fill="rgba(212,165,64,0.3)"/>
          <path d="M145 80 Q175 80 175 120 Q175 160 145 160" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.4"/>
        </svg>
      </div>

      <div className="smaking-text">
        <p className="section-label reveal">Opplevelse</p>
        <h2 className="reveal reveal-delay-1">
          Øl &amp;<br />Brennevin<br />Smaking
        </h2>
        <p className="smaking-body reveal reveal-delay-2">
          Opplev ølbryggingen fra innsiden. Vi tar deg gjennom sortimentet
          vårt — fra humle til glass — med historiene bak hvert brygg.
          Perfekt for grupper, lag og alle som er nysgjerrige på håndverk.
        </p>
        <div className="smaking-detail reveal reveal-delay-3">
          <div className="detail-row">Guidet gjennomgang av bryggeriprosessen</div>
          <div className="detail-row">Smaking av 4–6 utvalgte ølsorter</div>
          <div className="detail-row">Valgfritt tillegg: Nordic River destillater</div>
          <div className="detail-row">Passer for grupper fra 6–40 personer</div>
        </div>
        <a href="https://hunsfos-bryggeri.no/olsmaking" className="btn-primary reveal reveal-delay-4">
          Book din smaking
        </a>
      </div>
    </div>
  );
}
