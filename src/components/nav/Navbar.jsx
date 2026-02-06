import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h2>Capital Investment</h2>
        </div>

        <div className={`navbar-menu ${menuOpen ? "active" : ""}`}>
          <a onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </a>
          <a
            onClick={() => scrollToSection("come-funziona")}
            className="nav-link"
          >
            Come Funziona
          </a>
          <a onClick={() => scrollToSection("progetti")} className="nav-link">
            Progetti
          </a>
          <a onClick={() => scrollToSection("chi-siamo")} className="nav-link">
            Chi Siamo
          </a>
          <a onClick={() => scrollToSection("contatti")} className="nav-link">
            Contatti
          </a>
        </div>

        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
