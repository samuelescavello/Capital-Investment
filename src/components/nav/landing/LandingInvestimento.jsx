import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./LandingInvestimento.css";

emailjs.init("4J2sIUHJ4aJXglfyb");

const LandingInvestimento = () => {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    telefono: "",
    strategia: "flip",
    budget: "",
    zona: "",
    immobile: "No, sto cercando ancora",
    esperienza: "Primo investimento immobiliare",
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
        tipo: `Trading immobiliare | Strategia: ${formData.strategia === "flip" ? "Ristruttura & Rivendi" : "Frazioni & Moltiplica"} | Budget: ${formData.budget || "N/A"} | Zona: ${formData.zona || "N/A"} | Immobile: ${formData.immobile} | Esperienza: ${formData.esperienza}`,
        messaggio: formData.messaggio || "Nessun messaggio aggiuntivo",
      })
      .then(() => setSent(true))
      .catch(() => setError("Errore nell'invio. Riprova."));
  };

  return (
    <div className="li">
      {/* NAV */}
      <nav className="li-nav">
        <div className="li-logo">
          Casa<span>sumisura</span>
        </div>
        <div className="li-nav-right">
          <a onClick={() => scrollTo("strade")} className="li-nav-link">
            Le strategie
          </a>
          <a onClick={() => scrollTo("processo")} className="li-nav-link">
            Come funziona
          </a>
          <a onClick={() => scrollTo("frazionamento")} className="li-nav-link">
            Frazionamento
          </a>
          <a onClick={() => scrollTo("contatti")} className="li-nav-btn">
            Analizza il tuo progetto
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="li-hero">
        <div className="li-hero-left">
          <p className="li-hero-tag">
            Trading immobiliare · Milano &amp; Nord Italia
          </p>
          <h1>
            Compra basso.
            <br />
            Valorizza bene.
            <br />
            <em>Vendi alto.</em>
          </h1>
          <div className="li-hero-divider"></div>
          <p className="li-hero-sub">
            Individuiamo immobili sottovalutati con potenziale inespresso.
            <br />
            <strong>
              Li ristrutturiamo per massimizzare il valore di rivendita.
            </strong>
            <br />
            Oppure li frazionamo in più unità per moltiplicare il ritorno.
          </p>
          <div className="li-hero-actions">
            <a onClick={() => scrollTo("contatti")} className="li-btn-gold">
              Analizza il tuo progetto — gratis
            </a>
            <a onClick={() => scrollTo("strade")} className="li-btn-ghost">
              Scopri le strategie
            </a>
          </div>
        </div>
        <div className="li-hero-right">
          <div className="li-hero-card">
            <div className="li-card-label">
              Esempio reale · Frazionamento Milano
            </div>
            {[
              { l: "Acquisto immobile", v: "€320.000", c: "" },
              { l: "Ristrutturazione + fraz.", v: "€110.000", c: "" },
              { l: "Totale investito", v: "€430.000", c: "" },
              { l: "Valore di rivendita (2 unità)", v: "€580.000", c: "gold" },
              { l: "Plusvalenza netta stimata", v: "+€150.000", c: "pos" },
            ].map((r, i) => (
              <div className="li-profit-row" key={i}>
                <span className="li-pr-label">{r.l}</span>
                <span className={`li-pr-val ${r.c}`}>{r.v}</span>
              </div>
            ))}
            <div className="li-card-note">
              Dati indicativi su trilocale frazionato in 2 bilocali, zona
              Lambrate.
            </div>
          </div>
        </div>
      </section>

      {/* STRIP */}
      <div className="li-strip">
        <span>— Immobili con potenziale inespresso</span>
        <span>— Ristrutturazione a prezzo fisso</span>
        <span>— Frazionamento gestito</span>
        <span>— Plusvalenze 20–40%</span>
      </div>

      {/* DUE STRADE */}
      <section className="li-section li-strade" id="strade">
        <p className="li-tag">Due strategie</p>
        <h2 className="li-title dark">
          Scegli la strada giusta
          <br />
          <em>per il tuo capitale.</em>
        </h2>
        <div className="li-strade-grid">
          <div className="li-strada-card rivendita" ref={addReveal}>
            <div className="li-strada-num">01</div>
            <div className="li-strada-title">
              Ristruttura &amp; <em>Rivendi</em>
            </div>
            <p className="li-strada-sub">
              Acquisto di immobili datati in zone con alta domanda.
              Ristrutturazione mirata. Rivendita entro 12–18 mesi.
            </p>
            <div className="li-strada-points">
              {[
                "Plusvalenza rapida: exit in 12–18 mesi",
                "Capitale ricircolato: reinvesti i proventi",
                "Ristrutturazione orientata alla vendita",
                "Margini tipici: 20–35% sull'investimento",
              ].map((t, i) => (
                <div className="li-sp" key={i}>
                  <div className="li-sp-dot">✓</div>
                  <p>{t}</p>
                </div>
              ))}
            </div>
            <span className="li-strada-tag">
              Ideale per: capitale 200k–800k
            </span>
          </div>
          <div className="li-strada-card frazionamento" ref={addReveal}>
            <div className="li-strada-num">02</div>
            <div className="li-strada-title">
              Frazioni &amp; <em>Moltiplica</em>
            </div>
            <p className="li-strada-sub">
              Acquisto di immobili grandi. Frazionamento in 2–4 unità
              indipendenti. Rivendita singole unità o messa a rendita.
            </p>
            <div className="li-strada-points">
              {[
                "Maggiore ritorno: la somma delle unità vale più del singolo",
                "Flessibilità: vendi tutto o una unità alla volta",
                "Gestione completa: pratiche catastali e urbanistiche incluse",
                "Margini tipici: 30–50% sull'investimento",
              ].map((t, i) => (
                <div className="li-sp" key={i}>
                  <div className="li-sp-dot">✓</div>
                  <p>{t}</p>
                </div>
              ))}
            </div>
            <span className="li-strada-tag">Ideale per: immobili 80+ mq</span>
          </div>
        </div>
      </section>

      {/* NUMERI */}
      <section className="li-section li-numeri">
        <p className="li-tag">Il mercato supporta i numeri</p>
        <h2 className="li-title light">
          Perché Milano
          <br />
          <em>è ancora il posto giusto.</em>
        </h2>
        <div className="li-numeri-row">
          {[
            {
              big: "+22",
              unit: "%",
              label:
                "Aumento del valore degli immobili ristrutturati vs non ristrutturato a Milano.",
            },
            {
              big: "60",
              unit: "gg",
              label:
                "Tempo medio di vendita per un bilocale ristrutturato a Milano.",
            },
            {
              big: "2–4",
              unit: "x",
              label:
                "Moltiplicatore del valore nei frazionamenti ben eseguiti.",
            },
            {
              big: "12",
              unit: "–18",
              label: "Mesi dall'acquisto alla vendita nel caso tipico.",
            },
          ].map((n, i) => (
            <div className="li-num-card" key={i} ref={addReveal}>
              <div className="li-num-big">
                {n.big}
                <em>{n.unit}</em>
              </div>
              <p className="li-num-label">{n.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESSO */}
      <section className="li-section li-processo" id="processo">
        <p className="li-tag">Il metodo</p>
        <h2 className="li-title light">
          Dall'immobile grezzo
          <br />
          alla <em>plusvalenza incassata.</em>
        </h2>
        <div className="li-steps">
          {[
            {
              n: "1",
              h: "Definisci la strategia con noi",
              p: "Prima call gratuita: capiamo budget, tolleranza ai tempi e preferenza tra rivendita o frazionamento.",
              badge: "Gratuito",
            },
            {
              n: "2",
              h: "Cacciamo l'immobile giusto",
              p: "Cerchiamo immobili con potenziale inespresso: mal distribuiti, in stato grezzo, in aste o con venditori motivati.",
              badge: "Scouting",
            },
            {
              n: "3",
              h: "Ti consegniamo l'analisi del margine",
              p: "Costo acquisto, ristrutturazione/frazionamento, valore rivendita stimato, plusvalenza attesa, break-even.",
              badge: "Deal analysis",
            },
            {
              n: "4",
              h: "Trattiamo al ribasso con dati tecnici",
              p: "Conoscere i costi reali ci permette di quantificare il gap tra prezzo richiesto e prezzo giusto.",
              badge: "Negoziazione",
            },
            {
              n: "5",
              h: "Ristrutturiamo (e frazionamo) a prezzo fisso",
              p: "Scelte estetiche ad alto impatto, materiali durevoli. Per il frazionamento: pratiche catastali e impiantistiche.",
              badge: "Cantiere",
            },
            {
              n: "6",
              h: "Ti supportiamo nella vendita",
              p: "Scelta agenzia, definizione prezzo, trattativa acquirenti. Render e book fotografico professionale inclusi.",
              badge: "Exit strategy",
            },
          ].map((s, i) => (
            <div className="li-step-row" key={i} ref={addReveal}>
              <div className="li-step-num">{s.n}</div>
              <div className="li-step-content">
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
              <div className="li-step-badge">
                <span className="li-badge-pill">{s.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FRAZIONAMENTO */}
      <section className="li-section li-fraz" id="frazionamento">
        <p className="li-tag">Focus strategia</p>
        <h2 className="li-title dark">
          Il frazionamento:
          <br />
          <em>perché moltiplica il valore.</em>
        </h2>
        <div className="li-fraz-layout">
          <div className="li-fraz-visual" ref={addReveal}>
            <p className="li-tag">Schema tipico · Milano</p>
            <div className="li-fraz-schema">
              <div className="li-schema-before">
                <div className="li-schema-label">Immobile originale</div>
                <div className="li-schema-val">
                  Trilocale 110 mq — valore €340.000
                </div>
              </div>
              <div className="li-schema-arrow">
                ↓ &nbsp; Frazionamento &nbsp; ↓
              </div>
              <div className="li-schema-after">
                <div className="li-schema-unit">
                  <div className="li-schema-label">Unità A</div>
                  <div className="li-schema-val">
                    Bilocale 52 mq
                    <br />
                    <span style={{ color: "var(--gold)" }}>€195.000</span>
                  </div>
                </div>
                <div className="li-schema-unit">
                  <div className="li-schema-label">Unità B</div>
                  <div className="li-schema-val">
                    Bilocale 54 mq
                    <br />
                    <span style={{ color: "var(--gold)" }}>€205.000</span>
                  </div>
                </div>
                <div className="li-schema-total">
                  <span className="li-schema-label">
                    Valore totale rivendita
                  </span>
                  <span className="li-schema-val">€400.000</span>
                </div>
              </div>
            </div>
          </div>
          <div className="li-fraz-content" ref={addReveal}>
            <h3>
              Una unità diventa <em>due opportunità.</em>
            </h3>
            <p>
              Il frazionamento funziona perché il mercato paga il prezzo al mq
              in modo non lineare: due bilocali da 50 mq valgono più di un
              appartamento da 100 mq.
            </p>
            <div className="li-fraz-points">
              {[
                {
                  icon: "📐",
                  title: "Progetto di frazionamento",
                  desc: "Ridistribuzione spazi per unità indipendenti con ingressi separati e impianti autonomi.",
                },
                {
                  icon: "📋",
                  title: "Pratiche catastali e urbanistiche",
                  desc: "Variazione catastale, aggiornamento planimetrie, SCIA o permesso di costruire.",
                },
                {
                  icon: "⚡",
                  title: "Impianti autonomi per ogni unità",
                  desc: "Impianto elettrico, idrico e gas separati. Contatori indipendenti. Conformità certificata.",
                },
                {
                  icon: "🏢",
                  title: "Gestione condominiale",
                  desc: "Aggiornamento tabelle millesimali e notifica amministratore.",
                },
              ].map((f, i) => (
                <div className="li-fp" key={i}>
                  <div className="li-fp-icon">{f.icon}</div>
                  <div>
                    <div className="li-fp-title">{f.title}</div>
                    <p className="li-fp-desc">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COSTO */}
      <section className="li-section li-costo">
        <p className="li-tag">Trasparenza totale</p>
        <h2 className="li-title light">
          Come guadagniamo
          <br />
          <em>e cosa paghi.</em>
        </h2>
        <div className="li-costo-grid">
          {[
            {
              phase: "Fase 1 · Deal analysis",
              h: "Prima analisi gratuita",
              p: "Analisi del margine completamente gratuita e senza impegno.",
              tag: "€0 — nessun impegno",
            },
            {
              phase: "Fase 2 · Acquisto",
              h: "Fee a buon fine sull'acquisto",
              p: "Il compenso matura solo al rogito. Se i numeri non reggono, non paghi nulla.",
              tag: "Solo se compri",
            },
            {
              phase: "Fase 3 · Cantiere",
              h: "Preventivo fisso tutto incluso",
              p: "Ristrutturazione e frazionamento a prezzo e tempi contrattualizzati. Pratiche incluse.",
              tag: "Contratto fisso",
            },
          ].map((c, i) => (
            <div className="li-costo-card" key={i} ref={addReveal}>
              <div className="li-cc-phase">{c.phase}</div>
              <h3>{c.h}</h3>
              <p>{c.p}</p>
              <span className="li-cc-tag">{c.tag}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="li-section li-form-sec" id="contatti">
        <p className="li-tag">Inizia ora</p>
        <h2 className="li-title dark">
          Analizza il tuo
          <br />
          <em>prossimo progetto.</em>
        </h2>
        <p className="li-form-sub">
          Raccontaci l'immobile o il budget. Ti prepariamo un'analisi del
          margine entro 24 ore. Gratuita, senza impegno.
        </p>
        <div className="li-form-box">
          {!sent ? (
            <>
              <div className="li-f-row">
                <div className="li-f-field">
                  <label>Nome</label>
                  <input
                    type="text"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Mario"
                  />
                </div>
                <div className="li-f-field">
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
              <div className="li-f-row">
                <div className="li-f-field">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="mario@email.com"
                  />
                </div>
                <div className="li-f-field">
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
              <div className="li-f-field">
                <label>Strategia di interesse</label>
                <div className="li-strategia-toggle">
                  <div
                    className={`li-st-opt ${formData.strategia === "flip" ? "active" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, strategia: "flip" })
                    }
                  >
                    🔄 Ristruttura &amp; Rivendi
                  </div>
                  <div
                    className={`li-st-opt ${formData.strategia === "fraz" ? "active" : ""}`}
                    onClick={() =>
                      setFormData({ ...formData, strategia: "fraz" })
                    }
                  >
                    ✂️ Frazioni &amp; Moltiplica
                  </div>
                </div>
              </div>
              <div className="li-f-row">
                <div className="li-f-field">
                  <label>Budget disponibile</label>
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
                <div className="li-f-field">
                  <label>Zona di interesse</label>
                  <select
                    name="zona"
                    value={formData.zona}
                    onChange={handleChange}
                  >
                    <option value="">Seleziona</option>
                    <option>Milano — qualsiasi zona ad alto potenziale</option>
                    <option>Milano Centro / Navigli / Porta Romana</option>
                    <option>Milano Est — Città Studi, Lambrate</option>
                    <option>Milano Nord — Isola, Affori</option>
                    <option>Hinterland Milano</option>
                    <option>Flessibile — decide l'analisi</option>
                  </select>
                </div>
              </div>
              <div className="li-f-field">
                <label>Hai già un immobile in mente?</label>
                <select
                  name="immobile"
                  value={formData.immobile}
                  onChange={handleChange}
                >
                  <option>No, sto cercando ancora</option>
                  <option>Sì, ho già visto qualcosa</option>
                  <option>Sì, ho già firmato il compromesso</option>
                </select>
              </div>
              <div className="li-f-field">
                <label>Esperienza pregressa</label>
                <select
                  name="esperienza"
                  value={formData.esperienza}
                  onChange={handleChange}
                >
                  <option>Primo investimento immobiliare</option>
                  <option>Ho già fatto 1–2 operazioni</option>
                  <option>Opero regolarmente nel settore</option>
                </select>
              </div>
              <div className="li-f-field">
                <label>Dettagli aggiuntivi (opzionale)</label>
                <textarea
                  name="messaggio"
                  value={formData.messaggio}
                  onChange={handleChange}
                  placeholder="Descrivi l'immobile o il tuo obiettivo..."
                ></textarea>
              </div>
              <button className="li-f-submit" onClick={handleSubmit}>
                Richiedi l'analisi gratuita →
              </button>
              {error && <p className="li-f-error">{error}</p>}
              <p className="li-f-note">
                Nessuno spam. I tuoi dati non vengono condivisi con terze parti.
              </p>
            </>
          ) : (
            <div className="li-form-success">
              <span className="li-success-icon">✓</span>
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
      <footer className="li-footer">
        <div className="li-f-logo">
          Casa<span>sumisura</span>
        </div>
        <div className="li-f-info">
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

export default LandingInvestimento;
