'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const yearRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (yearRef.current) {
        yearRef.current.style.transform = `translateY(calc(-50% + ${window.scrollY * 0.3}px))`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="hero" id="hero" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 4rem 4rem', overflow: 'hidden' }}>
      {/* Video background */}
      <iframe
        src="https://drive.google.com/file/d/122fVMfcYpt8n80fZ1CngYnheW2NnLWog/preview"
        allow="autoplay"
        style={{ position: 'absolute', top: '50%', left: '50%', width: '177.78vh', height: '100vh', minWidth: '100%', minHeight: '56.25vw', transform: 'translate(-50%,-50%)', pointerEvents: 'none', border: 'none', zIndex: 0 }}
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(15,10,7,0.85) 0%, rgba(15,10,7,0.4) 100%)', zIndex: 1 }} />

      <div className="hero-bg" style={{ zIndex: 1 }} />
      <div className="hero-grid" style={{ zIndex: 1 }} />
      <div className="steam" style={{ zIndex: 1 }} />
      <div className="hero-year" ref={yearRef} style={{ zIndex: 2 }}>2016</div>

      <div className="hero-content" style={{ maxWidth: '100%', position: 'relative', zIndex: 2 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/logo.png"
          alt="Hunsfos Bryggeri & Destilleri"
          style={{ height: '100px', width: 'auto', marginBottom: '1.5rem' }}
        />
        <p className="hero-eyebrow">Håndbrygget øl · Vennesla, Norge</p>
        <h1 className="hero-title">
          Brygget med<br /><em>sjel</em>
        </h1>
        <p className="hero-sub">
          I det gamle Møllehuset på Hunsfos Fabrikker brygger vi øl med karakter —
          nysgjerrighet og håndverk i hvert fat.
        </p>
        <div className="hero-actions">
          <a href="#produkter" className="btn-primary">Utforsk sortimentet</a>
          <a href="#om-oss" className="btn-ghost">Vår historie</a>
        </div>
      </div>

      <div className="scroll-hint" style={{ zIndex: 2 }}>
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
