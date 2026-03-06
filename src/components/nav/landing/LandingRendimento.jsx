import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./LandingRendimento.css";

emailjs.init("4J2sIUHJ4aJXglfyb");

const LandingRendimento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    budget: "",
    rendita: "",
    zona: "",
    esperienza: "Primo investimento",
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
        tipo: `Rendimento affitto | Budget: ${formData.budget || "N/A"} | Rendita: ${formData.rendita || "N/A"} | Zona: ${formData.zona || "N/A"} | Esperienza: ${formData.esperienza}`,
        messaggio: formData.messaggio || "Nessun messaggio aggiuntivo",
      })
      .then(() => setSent(true))
      .catch(() => setError("Errore nell'invio. Riprova."));
  };

  return (
    <div className="lr">
      {/* NAV */}
      <nav className="lr-nav">
        <div className="lr-logo">
          Casa<span>sumisura</span>
        </div>
        <div className="lr-nav-right">
          <a onClick={() => scrollTo("numeri")} className="lr-nav-link">
            I numeri
          </a>
          <a onClick={() => scrollTo("processo")} className="lr-nav-link">
            Come funziona
          </a>
          <a onClick={() => scrollTo("servizi")} className="lr-nav-link">
            Servizi
          </a>
          <a onClick={() => scrollTo("contatti")} className="lr-nav-btn">
            Calcola la tua rendita
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="lr-hero">
        <div className="lr-hero-left">
          <p className="lr-hero-tag">
            Investimento immobiliare · Milano &amp; Nord Italia
          </p>
          <h1>
            Il tuo capitale
            <br />
            lavora per te.
            <br />
            <em>Ogni mese.</em>
          </h1>
          <div className="lr-hero-divider"></div>
          <p className="lr-hero-sub">
            Troviamo l'immobile giusto nella zona giusta.
            <br />
            <strong>
              Lo ristrutturiamo e lo rendiamo attraente per gli affitti.
            </strong>
            <br />
            Poi ti troviamo l'inquilino e gestiamo il contratto. Tu incassi.
            Punto.
          </p>
          <div className="lr-hero-actions">
            <a onClick={() => scrollTo("contatti")} className="lr-btn-gold">
              Calcola la tua rendita — è gratis
            </a>
          </div>
        </div>
        <div className="lr-hero-right">
          <div className="lr-hero-card">
            <div className="lr-card-label">Esempio reale · Milano</div>
            <div className="lr-roi-row">
              <span className="lr-roi-key">Acquisto + ristrutturazione</span>
              <span className="lr-roi-val">€280k</span>
            </div>
            <div className="lr-roi-row">
              <span className="lr-roi-key">Canone mensile stimato</span>
              <span className="lr-roi-val gold">€1.400</span>
            </div>
            <div className="lr-roi-row">
              <span className="lr-roi-key">Rendita lorda annua</span>
              <span className="lr-roi-val gold">6,0%</span>
            </div>
            <div className="lr-card-note">
              Dati indicativi su bilocale ristrutturato zona Navigli. Ogni caso
              è diverso — ti calcoliamo il tuo.
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="lr-strip">
        <span>— Immobile nella zona giusta</span>
        <span>— Ristrutturazione a prezzo fisso</span>
        <span>— Inquilino selezionato</span>
        <span>— Rendita 4–7% lordo annuo</span>
      </div>

      {/* NUMERI */}
      <section className="lr-section lr-numeri" id="numeri">
        <p className="lr-tag">Perché funziona</p>
        <h2 className="lr-title">
          Milano: mercato degli affitti
          <br />
          <em>in crescita costante.</em>
        </h2>
        <div className="lr-numeri-grid">
          {[
            {
              big: "+18",
              unit: "%",
              label:
                "Aumento dei canoni di affitto a Milano negli ultimi 3 anni. La domanda supera l'offerta di immobili di qualità.",
            },
            {
              big: "4–7",
              unit: "%",
              label:
                "Rendita lorda annua su immobili ristrutturati nelle zone ad alta domanda di Milano e hinterland.",
            },
            {
              big: "<21",
              unit: "gg",
              label:
                "Tempo medio per trovare inquilino su immobili che seguiamo noi, grazie alla nostra rete.",
            },
          ].map((n, i) => (
            <div className="lr-num-card" key={i} ref={addReveal}>
              <div className="lr-num-big">
                {n.big}
                <em>{n.unit}</em>
              </div>
              <p className="lr-num-label">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="lr-section lr-processo" id="processo">
        <p className="lr-tag">Il metodo</p>
        <h2 className="lr-title light">
          Dall'investimento
          <br />
          alla <em>prima rata d'affitto.</em>
        </h2>
        <div className="lr-steps">
          {[
            {
              n: "1",
              h: "Analizziamo il tuo obiettivo di rendita",
              p: "Prima chiamata gratuita: capiamo il budget disponibile, la tolleranza al rischio e il rendimento atteso.",
              badge: "Gratuito",
            },
            {
              n: "2",
              h: "Selezioniamo l'immobile nella zona giusta",
              p: "Scegliamo in base alla domanda di affitto nella zona, ai prezzi al mq e al potenziale di rivalutazione.",
              badge: "Analisi mercato",
            },
            {
              n: "3",
              h: "Ti mostriamo la rendita attesa prima di comprare",
              p: "Simulazione dettagliata: costo acquisto, ristrutturazione, canone stimato, rendita lorda e netta, break-even.",
              badge: "Business case",
            },
            {
              n: "4",
              h: "Trattiamo il prezzo con l'agenzia",
              p: "Il nostro know-how tecnico ci permette di argomentare sconti concreti sul prezzo di vendita.",
              badge: "Negoziazione",
            },
            {
              n: "5",
              h: "Ristrutturiamo per massimizzare il canone",
              p: "Scegliamo materiali duraturi, layout funzionali e finiture che attraggono inquilini stabili. Prezzo fisso.",
              badge: "Chiavi in mano",
            },
            {
              n: "6",
              h: "Troviamo l'inquilino e stipuliamo il contratto",
              p: "Selezioniamo profili verificati con busta paga e referenze. Gestiamo contratto e deposito cauzionale.",
              badge: "Tutto incluso",
            },
          ].map((s, i) => (
            <div className="lr-step-row" key={i} ref={addReveal}>
              <div className="lr-step-num">{s.n}</div>
              <div className="lr-step-content">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
              <div className="lr-step-badge">
                <span className="lr-badge-pill">{s.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVIZI */}
      <section className="lr-section lr-servizi" id="servizi">
        <p className="lr-tag">Tutto in un unico referente</p>
        <h2 className="lr-title">
          Cosa facciamo
          <br />
          <em>al posto tuo.</em>
        </h2>
        <div className="lr-servizi-grid">
          {[
            {
              icon: "📍",
              h: "Selezione della zona",
              p: "Analizziamo vacancy rate, domanda di affitto, prezzi medi al mq e trend di rivalutazione zona per zona.",
            },
            {
              icon: "🔢",
              h: "Business case pre-acquisto",
              p: "Simulazione completa: acquisto, ristrutturazione, canone, rendita lorda/netta, tassazione, break-even.",
            },
            {
              icon: "🤝",
              h: "Trattativa e acquisto assistito",
              p: "Ti affianchiamo in offerta, proposta e rogito. Il nostro know-how abbassa il prezzo di acquisto.",
            },
            {
              icon: "🏗️",
              h: "Ristrutturazione a prezzo fisso",
              p: "Cantiere gestito da noi. Materiali selezionati per durabilità e appeal locativo. Tempi e costi a contratto.",
            },
            {
              icon: "👥",
              h: "Selezione inquilino verificato",
              p: "Screening: busta paga, contratto di lavoro, referenze. Profili stabili che proteggono il tuo reddito.",
            },
            {
              icon: "📄",
              h: "Contratto e gestione iniziale",
              p: "Redazione contratto, registrazione, deposito cauzionale. Ti consegniamo l'immobile affittato, pronto a rendere.",
            },
          ].map((s, i) => (
            <div className="lr-srv-card" key={i} ref={addReveal}>
              <div className="lr-srv-icon">{s.icon}</div>
              <h3>{s.h}</h3>
              <p>{s.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MILANO */}
      <section className="lr-section lr-milano">
        <p className="lr-tag">Dove investiamo</p>
        <h2 className="lr-title">
          Le zone di Milano
          <br />
          <em>con la migliore rendita.</em>
        </h2>
        <div className="lr-milano-layout">
          <div className="lr-zone-list" ref={addReveal}>
            {[
              {
                name: "Navigli · Porta Genova",
                rendita: "5,5–6,5%",
                domanda: "Alta",
              },
              {
                name: "Città Studi · Lambrate",
                rendita: "5,0–6,0%",
                domanda: "Molto alta",
              },
              { name: "Isola · Pasteur", rendita: "4,8–5,8%", domanda: "Alta" },
              {
                name: "Hinterland Est · Sesto, Cinisello",
                rendita: "5,5–7,0%",
                domanda: "Crescente",
              },
              {
                name: "Hinterland Nord · Monza, Bresso",
                rendita: "5,0–6,5%",
                domanda: "Stabile",
              },
            ].map((z, i) => (
              <div className="lr-zone-row" key={i}>
                <span className="lr-zone-name">{z.name}</span>
                <div className="lr-zone-meta">
                  <div className="lr-zone-stat">
                    <div className="lr-zs-val">{z.rendita}</div>
                    <div className="lr-zs-key">Rendita</div>
                  </div>
                  <div className="lr-zone-stat">
                    <div className="lr-zs-val">{z.domanda}</div>
                    <div className="lr-zs-key">Domanda</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div ref={addReveal}>
            <div className="lr-milano-note">
              <div className="lr-mn-title">Perché Milano per gli affitti?</div>
              <p>
                Milano ha la <strong>vacancy rate più bassa d'Italia</strong>:
                un appartamento ristrutturato resta libero meno di tre
                settimane. La domanda è strutturale — studenti, trasferimenti
                lavorativi, coppie.
                <strong>
                  {" "}
                  A differenza di altre città, la pressione non è stagionale
                </strong>{" "}
                ma continua tutto l'anno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* COSTO */}
      <section className="lr-section lr-costo">
        <p className="lr-tag">Trasparenza totale</p>
        <h2 className="lr-title light">
          Come guadagniamo
          <br />
          <em>e cosa paghi.</em>
        </h2>
        <div className="lr-costo-grid">
          {[
            {
              phase: "Fase 1 · Consulenza",
              h: "Prima analisi gratuita",
              p: "La prima simulazione di rendita è a costo zero. Ti diciamo subito se il tuo budget è adatto.",
              tag: "€0 — nessun impegno",
            },
            {
              phase: "Fase 2 · Acquisto",
              h: "Fee a buon fine sull'acquisto",
              p: "Il nostro compenso per ricerca, selezione e trattativa matura solo al rogito.",
              tag: "Solo se compri",
            },
            {
              phase: "Fase 3 · Ristrutturazione & Affitto",
              h: "Preventivo fisso + selezione inquilino",
              p: "Ristrutturazione a prezzo contrattuale fisso. Selezione inquilino e gestione contratto incluse.",
              tag: "Tutto a preventivo",
            },
          ].map((c, i) => (
            <div className="lr-costo-card" key={i} ref={addReveal}>
              <div className="lr-cc-phase">{c.phase}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <span className="lr-cc-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="lr-section lr-form-sec" id="contatti">
        <p className="lr-tag">Inizia ora</p>
        <h2 className="lr-title">
          Calcola la rendita
          <br />
          <em>del tuo prossimo acquisto.</em>
        </h2>
        <p className="lr-form-sub">
          Compila il form: ti prepariamo una simulazione di rendita
          personalizzata entro 24 ore. Gratis, senza impegno.
        </p>
        <div className="lr-form-box">
          {!sent ? (
            <>
              <div className="lr-f-row">
                <div className="lr-f-field">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Mario"
                  />
                </div>
                <div className="lr-f-field">
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
              <div className="lr-f-row">
                <div className="lr-f-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mario@email.com"
                  />
                </div>
                <div className="lr-f-field">
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
              <div className="lr-f-row">
                <div className="lr-f-field">
                  <label>Budget disponibile</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="">Acquisto + ristrutturazione</option>
                    <option>fino a €200.000</option>
                    <option>€200.000 – €350.000</option>
                    <option>€350.000 – €500.000</option>
                    <option>€500.000 – €750.000</option>
                    <option>oltre €750.000</option>
                  </select>
                </div>
                <div className="lr-f-field">
                  <label>Rendita attesa</label>
                  <select
                    name="rendita"
                    value={formData.rendita}
                    onChange={handleChange}
                  >
                    <option value="">Obiettivo annuo lordo</option>
                    <option>Almeno 4%</option>
                    <option>Almeno 5%</option>
                    <option>Almeno 6%</option>
                    <option>Il massimo possibile</option>
                  </select>
                </div>
              </div>
              <div className="lr-f-field">
                <label>Zona preferita</label>
                <select
                  name="zona"
                  value={formData.zona}
                  onChange={handleChange}
                >
                  <option value="">Seleziona</option>
                  <option>Milano — qualsiasi zona ad alta rendita</option>
                  <option>Milano Centro / Navigli / Isola</option>
                  <option>Milano Est — Città Studi, Lambrate</option>
                  <option>Hinterland Nord — Monza, Bresso, Sesto</option>
                  <option>Hinterland Est — Cologno, Vimodrone</option>
                  <option>Nessuna preferenza — decide l'analisi</option>
                </select>
              </div>
              <div className="lr-f-field">
                <label>Esperienza di investimento immobiliare</label>
                <select
                  name="esperienza"
                  value={formData.esperienza}
                  onChange={handleChange}
                >
                  <option>Primo investimento</option>
                  <option>Ho già 1–2 immobili a reddito</option>
                  <option>Ho già più di 2 immobili a reddito</option>
                </select>
              </div>
              <div className="lr-f-field">
                <label>Vuoi aggiungere qualcosa? (opzionale)</label>
                <textarea
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  placeholder="Hai già visto qualcosa? Hai vincoli particolari?"
                ></textarea>
              </div>
              <button className="lr-f-submit" onClick={handleSubmit}>
                Richiedi la simulazione gratuita →
              </button>
              {error && <p className="lr-f-error">{error}</p>}
              <p className="lr-f-note">
                Nessuno spam. I tuoi dati non vengono condivisi con terze parti.
              </p>
            </>
          ) : (
            <div className="lr-form-success">
              <span className="lr-success-icon">✓</span>
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
      <footer className="lr-footer">
        <div className="lr-f-logo">
          Casa<span>sumisura</span>
        </div>
        <div className="lr-f-info">
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

export default LandingRendimento;
