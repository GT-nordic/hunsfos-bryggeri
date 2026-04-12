'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

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
    <section className="hero" id="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="steam" />
      <div className="hero-year" ref={yearRef}>2016</div>

      <div className="hero-content">
        <div className="hero-logo-wrap">
          <Image
            src="/images/logo.jpg"
            alt="Hunsfos Bryggeri"
            width={280}
            height={100}
            className="hero-logo-img"
            priority
          />
        </div>
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

      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
