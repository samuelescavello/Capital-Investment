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
                <strong>Non siamo una società immobiliare qualunque.</strong>{" "}
                Siamo specialisti nella rivalorizzazione di immobili che altri
                considerano "difficili". Quel palazzo d'epoca con l'appartamento
                da 250mq che non vende da anni? Per noi è un'opportunità da 3
                unità moderne.
              </p>
              <p>
                Mentre il mercato vede problemi, noi vediamo potenziale{" "}
                <strong>e lo trasformiamo in profitto concreto. </strong>
                Analisi rigorosa, progettazione intelligente, esecuzione
                impeccabile. Ogni progetto è studiato per generare valore reale,
                non solo belle presentazioni.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-item">
                <h3>Risultati Concreti</h3>
                <p>
                  ROI medio del 40%. Non parole, ma numeri verificabili su ogni
                  progetto.
                </p>
              </div>
              <div className="value-item">
                <h3>Analisi Accurata</h3>
                <p>
                  Analisi preventiva completa. Procediamo solo quando i numeri
                  funzionano.
                </p>
              </div>
              <div className="value-item">
                <h3>Rapidità</h3>
                <p>
                  Dal progetto alla vendita in 6-9 mesi. Velocità che genera
                  profitto.
                </p>
              </div>
              <div className="value-item">
                <h3>Qualità Premium</h3>
                <p>
                  Materiali e finiture che fanno vendere. Investiamo dove conta
                  davvero.
                </p>
              </div>
            </div>

            <div className="mission-box">
              <h3>Il Nostro Obiettivo</h3>
              <p>
                Trasformare ogni immobile "difficile" in un successo
                commerciale.
                <strong>
                  {" "}
                  Più vendibilità per te, più valore per il mercato, più
                  profitto per tutti.
                </strong>
                Semplice, misurabile, efficace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
