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
              <span className="logo-accent">YourBrand</span>
            </h3>
            <p className="footer-tagline">
              Investimenti immobiliari a Milano. Trasformiamo immobili in
              opportunità concrete con rendimenti superiori al mercato.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="LinkedIn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigazione */}
          <div className="footer-nav">
            <h4 className="footer-heading">Navigazione</h4>
            <ul>
              <li>
                <button onClick={() => scrollToSection("hero")}>Home</button>
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
                Milano, Italia
              </li>
              <li>
                <span className="contact-icon">✉️</span>
                <a href="mailto:info@yourbrand.it">info@yourbrand.it</a>
              </li>
              <li>
                <span className="contact-icon">📞</span>
                <a href="tel:+390200000000">+39 02 000 000 00</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© {currentYear} YourBrand. Tutti i diritti riservati.</span>
          </div>
          <div className="footer-bottom-right">
            <a href="/privacy-policy">Privacy Policy</a>
            <span className="footer-bottom-divider">|</span>
            <a href="/privacy-policy">Cookie Policy</a>
            <span className="footer-bottom-divider">|</span>
            <span>P.IVA 00000000000</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
