import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contatti.css";

const Contatti = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefono: "",
    tipo: "agenzia",
    messaggio: "",
  });

  const [notification, setNotification] = useState({
    show: false,
    type: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type: "", message: "" });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_d1sfgnd",
        "template_97o1yad",
        {
          nome: formData.nome,
          email: formData.email,
          telefono: formData.telefono || "Non fornito",
          tipo: formData.tipo,
          messaggio: formData.messaggio,
        },
        "L7Em7zdMVTy5cq4YpZm17",
      )
      .then(() => {
        showNotification(
          "success",
          "Grazie per averci contattato! Ti risponderemo entro 24 ore.",
        );
        setFormData({
          nome: "",
          email: "",
          telefono: "",
          tipo: "agenzia",
          messaggio: "",
        });
      })
      .catch(() => {
        showNotification(
          "error",
          "Si è verificato un errore. Riprova o contattaci via email.",
        );
      });
  };

  return (
    <section id="contatti" className="contatti">
      {/* Notification */}
      {notification.show && (
        <div className={`notification ${notification.type}`}>
          <div className="notification-content">
            <span className="notification-icon">
              {notification.type === "success" ? "✓" : "✕"}
            </span>
            <p>{notification.message}</p>
            <button
              className="notification-close"
              onClick={() =>
                setNotification({ show: false, type: "", message: "" })
              }
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div className="container">
        <div className="contatti-content">
          <div className="contatti-left">
            <span className="section-subtitle">Parliamone</span>
            <h2 className="section-title">Contatti</h2>

            <div className="target-audience">
              <h3>Con Chi Lavoriamo</h3>
              <div className="audience-list">
                <div className="audience-item">
                  <div className="audience-icon">🏢</div>
                  <div className="audience-text">
                    <h4>Hai un immobile che non si vende?</h4>
                    <p>
                      Appartamenti grandi, layout obsoleti, zero visite?
                      Parliamone. Trasformiamo il problema in opportunità.
                    </p>
                  </div>
                </div>
                <div className="audience-item">
                  <div className="audience-icon">🤝</div>
                  <div className="audience-text">
                    <h4>Cerchi una collaborazione vincente?</h4>
                    <p>
                      Professionisti del settore, uniamo competenze per progetti
                      ad alto rendimento e soliditá sottostante.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contatti-info">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h4>Sede</h4>
                  <p>Via Venezuela 4, 20151 Milano (MI)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📧</div>
                <div className="info-text">
                  <h4>Email</h4>
                  <p>amministrazione@capitalinvestmentmilano.it</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contatti-right">
            <div className="form-intro">
              <h3>Offerta di acquisto sul tuo immobile in 48h</h3>
              <p>
                Compila il form. Ti rispondiamo entro 48 ore con un'analisi
                preliminare gratuita e senza impegno.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nome">Nome e Cognome *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="telefono">Telefono</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="tipo">Profilo:</label>
                  <select
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                  >
                    <option value="agenzia">Agenzia Immobiliare</option>
                    <option value="professionista">
                      Professionista del Settore
                    </option>
                    <option value="proprietario">Proprietario Immobile</option>
                    <option value="altro">Altro</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="messaggio">Messaggio *</label>
                <textarea
                  id="messaggio"
                  name="messaggio"
                  rows="5"
                  value={formData.messaggio}
                  onChange={handleChange}
                  placeholder="Descrivi brevemente la tua richiesta o il progetto di cui vorresti parlare..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Invia Richiesta
              </button>

              <p className="privacy-note">
                Inviando questo form accetti la nostra{" "}
                <a
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  informativa sulla privacy
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contatti;
