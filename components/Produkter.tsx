const products = [
  {
    id: 'liverbirds',
    abv: '4.6% ABV',
    style: 'Lager',
    name: 'Liverbirds',
    desc: 'Klassisk lager med frisk karakter',
    img: 'https://content.app-sources.com/s/31183878108398971/uploads/%C3%98L/YNWA_Fat%C3%B8l_033L_HB_1-0622513.png?format=webp',
  },
  {
    id: '6times',
    abv: '4.6% ABV',
    style: 'Yankee Pale Ale',
    name: '6 Times',
    desc: 'Lys og fruktig med amerikansk humlepreg',
    img: 'https://content.app-sources.com/s/31183878108398971/uploads/%C3%98L/6_TIMES_LIVERPOOL_Yankee_Pale_Ale_033L_HB-0622508.png?format=webp',
  },
  {
    id: 'moipa',
    abv: '4.7% ABV',
    style: 'IPA',
    name: 'MoIPA',
    desc: 'Humlerik og aromatisk med sitrusnyanser',
    img: 'https://content.app-sources.com/s/31183878108398971/uploads/%C3%98L/MoiPa_033L_HB-1392469.png?format=webp',
  },
  {
    id: 'pm4',
    abv: '4.6% ABV',
    style: 'Som de fleste kjenner som PM4 Yankee Pale',
    name: 'IPA',
    desc: 'En smakfull og frisk IPA med fire amerikanske humler — en stor selger!',
    img: '/images/ipa-pm4.png',
  },
  {
    id: 'fatol',
    abv: '4.6% ABV',
    style: 'Lys Lager',
    name: 'Fatøl',
    desc: 'En lys, ren fatøl som mange kaller festival pilsner',
    img: 'https://content.app-sources.com/s/31183878108398971/uploads/%C3%98L/Fat%C3%B8l_Lys_lager_033L-0622509.png?format=webp',
  },
  {
    id: 'direktporter',
    abv: '6.5% ABV',
    style: 'Sterk · Porter',
    name: 'Direktørens Porter',
    desc: 'Mørk og fyldig med sjokoladenyanser',
    img: 'https://content.app-sources.com/s/31183878108398971/uploads/STERK_%C3%98L/Direkt%C3%B8rens_Porter_033L-0798548.png?format=webp',
  },
  {
    id: 'direktipa',
    abv: '7.2% ABV',
    style: 'Sterk · IPA',
    name: 'Direktørens Presisjons IPA',
    desc: 'Kraftig og kompleks med intens humlearoma',
    img: 'https://content.app-sources.com/s/31183878108398971/uploads/STERK_%C3%98L/Direkt%C3%B8rens_Presisjons_IPA_033L-0798548.png?format=webp',
  },
];

const delays = ['', ' reveal-delay-1', ' reveal-delay-2'];

export default function Produkter() {
  return (
    <section className="produkter-section" id="produkter">
      <div className="produkter-header">
        <div>
          <p className="section-label reveal">Produkter</p>
          <h2 className="reveal reveal-delay-1">Øl med<br />karakter</h2>
        </div>
        <a href="https://hunsfos-bryggeri.no/produkter" className="btn-ghost reveal reveal-delay-2">
          Se alle produkter →
        </a>
      </div>

      <div className="produkter-grid">
        {products.map((p, i) => (
          <div key={p.id} className={`produkt-card reveal${delays[i % 3]}`}>
            {/* Subtle dark gradient background */}
            <div className="card-bg" style={{ background: 'linear-gradient(160deg, #1e160f 0%, #15100c 100%)' }} />

            {/* Bottle image */}
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem 1.5rem 5rem' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={p.img}
                alt={p.name}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))' }}
              />
            </div>

            <div className="card-abv">{p.abv}</div>
            <div className="card-content">
              <div className="card-style">{p.style}</div>
              <div className="card-name">{p.name}</div>
              <div className="card-desc">{p.desc}</div>
            </div>
            <div className="card-overlay" />
          </div>
        ))}
      </div>
    </section>
  );
}
