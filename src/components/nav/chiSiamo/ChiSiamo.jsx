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
                Siamo specialisti nella valorizzazione di immobili che altri
                considerano "obsoleti". L'appartamento da 250mq che non si vende
                da anni? Per noi è un'opportunità da cui ricavare 5 piccole
                unità moderne e funzionali per giovani coppie o investitori.
              </p>
              <p>
                Mentre il mercato vede problemi, noi vediamo potenziale{" "}
                <strong>e lo trasformiamo in profitto concreto </strong>
                per i nostri investitori. Analisi rigorosa, progettazione
                intelligente, esecuzione impeccabile. Ogni progetto è studiato
                per generare valore reale, ci piace lasciare parlare i numeri ,
                scarica la brochure per saperne di piu.
              </p>
            </div>

            <div className="values-grid">
              <div className="value-item">
                <h3>Risultati Concreti</h3>
                <p>
                  ROI medio del 34,16%. Non parole, ma numeri verificabili su
                  ogni progetto.
                </p>
              </div>
              <div className="value-item">
                <h3>Analisi Accurata</h3>
                <p>
                  Analisi preventiva completa. Procediamo solo quando tutti i
                  valori sono congelati e supportati da dati concreti. Rapidità
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
                <p>Materiali e finiture che facilitano la vendita .</p>
              </div>
            </div>

            <div className="mission-box">
              <h3>Il Nostro Obiettivo</h3>
              <p>
                Trasformare ogni immobile "obsoleto" in un successo commerciale.
                Più vendibilità per te, più valore per il mercato, più profitto
                per tutti. Semplice, misurabile, efficace.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiSiamo;
