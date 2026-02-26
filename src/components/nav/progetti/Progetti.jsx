import { useState } from "react";
import "./Progetti.css";

const Progetti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeUnit, setActiveUnit] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");

  const projectsCompletati = [
    {
      id: 1,
      title: "Via Elia",
      location: "Milano, Via Elia",
      status: "Completato",
      mq: "80 mq",
      piano: "1°",
      investimento: "€ 390.000",
      ricavato: "€ 560.000",
      utile: "€ 170.000",
      roi: "43,6%",
      tempo: "11 mesi",
      image: "/img/caroselloImg/prog-1-slide-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-1.jpg",
            "/img/caroselloImg/prog-1-slide-2.jpg",
            "/img/caroselloImg/prog-1-slide-3.jpg",
          ],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-4.jpg",
            "/img/caroselloImg/prog-1-slide-5.jpg",
            "/img/caroselloImg/prog-1-slide-6.jpg",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Via Pallanza",
      location: "Milano, Via Pallanza",
      status: "Completato",
      mq: "50 mq",
      piano: "1°",
      investimento: "€ 170.000",
      ricavato: "€ 210.000",
      utile: "€ 40.000",
      roi: "23,5%",
      tempo: "2 mesi",
      image: "/img/caroselloImg/prog-2-slide-5.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "50 mq",
          photos: [
            "/img/caroselloImg/prog-2-slide-5.jpg",
            "/img/caroselloImg/prog-2-slide-1.jpg",
            "/img/caroselloImg/prog-2-slide-2.jpg",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "Via Scarampo",
      location: "Milano, Via Scarampo",
      status: "Completato",
      mq: "120 mq",
      piano: "1°",
      investimento: "€ 590.000",
      ricavato: "€ 837.000",
      utile: "€ 247.000",
      roi: "41,9%",
      tempo: "12 mesi",
      image: "/img/caroselloImg/prog-3-slide-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: [
            "/img/caroselloImg/prog-3-slide-1.jpg",
            "/img/caroselloImg/prog-3-slide-2.jpg",
          ],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: [
            "/img/caroselloImg/prog-3-slide-3.jpg",
            "/img/caroselloImg/prog-3-slide-4.jpg",
          ],
        },
        {
          name: "Unità 3",
          mq: "40 mq",
          photos: [
            "/img/caroselloImg/prog-3-slide-1.jpg",
            "/img/caroselloImg/prog-3-slide-2.jpg",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "Via Plinio",
      location: "Milano, Via Plinio",
      status: "Completato",
      mq: "180 mq",
      piano: "1°",
      investimento: "€ 1.100.000",
      ricavato: "€ 1.391.000",
      utile: "€ 291.000",
      roi: "26,5%",
      tempo: "11 mesi",
      image: "/img/caroselloImg/prog-1-slide-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-1.jpg",
            "/img/caroselloImg/prog-1-slide-2.jpg",
          ],
        },
        {
          name: "Unità 2",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-3.jpg",
            "/img/caroselloImg/prog-1-slide-4.jpg",
          ],
        },
        {
          name: "Unità 3",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-5.jpg",
            "/img/caroselloImg/prog-1-slide-6.jpg",
          ],
        },
        {
          name: "Unità 4",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-7.jpg",
            "/img/caroselloImg/prog-1-slide-8.jpg",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Piazza Stuparich",
      location: "Milano, Piazza Stuparich",
      status: "Completato",
      mq: "180 mq",
      piano: "3°",
      investimento: "€ 435.000",
      ricavato: "€ 773.000",
      utile: "€ 338.000",
      roi: "77,7%",
      tempo: "12 mesi",
      image: "/img/caroselloImg/prog-1-slide-8.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-1-slide-8.jpg",
            "/img/caroselloImg/prog-1-slide-9.jpg",
          ],
        },
        {
          name: "Unità 2",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-2-slide-1.jpg",
            "/img/caroselloImg/prog-2-slide-2.jpg",
          ],
        },
        {
          name: "Unità 3",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-2-slide-3.jpg",
            "/img/caroselloImg/prog-2-slide-4.jpg",
          ],
        },
        {
          name: "Unità 4",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/prog-2-slide-5.jpg",
            "/img/caroselloImg/prog-3-slide-1.jpg",
          ],
        },
      ],
    },
  ];

  const projectsInCorso = [
    {
      id: 6,
      title: "Via Buenos Aires",
      location: "Milano, Via Buenos Aires",
      status: "In Corso",
      mq: "140 mq",
      piano: "4°",
      investimento: "€ 890.000",
      ricavato: "€ 1.200.000",
      utile: "€ 310.000",
      roi: "34,8%",
      tempo: "12 mesi",
      image: "/img/caroselloImg/prog-3-slide-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "47 mq",
          photos: ["/img/caroselloImg/prog-3-slide-1.jpg"],
        },
        {
          name: "Unità 2",
          mq: "47 mq",
          photos: ["/img/caroselloImg/prog-3-slide-2.jpg"],
        },
        {
          name: "Unità 3",
          mq: "46 mq",
          photos: ["/img/caroselloImg/prog-3-slide-3.jpg"],
        },
      ],
    },
    {
      id: 7,
      title: "Via Ressi",
      location: "Milano, Via Ressi",
      status: "In Corso",
      mq: "180 mq",
      piano: "6°",
      investimento: "€ 1.000.000",
      ricavato: "€ 1.260.000",
      utile: "€ 260.000",
      roi: "26%",
      tempo: "10 mesi",
      image: "/img/caroselloImg/prog-4-slide-1.jpeg",
      units: [
        {
          name: "Unità 1",
          mq: "45 mq",
          photos: ["/img/caroselloImg/prog-4-slide-1.jpeg"],
        },
        {
          name: "Unità 2",
          mq: "45 mq",
          photos: ["/img/caroselloImg/prog-3-slide-4.jpg"],
        },
        {
          name: "Unità 3",
          mq: "45 mq",
          photos: ["/img/caroselloImg/prog-3-slide-1.jpg"],
        },
        {
          name: "Unità 4",
          mq: "45 mq",
          photos: ["/img/caroselloImg/prog-3-slide-2.jpg"],
        },
      ],
    },
    {
      id: 8,
      title: "Via Palestrina",
      location: "Milano, Via Palestrina",
      status: "In Corso",
      mq: "80 mq",
      piano: "1°",
      investimento: "€ 410.000",
      ricavato: "€ 580.000",
      utile: "€ 170.000",
      roi: "41,5%",
      tempo: "9 mesi",
      image: "/img/caroselloImg/prog-2-slide-5.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: ["/img/caroselloImg/prog-2-slide-5.jpg"],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: ["/img/caroselloImg/prog-2-slide-1.jpg"],
        },
      ],
    },
    {
      id: 9,
      title: "Corso Lodi",
      location: "Milano, Corso Lodi",
      status: "In Corso",
      mq: "80 mq",
      piano: "3°",
      investimento: "€ 390.000",
      ricavato: "€ 560.000",
      utile: "€ 170.000",
      roi: "43,6%",
      tempo: "9 mesi",
      image: "/img/caroselloImg/prog-1-slide-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: ["/img/caroselloImg/prog-1-slide-1.jpg"],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: ["/img/caroselloImg/prog-1-slide-2.jpg"],
        },
      ],
    },
    {
      id: 10,
      title: "Via Veratti",
      location: "Milano, Via Veratti",
      status: "In Corso",
      mq: "220 mq",
      piano: "5°",
      investimento: "€ 1.000.000",
      ricavato: "€ 1.260.000",
      utile: "€ 260.000",
      roi: "26%",
      tempo: "11 mesi",
      image: "/img/caroselloImg/prog-3-slide-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "73 mq",
          photos: ["/img/caroselloImg/prog-3-slide-1.jpg"],
        },
        {
          name: "Unità 2",
          mq: "73 mq",
          photos: ["/img/caroselloImg/prog-3-slide-2.jpg"],
        },
        {
          name: "Unità 3",
          mq: "74 mq",
          photos: ["/img/caroselloImg/prog-3-slide-3.jpg"],
        },
      ],
    },
  ];

  const allProjects = [...projectsCompletati, ...projectsInCorso];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % allProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + allProjects.length) % allProjects.length,
    );
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setActiveUnit(0);
    setSelectedImageIndex(0);
    setEmail("");
    setEmailSent(false);
    setEmailError("");
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    setActiveUnit(0);
    setSelectedImageIndex(0);
    document.body.style.overflow = "auto";
  };

  const switchUnit = (index) => {
    setActiveUnit(index);
    setSelectedImageIndex(0);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Inserisci la tua email");
      return;
    }
    if (!emailRegex.test(email)) {
      setEmailError("Inserisci un'email valida");
      return;
    }

    console.log("Email inviata:", email, "Progetto:", selectedProject.title);
    setEmailSent(true);
  };

  return (
    <>
      <section id="progetti" className="progetti-section">
        <div className="progetti-container">
          <div className="section-header">
            <span className="section-subtitle">Portfolio</span>
            <h2 className="section-title">I Nostri Progetti</h2>
            <p className="section-stats">
              <span className="stat-item">
                <strong>10</strong> operazioni
              </span>
              <span className="stat-divider">•</span>
              <span className="stat-item">
                <strong>1.310 mq</strong> ristrutturati
              </span>
              <span className="stat-divider">•</span>
              <span className="stat-item">
                <strong>28</strong> unità
              </span>
              <span className="stat-divider">•</span>
              <span className="stat-item">
                ROI medio <strong>38,5%</strong>
              </span>
            </p>
          </div>

          <div className="carousel-wrapper">
            <button className="nav-arrow-progetti left" onClick={prevSlide}>
              ←
            </button>

            <div className="carousel-container-progetti">
              {allProjects.map((project, index) => (
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

                      <div
                        className={`status-badge ${project.status === "In Corso" ? "in-corso" : "completato"}`}
                      >
                        {project.status}
                      </div>

                      <div className="roi-badge">
                        <span className="roi-label">ROI</span>
                        <span className="roi-value">{project.roi}</span>
                      </div>

                      <div className="project-overlay-progetti">
                        <h3>{project.location}</h3>
                        <div className="overlay-stats">
                          <div className="overlay-stat-item">
                            <span>Investimento</span>
                            <strong>{project.investimento}</strong>
                          </div>
                          <div className="overlay-stat-item">
                            <span>Tempistica</span>
                            <strong>{project.tempo}</strong>
                          </div>
                          <div className="overlay-stat-item">
                            <span>Ricavato</span>
                            <strong className="censored-value">
                              € ***. ***
                            </strong>
                          </div>
                        </div>
                        <button className="view-btn-progetti">
                          Scopri i Dettagli
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
            {allProjects.map((_, index) => (
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
              {/* Left: Units Gallery */}
              <div className="modal-gallery-progetti">
                {/* Unit Tabs */}
                <div className="unit-tabs">
                  {selectedProject.units.map((unit, index) => (
                    <button
                      key={index}
                      className={`unit-tab ${activeUnit === index ? "active" : ""}`}
                      onClick={() => switchUnit(index)}
                    >
                      <span className="unit-tab-name">{unit.name}</span>
                      <span className="unit-tab-mq">{unit.mq}</span>
                    </button>
                  ))}
                </div>

                {/* Main Image */}
                <div className="main-image-progetti">
                  <img
                    src={
                      selectedProject.units[activeUnit].photos[
                        selectedImageIndex
                      ] || selectedProject.units[activeUnit].photos[0]
                    }
                    alt={`${selectedProject.title} - ${selectedProject.units[activeUnit].name}`}
                  />
                  <div className="image-counter">
                    {selectedImageIndex + 1} /{" "}
                    {selectedProject.units[activeUnit].photos.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {selectedProject.units[activeUnit].photos.length > 1 && (
                  <div className="gallery-thumbs-progetti">
                    {selectedProject.units[activeUnit].photos.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${selectedProject.units[activeUnit].name} - foto ${i + 1}`}
                        onClick={() => setSelectedImageIndex(i)}
                        className={selectedImageIndex === i ? "active" : ""}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Right: Info */}
              <div className="modal-info-progetti">
                <div className="modal-top-row">
                  <span
                    className={`modal-status-badge ${selectedProject.status === "In Corso" ? "in-corso" : "completato"}`}
                  >
                    {selectedProject.status}
                  </span>
                  <span className="modal-units-count">
                    {selectedProject.units.length} unità
                  </span>
                </div>

                <h2>{selectedProject.title}</h2>
                <p className="modal-location-progetti">
                  📍 {selectedProject.location}
                </p>

                <div className="divider-progetti"></div>

                {/* Key Data */}
                <div className="modal-key-data">
                  <div className="key-data-item highlight">
                    <span className="key-data-label">ROI</span>
                    <span className="key-data-value gold">
                      {selectedProject.roi}
                    </span>
                  </div>
                  <div className="key-data-item">
                    <span className="key-data-label">Investimento</span>
                    <span className="key-data-value">
                      {selectedProject.investimento}
                    </span>
                  </div>
                  <div className="key-data-item">
                    <span className="key-data-label">Tempistica</span>
                    <span className="key-data-value">
                      {selectedProject.tempo}
                    </span>
                  </div>
                </div>

                <div className="divider-progetti"></div>

                {/* Property Details */}
                <div className="details-grid-progetti">
                  <div className="detail-item-progetti">
                    <span className="detail-label-progetti">
                      Superficie Totale
                    </span>
                    <span className="detail-value-progetti">
                      {selectedProject.mq}
                    </span>
                  </div>
                  <div className="detail-item-progetti">
                    <span className="detail-label-progetti">Piano</span>
                    <span className="detail-value-progetti">
                      {selectedProject.piano}
                    </span>
                  </div>
                  <div className="detail-item-progetti">
                    <span className="detail-label-progetti">N° Unità</span>
                    <span className="detail-value-progetti">
                      {selectedProject.units.length}
                    </span>
                  </div>
                </div>

                <div className="divider-progetti"></div>

                {/* Censored Data */}
                <div className="censored-data-section">
                  <div className="censored-row">
                    <span>Ricavato</span>
                    <strong className="censored-blur">€ ***. ***</strong>
                  </div>
                  <div className="censored-row">
                    <span>Utile Netto</span>
                    <strong className="censored-blur">€ ***. ***</strong>
                  </div>
                </div>

                {/* Brochure Form */}
                <div className="brochure-form-section">
                  {!emailSent ? (
                    <>
                      <div className="brochure-form-header">
                        <span className="brochure-icon">📩</span>
                        <div>
                          <h3>Vuoi scoprire i numeri completi?</h3>
                          <p>
                            Lascia la tua email e riceverai la brochure con
                            ricavato, utile e tutti i dettagli finanziari.
                          </p>
                        </div>
                      </div>
                      <div className="brochure-form-wrapper">
                        <input
                          type="email"
                          placeholder="La tua email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                          }}
                          className={`brochure-email-input ${emailError ? "input-error" : ""}`}
                        />
                        <button
                          className="brochure-submit-btn"
                          onClick={handleEmailSubmit}
                        >
                          Invia
                        </button>
                      </div>
                      {emailError && (
                        <span className="brochure-error">{emailError}</span>
                      )}
                    </>
                  ) : (
                    <div className="brochure-success">
                      <span className="success-icon">✓</span>
                      <h3>Richiesta inviata!</h3>
                      <p>
                        Riceverai la brochure completa all'indirizzo{" "}
                        <strong>{email}</strong>
                      </p>
                    </div>
                  )}
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
