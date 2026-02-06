import "./ComeFunziona.css";

const ComeFunziona = () => {
  const steps = [
    {
      number: "01",
      title: "Selezione",
      description:
        "Individuiamo appartamenti di grandi dimensioni con posizione strategica ma distribuzione superata.",
    },
    {
      number: "02",
      title: "Acquisto",
      description:
        "Valutiamo fattibilità tecnica ed economica, analizzando ogni aspetto urbanistico e commerciale.",
    },
    {
      number: "03",
      title: "Progettazione",
      description:
        "Riprogettazione completa degli spazi con frazionamento intelligente per creare unità moderne.",
    },
    {
      number: "04",
      title: "Ristrutturazione",
      description:
        "Riqualificazione totale degli spazi con materiali di qualità e attenzione ai dettagli.",
    },
    {
      number: "05",
      title: "Valorizzazione",
      description:
        "Commercializzazione delle unità immobiliari rivalorizzate, pronte per il mercato contemporaneo.",
    },
  ];

  return (
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
  );
};

export default ComeFunziona;
