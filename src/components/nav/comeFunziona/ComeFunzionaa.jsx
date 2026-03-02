import "./ComeFunziona.css";
const ComeFunziona = () => {
  const steps = [
    {
      number: "01",
      title: "Strategia",
      description:
        "Acquistiamo appartamenti di grandi dimensioni, difficili da vendere e ne ricaviamo il massimo potenziale.",
    },
    {
      number: "02",
      title: "Analisi Dettagliata",
      description:
        "Studio completo su tutti gli aspetti: urbanistica , analisi mercato, computo metrico lavori. Zero improvvisazione. Solo studio maniacale dei dati.",
    },
    {
      number: "03",
      title: "Progettazione Intelligente",
      description:
        "Riprogettazione completa: da uno spazio obsoleto con spazi sprecati  ad unità moderne , funzionali e in linea con le esigenze del mercato.",
    },
    {
      number: "04",
      title: "Ristrutturazione Premium",
      description:
        "Materiali di qualità, esecuzione impeccabile e velocità superiore alla media grazie alla partnership con RISTRUTTURAZIONI PRO, simbolo di garanzia sui cantieri. Creiamo case pensate per durare nel tempo.",
    },
    {
      number: "05",
      title: "Profitti Invidiabili",
      description:
        "Tempi e costi certi, appartamenti appetibili e velocemente vendibili. ROI medio del 34%. I numeri parlano chiaro.",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <section id="come-funziona" className="come-funziona">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Il Nostro Metodo</span>
            <h2 className="section-title">Come Funziona</h2>
          </div>

          <div className="steps-wrapper">
            {steps.map((step, index) => (
              <div key={index} className="step-item">
                <div className="step-left">
                  <span className="step-number">{step.number}</span>
                </div>
                <div className="step-right">
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <div className="cta-section">
        <div className="cta-content">
          <div className="cta-left">
            <span className="cta-label">Valutazione Gratuita</span>
            <h3>
              Immobile Invenduto?
              <br />
              Trasformiamolo in Profitto
            </h3>
          </div>
          <div className="cta-right">
            <p>
              Ti rispondiamo in 48 ore con un'analisi preliminare senza impegno
            </p>
            <button
              onClick={() => scrollToSection("contatti")}
              className="cta-button"
            >
              Richiedi Valutazione →
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComeFunziona;
