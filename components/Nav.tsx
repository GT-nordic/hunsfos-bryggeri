'use client';

import { useEffect, useRef } from 'react';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="mainNav" ref={navRef}>
      <a href="#" className="nav-logo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/logo.jpg"
          alt=""
          style={{ mixBlendMode: 'screen', height: '44px', width: 'auto', marginRight: '0.75rem' }}
        />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'var(--font-bebas), "Bebas Neue", sans-serif', fontSize: '1.4rem', letterSpacing: '0.08em', color: 'var(--cream)' }}>
            Hunsfos
          </span>
          <span style={{ fontFamily: 'var(--font-dm-mono), "DM Mono", monospace', fontSize: '0.48rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--copper)' }}>
            Bryggeri &amp; Destilleri
          </span>
        </span>
      </a>

      <ul className="nav-links">
        <li><a href="#om-oss">Om oss</a></li>
        <li><a href="#produkter">Produkter</a></li>
        <li><a href="#smaking">Ølsmaking</a></li>
        <li><a href="#eventer">Eventer</a></li>
        <li><a href="#smuget">Smuget</a></li>
        <li><a href="#kontakt">Kontakt</a></li>
      </ul>

      <a href="https://hunsfos-bryggeri.no/olsmaking" className="nav-cta hidden md:block">
        Book smaking
      </a>
    </nav>
  );
}
