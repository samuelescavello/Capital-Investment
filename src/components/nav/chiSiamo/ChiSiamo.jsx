// components/ChiSiamo.jsx
import "./ChiSiamo.css";

const ChiSiamo = () => {
  return (
    <section id="chi-siamo" className="chi-siamo">
      <div className="container">
        <div className="chi-siamo-content">
          <div className="chi-siamo-left">
            <span className="section-subtitle">La Nostra Storia</span>
            <h2 className="section-title">Chi Siamo</h2>
          </div>

          <div className="chi-siamo-right">
            <div className="text-block">
              <p>
                Siamo una società specializzata nella{" "}
                <strong>
                  rivalorizzazione del patrimonio edilizio residenziale
                </strong>
                , con un approccio integrato che unisce analisi immobiliare,
                progettazione architettonica e gestione completa
                dell'intervento.
              </p>
              <p>
                La nostra attività si concentra sull'acquisto di appartamenti di
                grandi dimensioni che, per caratteristiche distributive superate
                o per una concezione abitativa non più in linea con le esigenze
                attuali, risultano poco attrattivi per il mercato contemporaneo.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-item">
                <h3>Rigore</h3>
                <p>
                  Competenza tecnica e attenzione ai dettagli in ogni fase del
                  progetto.
                </p>
              </div>
              <div className="value-item">
                <h3>Trasparenza</h3>
                <p>
                  Comunicazione chiara e processi verificabili con tutti gli
                  stakeholder.
                </p>
              </div>
              <div className="value-item">
                <h3>Sostenibilità</h3>
                <p>
                  Rigenerazione del patrimonio esistente senza consumo di nuovo
                  suolo.
                </p>
              </div>
              <div className="value-item">
                <h3>Qualità</h3>
                <p>
                  Materiali selezionati e soluzioni progettuali orientate al
                  lungo termine.
                </p>
              </div>
            </div>

            <div className="mission-box">
              <h3>La Nostra Missione</h3>
              <p>
                Trasformare immobili sottoutilizzati in abitazioni
                contemporanee, funzionali e di valore, capaci di rispondere alle
                esigenze di oggi e di mantenere nel tempo la loro attrattività.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
