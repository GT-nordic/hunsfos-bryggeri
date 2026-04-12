export default function About() {
  return (
    <div className="about" id="om-oss">
      <div className="about-visual reveal">
        <div className="about-frame" />
        <div className="brew-illustration">
          <svg width="220" height="300" viewBox="0 0 220 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.8">
              <ellipse cx="110" cy="90" rx="80" ry="18" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.4"/>
              <rect x="30" y="90" width="160" height="150" rx="4" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.4"/>
              <ellipse cx="110" cy="240" rx="80" ry="18" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.4"/>
              <ellipse cx="110" cy="78" rx="80" ry="14" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.3"/>
              <rect x="90" y="55" width="40" height="24" rx="2" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.3"/>
              <ellipse cx="110" cy="55" rx="20" ry="7" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.3"/>
              <path d="M30 140 Q5 140 5 165 Q5 190 30 190" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.35"/>
              <path d="M190 140 Q215 140 215 165 Q215 190 190 190" fill="none" stroke="#c4702a" strokeWidth="1.5" opacity="0.35"/>
              <rect x="170" y="195" width="30" height="10" rx="5" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.4"/>
              <rect x="195" y="198" width="15" height="4" rx="2" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.4"/>
              <ellipse cx="110" cy="110" rx="68" ry="10" fill="rgba(196,112,42,0.08)" stroke="#c4702a" strokeWidth="0.5" opacity="0.4"/>
              <circle cx="90" cy="108" r="4" fill="none" stroke="#d4a540" strokeWidth="0.8" opacity="0.5"/>
              <circle cx="110" cy="112" r="3" fill="none" stroke="#d4a540" strokeWidth="0.8" opacity="0.4"/>
              <circle cx="130" cy="107" r="4" fill="none" stroke="#d4a540" strokeWidth="0.8" opacity="0.5"/>
              <rect x="155" y="100" width="4" height="60" rx="2" fill="none" stroke="#c8b89a" strokeWidth="0.8" opacity="0.3"/>
              <path d="M85 70 Q80 55 85 40 Q90 25 85 10" fill="none" stroke="#c4702a" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
              <path d="M110 65 Q105 48 110 30 Q115 12 110 0" fill="none" stroke="#c4702a" strokeWidth="1" strokeDasharray="3 3" opacity="0.3"/>
              <path d="M135 70 Q140 53 135 36 Q130 20 135 5" fill="none" stroke="#c4702a" strokeWidth="1" strokeDasharray="3 3" opacity="0.4"/>
              <rect x="50" y="255" width="120" height="8" rx="2" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.25"/>
              <rect x="60" y="263" width="20" height="25" rx="1" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.25"/>
              <rect x="140" y="263" width="20" height="25" rx="1" fill="none" stroke="#c4702a" strokeWidth="1" opacity="0.25"/>
              <path d="M70 263 Q65 248 75 240 Q68 250 80 248 Q72 258 82 255 Q74 263 70 263Z" fill="rgba(196,112,42,0.15)" stroke="#c4702a" strokeWidth="0.5" opacity="0.5"/>
              <path d="M110 263 Q105 245 115 236 Q108 248 120 246 Q112 256 122 253 Q114 263 110 263Z" fill="rgba(196,112,42,0.15)" stroke="#c4702a" strokeWidth="0.5" opacity="0.5"/>
              <path d="M150 263 Q145 248 155 240 Q148 250 160 248 Q152 258 162 255 Q154 263 150 263Z" fill="rgba(196,112,42,0.15)" stroke="#c4702a" strokeWidth="0.5" opacity="0.5"/>
            </g>
          </svg>
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
