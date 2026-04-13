export default function Smaking() {
  return (
    <div className="smaking-section" id="smaking">
      <div className="smaking-visual" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/smaking-building.jpg"
          alt="Hunsfos Bryggeri — nattbilde"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', zIndex: 0 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(15,10,7,0.7) 0%, rgba(15,10,7,0.2) 100%)', zIndex: 1 }} />
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
