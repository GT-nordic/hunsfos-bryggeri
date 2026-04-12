const products = [
  {
    id: 'ipa',
    cardClass: 'card-ipa',
    abv: '6.5% ABV',
    style: 'India Pale Ale',
    name: 'Hunsfos IPA',
    desc: 'Frisk og humlerik med sitrus­preg',
    icon: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M20 30 Q20 20 40 20 Q60 20 60 30 L65 100 Q65 110 40 110 Q15 110 15 100Z" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.6"/>
        <path d="M22 55 Q40 48 58 55" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
        <path d="M22 70 Q40 63 58 70" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
        <path d="M22 85 Q40 78 58 85" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'porter',
    cardClass: 'card-porter',
    abv: '5.2% ABV',
    style: 'Robust Porter',
    name: 'Mølleporter',
    desc: 'Mørk og fyldig med sjokolade­noter',
    icon: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M20 30 Q20 20 40 20 Q60 20 60 30 L65 90 Q65 100 40 100 Q15 100 15 90Z" fill="none" stroke="#c4702a" strokeWidth="1.5"/>
        <line x1="30" y1="50" x2="50" y2="50" stroke="#c4702a" strokeWidth="1" opacity="0.4"/>
        <line x1="28" y1="65" x2="52" y2="65" stroke="#c4702a" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'pale',
    cardClass: 'card-pale',
    abv: '4.8% ABV',
    style: 'American Pale Ale',
    name: 'Venndøla Pale',
    desc: 'Balansert og tilgjengelig — et perfekt hverdagsøl',
    icon: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M25 30 Q25 18 40 18 Q55 18 55 30 L58 95 Q58 105 40 105 Q22 105 22 95Z" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.6"/>
        <path d="M25 55 Q40 50 55 55" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
        <path d="M25 70 Q40 65 55 70" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'wheat',
    cardClass: 'card-wheat',
    abv: '5.0% ABV',
    style: 'Hveteøl',
    name: 'Fabrikkens Weizen',
    desc: 'Fruktig og cremet med bananpreg',
    icon: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M35 95 L35 30" stroke="#c4702a" strokeWidth="1.5" opacity="0.5"/>
        <ellipse cx="35" cy="30" rx="12" ry="16" fill="none" stroke="#c4702a" strokeWidth="1.2" opacity="0.5"/>
        <ellipse cx="35" cy="52" rx="10" ry="12" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'lager',
    cardClass: 'card-lager',
    abv: '4.5% ABV',
    style: 'Håndbrygget Lager',
    name: 'Hunsfos Lager',
    desc: 'Ren og forfriskende — klassisk norsk',
    icon: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        <path d="M22 25 Q40 18 58 25 L62 95 Q62 108 40 108 Q18 108 18 95Z" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.5"/>
        <path d="M22 55 Q40 48 58 55" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
        <path d="M22 70 Q40 63 58 70" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
        <path d="M22 85 Q40 78 58 85" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
      </svg>
    ),
  },
  {
    id: 'seasonal',
    cardClass: 'card-seasonal',
    abv: 'Varierer',
    style: 'Sesongsøl',
    name: 'Årets Sesong',
    desc: 'Begrenset opplag — hvert årstid sin karakter',
    icon: (
      <svg width="80" height="120" viewBox="0 0 80 120" fill="none">
        <circle cx="40" cy="60" r="22" fill="none" stroke="#c4702a" strokeWidth="1.2" opacity="0.5"/>
        <circle cx="40" cy="60" r="12" fill="none" stroke="#c4702a" strokeWidth="0.8" opacity="0.4"/>
        <line x1="40" y1="30" x2="40" y2="20" stroke="#c4702a" strokeWidth="1" opacity="0.5"/>
        <line x1="40" y1="90" x2="40" y2="100" stroke="#c4702a" strokeWidth="1" opacity="0.5"/>
        <line x1="10" y1="60" x2="20" y2="60" stroke="#c4702a" strokeWidth="1" opacity="0.5"/>
        <line x1="60" y1="60" x2="70" y2="60" stroke="#c4702a" strokeWidth="1" opacity="0.5"/>
      </svg>
    ),
  },
];

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
          <div
            key={p.id}
            className={`produkt-card ${p.cardClass} reveal${i % 3 === 1 ? ' reveal-delay-1' : i % 3 === 2 ? ' reveal-delay-2' : ''}`}
          >
            <div className="card-bg" />
            <div className="card-icon">{p.icon}</div>
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
