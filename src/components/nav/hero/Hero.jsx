import { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920",
    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {images.map((img, index) => (
          <div
            key={index}
            className={`hero-image ${index === currentImage ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-subtitle">Capital Investment</span>
          <h1 className="hero-title">
            Trasformiamo <span className="highlight">Immobili</span>
            <br />
            in Opportunità
          </h1>
          <p className="hero-description">
            Rivalorizziamo appartamenti di prestigio attraverso progettazione
            intelligente e riqualificazione completa. Dal potenziale inespresso
            al valore reale.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => scrollToSection("come-funziona")}
              className="btn-primary"
            >
              Scopri Come
            </button>
            <button
              onClick={() => scrollToSection("progetti")}
              className="btn-secondary"
            >
              Vedi Progetti
            </button>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <h3>50+</h3>
            <p>Progetti Completati</p>
          </div>
          <div className="stat-item">
            <h3>15.000mq</h3>
            <p>Spazi Rivalorizzati</p>
          </div>
          <div className="stat-item">
            <h3>+40%</h3>
            <p>ROI Medio</p>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
