export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/logo.png"
            alt="Hunsfos Bryggeri & Destilleri"
            style={{ height: '70px', width: 'auto', opacity: 0.75, marginBottom: '1rem' }}
          />
          <p className="footer-tagline">
            Håndbrygget øl fra hjertet av Vennesla —
            i det gamle Møllehuset på Hunsfos Fabrikker siden 2016.
          </p>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Øl</div>
          <ul>
            <li><a href="#produkter">Liverbirds</a></li>
            <li><a href="#produkter">6 Times</a></li>
            <li><a href="#produkter">MoIPA</a></li>
            <li><a href="#produkter">PM4</a></li>
            <li><a href="#produkter">Fatøl</a></li>
            <li><a href="#produkter">Direktørens Porter</a></li>
            <li><a href="#produkter">Direktørens Presisjons IPA</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Nordic River</div>
          <ul>
            <li><a href="https://nordic-river.com/products/no1-citrus-gin" target="_blank" rel="noopener noreferrer">No.1 Citrus Gin</a></li>
            <li><a href="https://nordic-river.com/products/no2-classic-gin" target="_blank" rel="noopener noreferrer">No.2 Classic Gin</a></li>
            <li><a href="https://nordic-river.com/products/no3-raspberry-gin" target="_blank" rel="noopener noreferrer">No.3 Raspberry Gin</a></li>
            <li><a href="https://nordic-river.com/products/no4-blackberry-gin" target="_blank" rel="noopener noreferrer">No.4 Blackberry Gin</a></li>
            <li><a href="https://nordic-river.com/products/no5-bergamot-gin" target="_blank" rel="noopener noreferrer">No.5 Bergamot Gin</a></li>
            <li><a href="https://nordic-river.com/products/premium-vodka" target="_blank" rel="noopener noreferrer">Craft Vodka</a></li>
            <li><a href="https://nordic-river.com/products/akevitt" target="_blank" rel="noopener noreferrer">Akevitt</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Opplev</div>
          <ul>
            <li><a href="mailto:post@hunsfos-bryggeri.no">Ølsmaking</a></li>
            <li><a href="#smuget">Smuget</a></li>
            <li><a href="https://hunsfos-bryggeri.no/eventer">Eventer</a></li>
            <li><a href="https://hunsfos-bryggeri.no/faq">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <div className="footer-col-title">Info</div>
          <ul>
            <li><a href="https://hunsfos-bryggeri.no/om-oss">Om oss</a></li>
            <li><a href="mailto:post@hunsfos-bryggeri.no">Kontakt oss</a></li>
            <li><a href="https://hunsfos-bryggeri.no/signin">Logg inn</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-legal">
          © 2025 Hunsfos Bryggeri AS · Org.nr. 913 052 803 · Vennesla, Norge
        </div>
        <div className="footer-address">
          Hunsfos Næringspark · Vennesla<br />
          hunsfos-bryggeri.no
        </div>
      </div>
    </footer>
  );
}
