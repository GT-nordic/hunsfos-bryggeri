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
          src="/images/logo.png"
          alt="Hunsfos Bryggeri & Destilleri"
          style={{ filter: 'invert(1)', mixBlendMode: 'screen', height: '52px', width: 'auto' }}
        />
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
