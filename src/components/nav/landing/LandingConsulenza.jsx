import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./LandingConsulenza.css";

emailjs.init("4J2sIUHJ4aJXglfyb");

const LandingConsulenza = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    zona: "",
    budget: "",
    tipo: "Prima casa — ci abito io",
    messaggio: "",
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const revealRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("in"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    revealRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addReveal = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = () => {
    setError("");
    if (!formData.nome || !formData.email) {
      setError("Compila almeno nome e email.");
      return;
    }
    emailjs
      .send("service_bcrx93c", "template_97o1yad", {
        nome: `${formData.nome} ${formData.cognome}`,
        email: formData.email,
        telefono: formData.telefono || "Non fornito",
        tipo: `Consulenza acquisto | Zona: ${formData.zona || "Non specificata"} | Budget: ${formData.budget || "Non specificato"} | Tipo: ${formData.tipo}`,
        messaggio: formData.messaggio || "Nessun messaggio aggiuntivo",
      })
      .then(() => setSent(true))
      .catch(() => setError("Errore nell'invio. Riprova."));
  };

  return (
    <div className="lc">
      {/* NAV */}
      <nav className="lc-nav">
        <div className="lc-logo">
          Casa<span>sumisura</span>
        </div>
        <div className="lc-nav-right">
          <a onClick={() => scrollTo("differenza")} className="lc-nav-link">
            Chi siamo
          </a>
          <a onClick={() => scrollTo("processo")} className="lc-nav-link">
            Come funziona
          </a>
          <a onClick={() => scrollTo("servizi")} className="lc-nav-link">
            Servizi
          </a>
          <a onClick={() => scrollTo("contatti")} className="lc-nav-btn">
            Consulenza gratuita
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="lc-hero">
        <div className="lc-hero-left">
          <p className="lc-hero-tag">
            Consulenza indipendente all'acquisto · Milano &amp; Nord Italia
          </p>
          <h1>
            Non partiamo
            <br />
            dagli immobili.
            <br />
            Partiamo <em>da te.</em>
          </h1>
          <div className="lc-hero-divider"></div>
          <p className="lc-hero-sub">
            Le agenzie vendono quello che hanno in portafoglio.
            <br />
            <strong>Noi cerchiamo su tutto il mercato</strong> in base alle tue
            reali esigenze — poi trasformiamo l'immobile esattamente come lo
            vuoi tu.
          </p>
          <div className="lc-hero-actions">
            <a onClick={() => scrollTo("contatti")} className="lc-btn-gold">
              Inizia gratis — prima consulenza a costo zero
            </a>
          </div>
        </div>
        <div className="lc-hero-right">
          <div className="lc-hero-card">
            <div className="lc-card-label">Il nostro modello</div>
            <div className="lc-card-text">"Paghi solo se trovi casa."</div>
            <div className="lc-card-note">
              Fee di successo · nessun costo iniziale
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="lc-strip">
        <span>— Prima consulenza gratuita</span>
        <span>— Indipendenti dalle agenzie</span>
        <span>— Render 3D prima dell'acquisto</span>
        <span>— Ristrutturazione a prezzo fisso</span>
      </div>

      {/* DIFFERENZA */}
      <section className="lc-section lc-diff" id="differenza">
        <p className="lc-tag">Perché siamo diversi</p>
        <h2 className="lc-title">
          Non siamo un'agenzia.
          <br />
          <em>Siamo dalla tua parte.</em>
        </h2>
        <div className="lc-diff-layout">
          <div className="lc-diff-col them" ref={addReveal}>
            <h3>L'agenzia tradizionale</h3>
            {[
              "Parte dagli incarichi che ha in portafoglio, non da ciò che cerchi",
              "Ha interesse a vendere un immobile specifico, non il migliore per te",
              "Nessun supporto tecnico: non sa dirti come potrebbe essere ristrutturato",
              "Commissione dovuta a prescindere dalla tua soddisfazione",
            ].map((t, i) => (
              <div className="lc-diff-item them" key={i}>
                <div className="lc-di-icon them">✗</div>
                <p>{t}</p>
              </div>
            ))}
          </div>
          <div className="lc-diff-col us" ref={addReveal}>
            <h3>Casasumisura</h3>
            {[
              "Partiamo da un'analisi delle tue esigenze reali — stile di vita, priorità, budget",
              "Cerchiamo su tutto il mercato, anche tramite agenzie esterne, senza conflitti",
              "Valutiamo il potenziale nascosto di ogni immobile: redistribuiamo gli spazi per creare la casa che vuoi",
              "Paghi solo alla buona riuscita — zero costi se non troviamo casa",
            ].map((t, i) => (
              <div className="lc-diff-item us" key={i}>
                <div className="lc-di-icon us">✓</div>
                <p>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSO */}
      <section className="lc-section lc-processo" id="processo">
        <p className="lc-tag">Il nostro metodo</p>
        <h2 className="lc-title light">
          Dalla prima
          <br />
          conversazione
          <br />
          alla <em>casa finita.</em>
        </h2>
        <div className="lc-steps">
          {[
            {
              n: "1",
              h: "Ascoltiamo le tue esigenze reali",
              p: "Prima chiamata gratuita: capiamo come vivi, cosa ti serve davvero, dove vuoi abitare e qual è il budget realistico.",
            },
            {
              n: "2",
              h: "Cerchiamo su tutto il mercato",
              p: "Monitoriamo annunci pubblici, ci coordiniamo con agenzie esterne e attiviamo canali non pubblici.",
            },
            {
              n: "3",
              h: "Valutiamo il potenziale e redistribuiamo gli spazi",
              p: "Analizziamo ogni immobile per capire come trasformarlo. Dove altri vedono un appartamento datato, noi vediamo opportunità.",
            },
            {
              n: "4",
              h: "Ti mostriamo come diventerà — prima di comprare",
              p: "Render 3D di ogni ambiente inclusi nella consulenza. Vedi il risultato finale prima di fare qualsiasi offerta.",
            },
            {
              n: "5",
              h: "Ti affianchiamo in trattativa",
              p: "Argomenti tecnici concreti nel confronto con l'agenzia. Il nostro know-how ti dà un vantaggio negoziale.",
            },
            {
              n: "6",
              h: "Ristrutturiamo chiavi in mano",
              p: "Gestiamo l'intero cantiere a prezzo fisso, con tempi definiti a contratto. Un unico referente, zero sorprese.",
            },
          ].map((s, i) => (
            <div className="lc-step-row" key={i} ref={addReveal}>
              <div className="lc-step-num">{s.n}</div>
              <div className="lc-step-content">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIZI */}
      <section className="lc-section lc-servizi" id="servizi">
        <p className="lc-tag">Tutto incluso</p>
        <h2 className="lc-title">
          Un servizio
          <br />
          <em>costruito su misura.</em>
        </h2>
        <div className="lc-servizi-grid">
          {[
            {
              icon: "🎯",
              h: "Analisi delle esigenze",
              p: "Non iniziamo dalla lista degli immobili. Iniziamo da te: come vivi, cosa ti serve, dove vuoi abitare tra 10 anni.",
            },
            {
              icon: "🔍",
              h: "Ricerca indipendente",
              p: "Cerchiamo su tutto il mercato senza conflitti di interesse. Annunci pubblici, reti di agenzie, canali privati.",
            },
            {
              icon: "📐",
              h: "Redistribuzione degli spazi",
              p: "Valutiamo come ogni immobile può essere ridisegnato per massimizzarne il valore e adattarlo alle tue esigenze.",
            },
            {
              icon: "🎨",
              h: "Render 3D pre-acquisto",
              p: "Render fotorealistici di ogni stanza inclusi nella consulenza. Vedi la casa finita prima di firmare.",
            },
            {
              icon: "🤝",
              h: "Supporto in trattativa",
              p: "Ti affianchiamo con dati tecnici e di mercato concreti. Spesso otteniamo riduzioni significative sul prezzo.",
            },
            {
              icon: "🏗️",
              h: "Ristrutturazione chiavi in mano",
              p: "Intero cantiere a prezzo fisso, pratiche burocratiche incluse. Un contratto, un referente, zero imprevisti.",
            },
          ].map((s, i) => (
            <div className="lc-srv-card" key={i} ref={addReveal}>
              <div className="lc-srv-icon">{s.icon}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COSTO */}
      <section className="lc-section lc-costo">
        <p className="lc-tag" style={{ textAlign: "center" }}>
          Trasparenza totale
        </p>
        <h2
          className="lc-title"
          style={{ textAlign: "center", maxWidth: "none" }}
        >
          Quanto costa?
        </h2>
        <div className="lc-costo-box" ref={addReveal}>
          <div className="lc-costo-icon">💡</div>
          <h3>
            Prima consulenza <em>gratuita.</em>
            <br />
            Paghi solo se trovi casa.
          </h3>
          <p>
            Il nostro compenso matura solo alla buona riuscita dell'acquisto. Se
            non troviamo l'immobile giusto per te, non devi nulla.
          </p>
          <div className="lc-costo-pills">
            <div className="lc-pill">
              <strong>€0</strong> prima consulenza
            </div>
            <div className="lc-pill">
              <strong>Fee a buon fine</strong> sull'acquisto
            </div>
            <div className="lc-pill">
              <strong>Preventivo fisso</strong> per la ristrutturazione
            </div>
          </div>
        </div>
      </section>

      {/* FORM */}
      <section className="lc-section lc-form-sec" id="contatti">
        <p className="lc-tag">Inizia ora</p>
        <h2 className="lc-title light">
          Raccontaci
          <br />
          cosa stai cercando.
        </h2>
        <p className="lc-form-sub">
          La prima consulenza è gratuita e senza impegno. Ti ricontattiamo entro
          24 ore.
        </p>
        <div className="lc-form-box">
          {!sent ? (
            <>
              <div className="lc-f-row">
                <div className="lc-f-field">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Mario"
                  />
                </div>
                <div className="lc-f-field">
                  <label>Cognome</label>
                  <input
                    type="text"
                    name="cognome"
                    value={formData.cognome}
                    onChange={handleChange}
                    placeholder="Rossi"
                  />
                </div>
              </div>
              <div className="lc-f-row">
                <div className="lc-f-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mario@email.com"
                  />
                </div>
                <div className="lc-f-field">
                  <label>Telefono</label>
                  <input
                    type="tel"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    placeholder="+39 333 000 0000"
                  />
                </div>
              </div>
              <div className="lc-f-field">
                <label>Zona di interesse</label>
                <select
                  name="zona"
                  value={formData.zona}
                  onChange={handleChange}
                >
                  <option value="">Seleziona</option>
                  <option>Milano Centro / Navigli / Porta Romana</option>
                  <option>Milano Nord — Isola, Porta Nuova, Affori</option>
                  <option>
                    Milano Est — Città Studi, Lambrate, Crescenzago
                  </option>
                  <option>Milano Ovest — Sempione, De Angeli, Certosa</option>
                  <option>Hinterland Milano</option>
                  <option>Altro Nord Italia</option>
                </select>
              </div>
              <div className="lc-f-row">
                <div className="lc-f-field">
                  <label>Budget complessivo</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Acquisto + ristrutturazione</option>
                    <option>fino a €250.000</option>
                    <option>€250.000 – €400.000</option>
                    <option>€400.000 – €600.000</option>
                    <option>€600.000 – €900.000</option>
                    <option>oltre €900.000</option>
                  </select>
                </div>
                <div className="lc-f-field">
                  <label>Tipo di acquisto</label>
                  <select
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                  >
                    <option>Prima casa — ci abito io</option>
                    <option>Investimento — affitto</option>
                    <option>Investimento — rivendita</option>
                    <option>Non ancora deciso</option>
                  </select>
                </div>
              </div>
              <div className="lc-f-field">
                <label>Raccontaci di più (opzionale)</label>
                <textarea
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  placeholder="Quante stanze ti servono? Hai esigenze specifiche?"
                ></textarea>
              </div>
              <button className="lc-f-submit" onClick={handleSubmit}>
                Richiedi consulenza gratuita →
              </button>
              {error && <p className="lc-f-error">{error}</p>}
              <p className="lc-f-note">
                Nessuno spam. I tuoi dati non vengono condivisi con terze parti.
              </p>
            </>
          ) : (
            <div className="lc-form-success">
              <span className="lc-success-icon">✓</span>
              <h3>Richiesta inviata!</h3>
              <p>
                Ti ricontatteremo entro 24 ore all'indirizzo{" "}
                <strong>{formData.email}</strong>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="lc-footer">
        <div className="lc-f-logo">
          Casa<span>sumisura</span>
        </div>
        <div className="lc-f-info">
          📍 Via Venezuela 4, 20151 Milano (MI)
          <br />
          ✉️ amministrazione@capitalinvestmentmilano.it
          <br />
          C.F. 13976270960 · © {new Date().getFullYear()} Casasumisura
        </div>
      </footer>
    </div>
  );
};

export default LandingConsulenza;
