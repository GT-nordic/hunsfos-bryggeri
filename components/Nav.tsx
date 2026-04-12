'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const onScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav id="mainNav" ref={navRef}>
      <a href="#" className="nav-logo">
        <Image
          src="/images/logo.jpg"
          alt="Hunsfos Bryggeri"
          width={160}
          height={56}
          className="nav-logo-img"
          priority
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
      <a href="https://hunsfos-bryggeri.no/olsmaking" className="nav-cta">
        Book smaking
      </a>
    </nav>
  );
}
