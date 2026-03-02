import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./BrochureDownload.css";

const BrochureDownload = () => {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);

  const handleSubmit = () => {
    setError("");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Inserisci la tua email");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Inserisci un'email valida");
      return;
    }
    if (!privacyAccepted) {
      setError("Devi accettare la privacy policy");
      return;
    }

    emailjs
      .send(
        "service_bcrx93c",
        "template_s3d3mhc",
        {
          user_email: email,
          project_name: "Richiesta generale",
          date: new Date().toLocaleDateString("it-IT"),
        },
        "L7Em7zdMVTy5cq4YpZm17",
      )
      .then(() => {
        setSent(true);
      })
      .catch(() => {
        setError("Errore nell'invio. Riprova più tardi.");
      });
  };

  return (
    <section id="brochure" className="brochure-section">
      <div className="brochure-container">
        <div className="brochure-content">
          <div className="brochure-text">
            <span className="brochure-subtitle">Dati Esclusivi</span>
            <h2 className="brochure-title">Richiedi la Brochure Completa</h2>
            <p className="brochure-desc">
              Scopri i numeri reali delle nostre operazioni: ricavato, utile
              netto, ROI dettagliato e analisi finanziaria completa di ogni
              progetto.
            </p>
            <div className="brochure-highlights">
              <div className="brochure-highlight-item">
                <span className="highlight-icon">📊</span>
                <span>Analisi finanziaria dettagliata</span>
              </div>
              <div className="brochure-highlight-item">
                <span className="highlight-icon">💰</span>
                <span>Ricavati e utili reali</span>
              </div>
              <div className="brochure-highlight-item">
                <span className="highlight-icon">📈</span>
                <span>ROI e ROE di ogni operazione</span>
              </div>
            </div>
          </div>

          <div className="brochure-form-card">
            {!sent ? (
              <>
                <h3>Inserisci la tua email</h3>
                <p>Ti invieremo la brochure completa entro 24 ore.</p>
                <div className="brochure-input-wrapper">
                  <input
                    type="email"
                    placeholder="La tua email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    className={`brochure-input ${error ? "input-error" : ""}`}
                  />
                  <button className="brochure-btn" onClick={handleSubmit}>
                    Richiedi
                  </button>
                </div>
                <label className="brochure-privacy">
                  <input
                    type="checkbox"
                    checked={privacyAccepted}
                    onChange={(e) => {
                      setPrivacyAccepted(e.target.checked);
                      setError("");
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
                {error && <span className="brochure-form-error">{error}</span>}
              </>
            ) : (
              <div className="brochure-sent">
                <span className="brochure-sent-icon">✓</span>
                <h3>Richiesta inviata!</h3>
                <p>
                  Riceverai la brochure all'indirizzo <strong>{email}</strong>
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;
