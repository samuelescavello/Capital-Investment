import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Progetti.css";

emailjs.init("4J2sIUHJ4aJXglfyb");

const Progetti = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeUnit, setActiveUnit] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const projectsCompletati = [
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
      useRoe: true,
      tempo: "12 mesi",
      image: "/img/caroselloImg/stup-1.jpg",
      units: [
        {
          name: "Unità 1",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/stup-1.jpg",
            "/img/caroselloImg/stup-2.jpg",
            "/img/caroselloImg/stup-3.jpg",
            "/img/caroselloImg/stup-4.jpg",
            "/img/caroselloImg/stup-5.jpg",
          ],
        },
        {
          name: "Unità 2",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/stup-6.jpg",
            "/img/caroselloImg/stup-7.jpg",
            "/img/caroselloImg/stup-8.jpg",
            "/img/caroselloImg/stup-9.jpg",
            "/img/caroselloImg/stup-10.jpg",
          ],
        },
        {
          name: "Unità 3",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/stup-11.jpg",
            "/img/caroselloImg/stup-12.jpg",
            "/img/caroselloImg/stup-13.jpg",
            "/img/caroselloImg/stup-14.jpg",
          ],
        },
        {
          name: "Unità 4",
          mq: "45 mq",
          photos: [
            "/img/caroselloImg/stup-15.jpg",
            "/img/caroselloImg/stup-16.jpg",
            "/img/caroselloImg/stup-17.jpg",
            "/img/caroselloImg/stup-18.jpg",
            "/img/caroselloImg/stup-19.jpg",
          ],
        },
      ],
    },
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "50 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 3",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 3",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 4",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "47 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "47 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 3",
          mq: "46 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 3",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 4",
          mq: "45 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "40 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
      image: "/img/caroselloImg/Placeholder.png",
      units: [
        {
          name: "Unità 1",
          mq: "73 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 2",
          mq: "73 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
        },
        {
          name: "Unità 3",
          mq: "74 mq",
          photos: ["/img/caroselloImg/Placeholder.png"],
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
    setPrivacyAccepted(false);
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
    if (!privacyAccepted) {
      setEmailError("Devi accettare la privacy policy");
      return;
    }

    console.log("Invio brochure...");
    emailjs
      .send("service_bcrx93c", "template_s3d3mhc", {
        user_email: email,
        project_name: selectedProject.title,
        date: new Date().toLocaleDateString("it-IT"),
      })
      .then(() => {
        setEmailSent(true);
      })
      .catch((err) => {
        console.log("ERRORE EMAILJS:", err);
        setEmailError("Errore nell'invio. Riprova più tardi.");
      });
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
                        <span className="roi-label">
                          {project.useRoe ? "ROE" : "ROI"}
                        </span>
                        <span className="roi-value">***</span>
                      </div>

                      <div className="project-overlay-progetti">
                        <h3>{project.location}</h3>
                        <div className="overlay-stats">
                          <div className="overlay-stat-item">
                            <span>
                              {project.useRoe ? "Investimento" : "Investimento"}
                            </span>
                            <strong>{project.investimento}</strong>
                          </div>
                          <div className="overlay-stat-item">
                            <span>Tempistica</span>
                            <strong>{project.tempo}</strong>
                          </div>
                          <div className="overlay-stat-item">
                            <span>Unità</span>
                            <strong className="censored-value">***</strong>
                          </div>
                          <div className="overlay-stat-item">
                            <span>Altri Costi</span>
                            <strong className="censored-value">
                              € ***. ***
                            </strong>
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
              {/* Left: Gallery */}
              <div className="modal-gallery-progetti">
                {/* Main Image */}
                <div className="main-image-progetti">
                  <img
                    src={(() => {
                      const allPhotos = selectedProject.units.flatMap(
                        (u) => u.photos,
                      );
                      return allPhotos[selectedImageIndex] || allPhotos[0];
                    })()}
                    alt={selectedProject.title}
                  />
                  <div className="image-counter">
                    {selectedImageIndex + 1} /{" "}
                    {selectedProject.units.flatMap((u) => u.photos).length}
                  </div>
                </div>

                {/* Thumbnails */}
                {selectedProject.units.flatMap((u) => u.photos).length > 1 && (
                  <div className="gallery-thumbs-progetti">
                    {selectedProject.units
                      .flatMap((u) => u.photos)
                      .map((img, i) => (
                        <img
                          key={i}
                          src={img}
                          alt={`foto ${i + 1}`}
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
                    <span className="censored-value">***</span> unità
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
                    <span className="key-data-label">
                      {selectedProject.useRoe ? "ROE" : "ROI"}
                    </span>
                    <span className="key-data-value gold">***</span>
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
                    <span className="detail-value-progetti censored-value">
                      ***
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
                      <label className="brochure-privacy-checkbox">
                        <input
                          type="checkbox"
                          checked={privacyAccepted}
                          onChange={(e) => {
                            setPrivacyAccepted(e.target.checked);
                            setEmailError("");
                          }}
                        />
                        <span>
                          Accetto la{" "}
                          <a
                            href="/privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </a>{" "}
                          e acconsento al trattamento dei miei dati personali
                        </span>
                      </label>
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
