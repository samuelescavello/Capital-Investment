import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="footer">
      {/* Top Divider */}
      <div className="footer-divider-top">
        <div className="footer-divider-line"></div>
      </div>

      <div className="footer-container">
        {/* Main Grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3 className="footer-logo">
              <img
                src="/logo-verticale.svg"
                alt="Capital Investment Milano"
                className="footer-logo-img"
              />
            </h3>
            <p className="footer-tagline">
              Investimenti immobiliari a Milano. Trasformiamo immobili in
              opportunità concrete con rendimenti superiori al mercato.
            </p>
          </div>

          {/* Navigazione */}
          <div className="footer-nav">
            <h4 className="footer-heading">Navigazione</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("come-funziona")}>
                  Come Funziona
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("progetti")}>
                  Progetti
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("chi-siamo")}>
                  Chi Siamo
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contatti")}>
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contatti */}
          <div className="footer-contact">
            <h4 className="footer-heading">Contatti</h4>
            <ul>
              <li>
                <span className="contact-icon">📍</span>
                Via Venezuela 4, 20151 Milano (MI)
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@capinvestment.it">
                  info@capinvestment.it
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>
              © {currentYear} Capital Investment Milano. Tutti i diritti
              riservati.
            </span>
          </div>
          <div className="footer-bottom-right">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-bottom-divider">|</span>
            <a href="/cookie-policy">Cookie Policy</a>
            <span className="footer-bottom-divider">|</span>
            <span>C.F. 13976270960</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
