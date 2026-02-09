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
          <h1 className="hero-title">
            Da Immobili Invenduti
            <br />a <span className="highlight">Opportunità Vincenti</span>
          </h1>
          <p className="hero-description">
            Trasformiamo appartamenti di grandi dimensioni che nessuno vuole in
            unità moderne che tutti cercano. Risultato garantito: più
            vendibilità, più valore, più profitto.
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
            <p>Progetti di Successo</p>
          </div>
          <div className="stat-item">
            <h3>6000mq</h3>
            <p>Trasformati in Valore</p>
          </div>
          <div className="stat-item">
            <h3>+40%</h3>
            <p>ROI Medio </p>
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
