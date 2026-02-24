import { useState } from "react";
import "./Progetti.css";

const Progetti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Trilocale Finemente Ristrutturato",
      location: "Milano, Piazza Carlo Stuparich 8",
      category: "Ristrutturazione Completa",
      image: "/img/caroselloImg/prog-1-slide-1.jpg",
      description:
        "Completa ristrutturazione di un appartamento di 65mq nel cuore di Milano. Intervento che ha previsto demolizione pareti, nuovo impianto elettrico e idraulico, pavimentazione in parquet.",
      roi: "+38%",
      financials: {
        prezzoAcquisto: "€ 180.000",
        costoRistrutturazione: "€ 45.000",
        costoTotale: "€ 225.000",
        prezzoVendita: "€ 310.000",
        guadagnoNetto: "€ 85.000",
      },
      details: {
        superficie: "65 mq",
        anno: "2025",
      },
      gallery: [
        "/img/caroselloImg/prog-1-slide-2.jpg",
        "/img/caroselloImg/prog-1-slide-3.jpg",
        "/img/caroselloImg/prog-1-slide-4.jpg",
        "/img/caroselloImg/prog-1-slide-5.jpg",
        "/img/caroselloImg/prog-1-slide-6.jpg",
        "/img/caroselloImg/prog-1-slide-7.jpg",
        "/img/caroselloImg/prog-1-slide-8.jpg",
        "/img/caroselloImg/prog-1-slide-9.jpg",
      ],
    },
    {
      id: 2,
      title: "Rifacimento Trilocale",
      location: "Milano, Via Plinio 52",
      category: "Ristrutturazione Completa",
      image: "/img/caroselloImg/prog-2-slide-5.jpg",
      description:
        "Ristrutturazione completa di un trilocale con design moderno e funzionale.",
      roi: "+42%",
      financials: {
        prezzoAcquisto: "€ 200.000",
        costoRistrutturazione: "€ 50.000",
        costoTotale: "€ 250.000",
        prezzoVendita: "€ 355.000",
        guadagnoNetto: "€ 105.000",
      },
      details: {
        superficie: "70 mq",
        anno: "2025",
      },
      gallery: [
        "/img/caroselloImg/prog-2-slide-1.jpg",
        "/img/caroselloImg/prog-2-slide-2.jpg",
        "/img/caroselloImg/prog-2-slide-3.jpg",
        "/img/caroselloImg/prog-2-slide-4.jpg",
      ],
    },
    {
      id: 3,
      title: "Rifacimento Bilocale",
      location: "Milano, Via Plinio 52",
      category: "Ristrutturazione Completa",
      image: "/img/caroselloImg/prog-3-slide-1.jpg",
      description:
        "Ristrutturazione completa di un bilocale ottimizzato per spazi moderni.",
      roi: "+35%",
      financials: {
        prezzoAcquisto: "€ 120.000",
        costoRistrutturazione: "€ 30.000",
        costoTotale: "€ 150.000",
        prezzoVendita: "€ 202.500",
        guadagnoNetto: "€ 52.500",
      },
      details: {
        superficie: "40 mq",
        anno: "2025",
      },
      gallery: [
        "/img/caroselloImg/prog-3-slide-2.jpg",
        "/img/caroselloImg/prog-3-slide-3.jpg",
        "/img/caroselloImg/prog-3-slide-4.jpg",
      ],
    },
    {
      id: 4,
      title: "frazionamento in 4 unitá immobiliari",
      location: "Milano, Via Ressi 16",
      category: "Ristrutturazione Completa",
      image: "/img/caroselloImg/prog-3-slide-1.jpg",
      description:
        "Ristrutturazione completa di un bilocale ottimizzato per spazi moderni.",
      roi: "+35% previsto",
      financials: {
        prezzoAcquisto: "€ 710.000",
        costoRistrutturazione: "€ 140.000",
        costiVARI: "80.000",
        costoTotale: "€ 930.000",
        prezzoVendita: "€ 1.290.000",
        guadagno: "€ 360.000",
      },
      details: {
        superficie: "180 mq",
        anno: "2025",
      },
      gallery: [
        "/img/caroselloImg/prog-3-slide-2.jpg",
        "/img/caroselloImg/prog-3-slide-3.jpg",
        "/img/caroselloImg/prog-3-slide-4.jpg",
        "/img/caroselloImg/prog-4-slide-1.jpeg",
      ],
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setSelectedImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setSelectedImageIndex(0);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      <section id="progetti" className="progetti-section">
        <div className="progetti-container">
          <div className="section-header">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">Progetti Realizzati</h2>
          </div>

          <div className="carousel-wrapper">
            <button className="nav-arrow-progetti left" onClick={prevSlide}>
              ←
            </button>

            <div className="carousel-container-progetti">
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`carousel-slide-progetti ${index === currentSlide ? "active" : ""}`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 100}%)`,
                  }}
                >
                  <div
                    className="project-card-progetti"
                    onClick={() => openModal(project)}
                  >
                    <div className="project-image-progetti">
                      <img src={project.image} alt={project.title} />

                      {/* ROI Badge visibile sempre */}
                      <div className="roi-badge">
                        <span className="roi-label">ROI</span>
                        <span className="roi-value">{project.roi}</span>
                      </div>

                      <div className="project-overlay-progetti">
                        <span className="project-category-progetti">
                          {project.category}
                        </span>
                        <h3>{project.title}</h3>
                        <p className="project-location-progetti">
                          📍 {project.location}
                        </p>
                        <div className="overlay-financials">
                          <div className="overlay-financial-item">
                            <span>Acquisto</span>
                            <strong>{project.financials.prezzoAcquisto}</strong>
                          </div>
                          <div className="overlay-arrow">→</div>
                          <div className="overlay-financial-item">
                            <span>Vendita</span>
                            <strong>{project.financials.prezzoVendita}</strong>
                          </div>
                        </div>
                        <button className="view-btn-progetti">
                          Vedi Dettagli
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="nav-arrow-progetti right" onClick={nextSlide}>
              →
            </button>
          </div>

          <div className="carousel-indicators-progetti">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`indicator-progetti ${index === currentSlide ? "active" : ""}`}
                onClick={() => setCurrentSlide(index)}
              >
                <span className="indicator-line-progetti"></span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay-progetti" onClick={closeModal}>
          <div
            className="modal-content-progetti"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close-progetti" onClick={closeModal}>
              ×
            </button>

            <div className="modal-grid-progetti">
              {/* Gallery */}
              <div className="modal-gallery-progetti">
                <div className="main-image-progetti">
                  <img
                    src={
                      selectedImageIndex === 0
                        ? selectedProject.image
                        : selectedProject.gallery[selectedImageIndex - 1]
                    }
                    alt={selectedProject.title}
                  />
                </div>
                <div className="gallery-thumbs-progetti">
                  <img
                    src={selectedProject.image}
                    alt="principale"
                    onClick={() => setSelectedImageIndex(0)}
                    className={selectedImageIndex === 0 ? "active" : ""}
                  />
                  {selectedProject.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`foto ${i + 1}`}
                      onClick={() => setSelectedImageIndex(i + 1)}
                      className={selectedImageIndex === i + 1 ? "active" : ""}
                    />
                  ))}
                </div>
              </div>

              {/* Info */}
              <div className="modal-info-progetti">
                <span className="modal-category-progetti">
                  {selectedProject.category}
                </span>
                <h2>{selectedProject.title}</h2>
                <p className="modal-location-progetti">
                  📍 {selectedProject.location}
                </p>
                <div className="divider-progetti"></div>

                {/* ROI Grande */}
                <div className="modal-roi">
                  <span className="modal-roi-label">
                    Rendimento dell'operazione
                  </span>
                  <span className="modal-roi-value">{selectedProject.roi}</span>
                </div>

                <div className="divider-progetti"></div>

                {/* Dettagli Finanziari */}
                <div className="modal-financials">
                  <h3>Analisi Finanziaria</h3>

                  <div className="financial-flow">
                    <div className="financial-box before">
                      <span className="financial-box-label">Investimento</span>
                      <div className="financial-item">
                        <span>Prezzo Acquisto</span>
                        <strong>
                          {selectedProject.financials.prezzoAcquisto}
                        </strong>
                      </div>
                      <div className="financial-item">
                        <span>Costo Ristrutturazione</span>
                        <strong>
                          {selectedProject.financials.costoRistrutturazione}
                        </strong>
                      </div>
                      <div className="financial-item total">
                        <span>Costo Totale</span>
                        <strong>
                          {selectedProject.financials.costoTotale}
                        </strong>
                      </div>
                    </div>

                    <div className="financial-arrow">→</div>

                    <div className="financial-box after">
                      <span className="financial-box-label">Risultato</span>
                      <div className="financial-item">
                        <span>Prezzo Vendita</span>
                        <strong>
                          {selectedProject.financials.prezzoVendita}
                        </strong>
                      </div>
                      <div className="financial-item profit">
                        <span>Guadagno Netto</span>
                        <strong>
                          {selectedProject.financials.guadagnoNetto}
                        </strong>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="divider-progetti"></div>

                {/* Descrizione */}
                <div className="modal-desc-section">
                  <h3>Descrizione</h3>
                  <p className="modal-description-progetti">
                    {selectedProject.description}
                  </p>
                </div>

                {/* Dettagli */}
                <div className="details-grid-progetti">
                  <div className="detail-item-progetti">
                    <span className="detail-label-progetti">Superficie</span>
                    <span className="detail-value-progetti">
                      {selectedProject.details.superficie}
                    </span>
                  </div>
                  <div className="detail-item-progetti">
                    <span className="detail-label-progetti">Anno</span>
                    <span className="detail-value-progetti">
                      {selectedProject.details.anno}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Progetti;
