import { useEffect } from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-header">
        <div className="privacy-header-content">
          <a href="/" className="privacy-back-link">
            ← Torna al sito
          </a>
          <h1>Privacy Policy</h1>
          <p className="privacy-update">Ultimo aggiornamento: Febbraio 2026</p>
        </div>
      </div>

      <div className="privacy-container">
        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento dei dati personali è{" "}
              <strong>Capital Investment Milano</strong>, con sede legale in{" "}
              <strong>Via Venezuela 4, 20151 Milano (MI)</strong>, C.F. e n.
              iscr. Registro Imprese <strong>13976270960</strong>, email:{" "}
              <strong>amministrazione@capitalinvestmentmilano.it</strong> (di
              seguito "Titolare").
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Tipologia di Dati Raccolti</h2>
            <p>
              Il Titolare raccoglie i seguenti dati personali, forniti
              volontariamente dall'utente attraverso i moduli presenti sul sito:
            </p>
            <p>
              <strong>Dati identificativi e di contatto:</strong> indirizzo
              email, fornito tramite i form di richiesta brochure e iscrizione
              alla newsletter presenti sul sito.
            </p>
            <p>
              <strong>Dati di navigazione:</strong> durante la navigazione
              possono essere raccolti automaticamente dati quali indirizzo IP,
              tipo di browser, sistema operativo, pagine visitate, tempo di
              permanenza, attraverso cookie tecnici e, previo consenso, cookie
              analitici.
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Finalità del Trattamento</h2>
            <p>I dati personali sono trattati per le seguenti finalità:</p>
            <p>
              <strong>a) Invio di materiale informativo:</strong> l'indirizzo
              email fornito attraverso il modulo di richiesta brochure viene
              utilizzato esclusivamente per inviare la documentazione relativa
              ai progetti immobiliari richiesti. Base giuridica: consenso
              dell'interessato (art. 6, par. 1, lett. a, GDPR).
            </p>
            <p>
              <strong>b) Newsletter e comunicazioni commerciali:</strong> previo
              consenso esplicito, l'email può essere utilizzata per l'invio di
              aggiornamenti su nuovi progetti, opportunità di investimento e
              comunicazioni di natura commerciale. Base giuridica: consenso
              dell'interessato (art. 6, par. 1, lett. a, GDPR).
            </p>
            <p>
              <strong>c) Analisi statistica:</strong> in forma aggregata e
              anonima, per migliorare i servizi offerti e l'esperienza di
              navigazione sul sito. Base giuridica: legittimo interesse del
              Titolare (art. 6, par. 1, lett. f, GDPR).
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Modalità di Trattamento</h2>
            <p>
              Il trattamento dei dati personali viene effettuato mediante
              strumenti informatici e/o telematici, con logiche strettamente
              correlate alle finalità indicate e, comunque, in modo da garantire
              la sicurezza e la riservatezza dei dati stessi, in conformità al
              Regolamento UE 2016/679 (GDPR) e al D.Lgs. 196/2003 come
              modificato dal D.Lgs. 101/2018.
            </p>
            <p>
              I dati vengono conservati su server sicuri situati all'interno
              dell'Unione Europea. Sono adottate misure di sicurezza adeguate
              per prevenire la perdita dei dati, usi illeciti o non corretti e
              accessi non autorizzati.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Periodo di Conservazione</h2>
            <p>
              I dati personali raccolti per l'invio della brochure saranno
              conservati per un periodo massimo di <strong>24 mesi</strong>{" "}
              dalla raccolta, salvo revoca anticipata del consenso da parte
              dell'utente.
            </p>
            <p>
              I dati relativi alla newsletter saranno conservati fino alla
              cancellazione dell'iscrizione, che può essere richiesta in
              qualsiasi momento tramite il link presente in ogni comunicazione o
              contattando il Titolare.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Comunicazione e Diffusione dei Dati</h2>
            <p>
              I dati personali non saranno diffusi né comunicati a terzi, ad
              eccezione di soggetti che operano come responsabili del
              trattamento (es. provider di servizi email, hosting) vincolati da
              adeguate garanzie contrattuali ai sensi dell'art. 28 del GDPR.
            </p>
            <p>
              I dati non saranno trasferiti al di fuori dell'Unione Europea.
              Qualora ciò si rendesse necessario, il trasferimento avverrà solo
              verso Paesi che garantiscono un livello adeguato di protezione o
              sulla base di clausole contrattuali standard approvate dalla
              Commissione Europea.
            </p>
          </section>

          <section className="privacy-section">
            <h2>7. Diritti dell'Interessato</h2>
            <p>
              In conformità agli articoli 15-22 del GDPR, l'utente ha diritto
              di:
            </p>
            <p>
              <strong>Accesso:</strong> ottenere conferma dell'esistenza di un
              trattamento dei propri dati e accedere al loro contenuto.
            </p>
            <p>
              <strong>Rettifica:</strong> ottenere la correzione di dati
              inesatti o l'integrazione di dati incompleti.
            </p>
            <p>
              <strong>Cancellazione:</strong> ottenere la cancellazione dei
              propri dati nei casi previsti dal GDPR ("diritto all'oblio").
            </p>
            <p>
              <strong>Limitazione:</strong> ottenere la limitazione del
              trattamento nei casi previsti dalla normativa.
            </p>
            <p>
              <strong>Portabilità:</strong> ricevere i dati in un formato
              strutturato, di uso comune e leggibile da dispositivo automatico.
            </p>
            <p>
              <strong>Opposizione:</strong> opporsi al trattamento dei dati per
              motivi legittimi.
            </p>
            <p>
              <strong>Revoca del consenso:</strong> revocare il consenso al
              trattamento in qualsiasi momento, senza pregiudicare la liceità
              del trattamento basato sul consenso prestato prima della revoca.
            </p>
            <p>
              Per esercitare tali diritti, l'utente può inviare una richiesta
              all'indirizzo email:
              <strong> amministrazione@capitalinvestmentmilano.it</strong>.
            </p>
            <p>
              L'utente ha inoltre il diritto di proporre reclamo all'Autorità
              Garante per la Protezione dei Dati Personali (
              <a
                href="https://www.garanteprivacy.it"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.garanteprivacy.it
              </a>
              ).
            </p>
          </section>

          <section className="privacy-section">
            <h2>8. Cookie</h2>
            <p>
              Il sito utilizza cookie tecnici necessari per il corretto
              funzionamento della piattaforma. Eventuali cookie analitici o di
              profilazione saranno installati solo previo consenso esplicito
              dell'utente, attraverso un apposito banner informativo.
            </p>
            <p>
              Per maggiori informazioni sui cookie utilizzati, è possibile
              consultare la Cookie Policy disponibile nella sezione dedicata del
              sito.
            </p>
          </section>

          <section className="privacy-section">
            <h2>9. Modifiche alla Privacy Policy</h2>
            <p>
              Il Titolare si riserva il diritto di apportare modifiche alla
              presente Privacy Policy in qualsiasi momento, dandone informazione
              agli utenti tramite pubblicazione sul sito. L'utente è invitato a
              consultare periodicamente questa pagina per prendere visione di
              eventuali aggiornamenti.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
