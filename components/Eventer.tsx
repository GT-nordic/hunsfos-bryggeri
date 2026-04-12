const events = [
  {
    month: 'Løpende · Hele året',
    name: 'Mat og Prat',
    desc: 'Uformelt treff rundt godt øl og god mat. Vi setter rammene — du tar med deg humøret og nysgjerrigheten.',
    delay: '',
  },
  {
    month: 'Gruppe · Bedrift',
    name: 'Firmatur & Teambuilding',
    desc: 'Skreddersydd opplegg for bedrifter. Kombinér bryggeriomvisning med smaking og middag i autentiske omgivelser.',
    delay: ' reveal-delay-1',
  },
  {
    month: 'Sesong · Privat',
    name: 'Private Arrangementer',
    desc: 'Bursdag, jubileum eller bare en minneverdig kveld? Bryggeriet er tilgjengelig for private tilstelninger året rundt.',
    delay: ' reveal-delay-2',
  },
];

export default function Eventer() {
  return (
    <section className="eventer-section" id="eventer">
      <p className="section-label reveal">Hva skjer</p>
      <h2 className="reveal reveal-delay-1">
        Eventer &amp;<br />Arrangementer
      </h2>

      <div className="events-grid">
        {events.map((e) => (
          <div key={e.name} className={`event-card reveal${e.delay}`}>
            <div className="event-month">{e.month}</div>
            <div className="event-name">{e.name}</div>
            <div className="event-desc">{e.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <a href="https://hunsfos-bryggeri.no/eventer" className="btn-ghost reveal">
          Se alle eventer →
        </a>
      </div>
    </section>
  );
}
