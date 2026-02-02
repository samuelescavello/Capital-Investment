import { useState } from "react";
import "./Progetti.css";

const Progetti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Residenza Milano Centro",
      location: "Milano, Zona Brera",
      before: "220mq - 1 appartamento",
      after: "2 appartamenti da 110mq",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400",
      roi: "+45%",
    },
    {
      id: 2,
      title: "Palazzo Storico",
      location: "Roma, Prati",
      before: "280mq - 1 appartamento",
      after: "3 appartamenti da 93mq",
      image:
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400",
      roi: "+52%",
    },
    {
      id: 3,
      title: "Vista Lago",
      location: "Como, Fronte Lago",
      before: "180mq - 1 appartamento",
      after: "2 appartamenti da 90mq",
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
      <div className="container-full">
        <div className="section-header">
          <span className="section-subtitle">Portfolio</span>
          <h2 className="section-title">Progetti Realizzati</h2>
        </div>

        <div className="carousel-wrapper">
          <button onClick={prevSlide} className="nav-arrow left">
            ←
          </button>

          <div className="carousel-track">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`slide ${index === currentSlide ? "active" : ""}`}
              >
                <div className="slide-image">
                  <img src={project.image} alt={project.title} />
                  <div className="slide-overlay-desktop">
                    <div className="slide-content">
                      <span className="slide-number">0{index + 1}</span>
                      <h3 className="slide-title">{project.title}</h3>
                      <p className="slide-location">{project.location}</p>
                      <div className="slide-info">
                        <div className="info-row">
                          <span className="info-label">Prima:</span>
                          <span>{project.before}</span>
                        </div>
                        <div className="info-row">
                          <span className="info-label">Dopo:</span>
                          <span>{project.after}</span>
                        </div>
                        <div className="roi-tag">{project.roi} ROI</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="slide-info-mobile">
                  <span className="slide-number">0{index + 1}</span>
                  <h3 className="slide-title">{project.title}</h3>
                  <p className="slide-location">{project.location}</p>
                  <div className="slide-info">
                    <div className="info-row">
                      <span className="info-label">Prima:</span>
                      <span>{project.before}</span>
                    </div>
                    <div className="info-row">
                      <span className="info-label">Dopo:</span>
                      <span>{project.after}</span>
                    </div>
                    <div className="roi-tag">{project.roi} ROI</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button onClick={nextSlide} className="nav-arrow right">
            →
          </button>
        </div>

        <div className="carousel-indicators">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            >
              <span className="indicator-number">0{index + 1}</span>
              <span className="indicator-line"></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Progetti;
