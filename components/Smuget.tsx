import Image from 'next/image';

const features = [
  {
    title: 'Privat reservasjon',
    desc: 'Hele lokalet kun for dere — selskap, bursdager, firmafeiringer',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Skreddersydd opplegg',
    desc: 'Kombiner med ølsmaking, mat og guidet bryggeriomvisning',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: 'Autentiske omgivelser',
    desc: 'Inne i det historiske Møllehuset — industri møter hygge',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 22V12h6v10" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: 'Fleksibelt',
    desc: 'Tilpasset alt fra intime kvelder til større selskaper',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M12 6v6l4 2" stroke="#c4702a" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Smuget() {
  return (
    <section className="smuget-section" id="smuget">
      <div className="smuget-inner">
        <div className="smuget-text">
          <p className="section-label reveal">Privat lokale</p>
          <h2 className="reveal reveal-delay-1">Smuget</h2>
          <p className="smuget-body reveal reveal-delay-2">
            Vårt private lokale i hjertet av bryggeriet. Et autentisk industrirom
            med sjel — perfekt for selskaper som vil ha noe annet enn det vanlige.
            Vi sørger for at kvelden blir minneverdig.
          </p>

          <div className="smuget-features reveal reveal-delay-3">
            {features.map((f) => (
              <div key={f.title} className="feature-item">
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <div className="feature-title">{f.title}</div>
                  <div className="feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <a href="https://hunsfos-bryggeri.no/kontakt-oss" className="btn-primary reveal reveal-delay-4">
            Forespør reservasjon
          </a>
        </div>

        <div className="smuget-visual reveal reveal-delay-1">
          <div className="smuget-photos">
            <div className="smuget-photo-main">
              <Image
                src="/images/smuget-main.jpg"
                alt="Smuget — privat lokale"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="photo-overlay" />
            </div>
            <div className="smuget-photo-side">
              <Image
                src="/images/smuget-side.jpg"
                alt="Smuget interiør"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                style={{ objectFit: 'cover' }}
              />
              <div className="photo-overlay" />
              <div className="smuget-badge">SMUGET</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
