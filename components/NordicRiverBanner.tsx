export default function NordicRiverBanner() {
  return (
    <a
      href="https://nordic-river.com"
      target="_blank"
      rel="noopener noreferrer"
      className="nordic-river-banner"
    >
      <div className="nordic-river-banner-left">
        <span className="nordic-river-label">Vår destillatlinje</span>
        <span className="nordic-river-name">Nordic River</span>
        <span className="nordic-river-sub">Gin &amp; Vodka · Destillert her på Hunsfos, Vennesla</span>
      </div>

      <div className="nordic-river-banner-right">
        <span className="nordic-river-url">nordic-river.com</span>
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" aria-hidden="true">
          <circle cx="22" cy="22" r="21" stroke="#B8955A" strokeWidth="1.5" />
          <path d="M16 22h12M23 17l5 5-5 5" stroke="#B8955A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  );
}
