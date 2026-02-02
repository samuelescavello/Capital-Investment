import { useState } from "react";
import "./Progetti.css";

const Progetti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Residenza Milano Centro",
      location: "Milano, Zona Brera",
      before: {
        size: "220mq",
        units: "1 appartamento",
        status: "Layout obsoleto",
      },
      after: {
        size: "2x110mq",
        units: "2 appartamenti",
        status: "Design contemporaneo",
      },
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400",
      roi: "+45%",
    },
    {
      id: 2,
      title: "Palazzo Storico",
      location: "Roma, Prati",
      before: {
        size: "280mq",
        units: "1 appartamento",
        status: "Spazi dispersivi",
      },
      after: {
        size: "3x93mq",
        units: "3 appartamenti",
        status: "Ottimizzazione completa",
      },
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
      roi: "+52%",
    },
    {
      id: 3,
      title: "Vista Lago",
      location: "Como, Fronte Lago",
      before: {
        size: "180mq",
        units: "1 appartamento",
        status: "Necessita ristrutturazione",
      },
      after: {
        size: "2x90mq",
        units: "2 appartamenti",
        status: "Luxury contemporaneo",
      },
      image:
        "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400",
      roi: "+38%",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="progetti" className="progetti">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Progetti Realizzati</h2>
        </div>

        <div className="carousel">
          <div className="carousel-content">
            <div className="carousel-image">
              <img
                src={projects[currentSlide].image}
                alt={projects[currentSlide].title}
              />
              <div className="image-overlay">
                <span className="roi-badge">{projects[currentSlide].roi}</span>
              </div>
            </div>

            <div className="carousel-info">
              <h3 className="project-title">{projects[currentSlide].title}</h3>
              <p className="project-location">
                {projects[currentSlide].location}
              </p>

              <div className="project-comparison">
                <div className="comparison-item">
                  <span className="comparison-label">Prima</span>
                  <div className="comparison-details">
                    <p>{projects[currentSlide].before.size}</p>
                    <p>{projects[currentSlide].before.units}</p>
                    <p className="status">
                      {projects[currentSlide].before.status}
                    </p>
                  </div>
                </div>

                <div className="comparison-arrow">→</div>

                <div className="comparison-item">
                  <span className="comparison-label gold">Dopo</span>
                  <div className="comparison-details">
                    <p>{projects[currentSlide].after.size}</p>
                    <p>{projects[currentSlide].after.units}</p>
                    <p className="status gold">
                      {projects[currentSlide].after.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-controls">
            <button onClick={prevSlide} className="carousel-btn prev">
              ←
            </button>
            <div className="carousel-dots">
              {projects.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === currentSlide ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
            <button onClick={nextSlide} className="carousel-btn next">
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progetti;
