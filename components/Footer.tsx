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
          <div className="footer-col-title">Utforsk</div>
          <ul>
            <li><a href="https://hunsfos-bryggeri.no/produkter">Produkter</a></li>
            <li><a href="https://nordic-river.com" target="_blank" rel="noopener noreferrer">Nordic River</a></li>
            <li><a href="https://hunsfos-bryggeri.no/utsalg">Utsalg</a></li>
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
