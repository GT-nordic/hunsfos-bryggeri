import { getHunsfosEvents, formatEventDate } from '@/lib/checkin';

const eventTypes = [
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

export default async function Eventer() {
  const events = await getHunsfosEvents();

  return (
    <section className="eventer-section" id="eventer">
      <p className="section-label reveal">Hva skjer</p>
      <h2 className="reveal reveal-delay-1">
        Eventer &amp;<br />Arrangementer
      </h2>

      <div className="events-grid">
        {eventTypes.map((e) => (
          <div key={e.name} className={`event-card reveal${e.delay}`}>
            <div className="event-month">{e.month}</div>
            <div className="event-name">{e.name}</div>
            <div className="event-desc">{e.desc}</div>
          </div>
        ))}
      </div>

      {events.length > 0 && (
        <div className="live-events reveal" style={{ marginTop: '4rem' }}>
          <p className="section-label" style={{ marginBottom: '2rem' }}>Kommende eventer</p>
          <div className="live-events-grid">
            {events.map((event, i) => {
              const { day, month, time } = formatEventDate(event.start);
              const ticketUrl = `https://checkin.no${event.url}`;
              return (
                <div key={event.id} className={`live-event-card reveal${i === 1 ? ' reveal-delay-1' : i === 2 ? ' reveal-delay-2' : ''}`}>
                  <div className="live-event-image">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={event.image} alt={event.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                    <div className="live-event-date-badge">
                      <span className="live-event-day">{day}</span>
                      <span className="live-event-month">{month}</span>
                    </div>
                  </div>
                  <div className="live-event-body">
                    <div className="live-event-meta">{time} · {event.geo_description}</div>
                    <div className="live-event-name">{event.name}</div>
                    <a href={ticketUrl} target="_blank" rel="noopener noreferrer" className="btn-primary live-event-btn">
                      Kjøp billett
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
