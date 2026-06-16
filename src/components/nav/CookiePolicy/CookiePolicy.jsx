import { useEffect } from "react";
import "../Privacy/PrivacyPolicy.css";

const CookiePolicy = () => {
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
          <h1>Cookie Policy</h1>
          <p className="privacy-update">Ultimo aggiornamento: Giugno 2026</p>
        </div>
      </div>

      <div className="privacy-container">
        <div className="privacy-content">
          <section className="privacy-section">
            <h2>1. Titolare del Trattamento</h2>
            <p>
              Il Titolare del trattamento è{" "}
              <strong>Capital Investment Milano</strong>, con sede legale in{" "}
              <strong>Via Venezuela 4, 20151 Milano (MI)</strong>, C.F. e n.
              iscr. Registro Imprese <strong>13976270960</strong>, email:{" "}
              <strong>info@capinvestment.it</strong>.
            </p>
          </section>

          <section className="privacy-section">
            <h2>2. Cosa sono i Cookie</h2>
            <p>
              I cookie sono piccoli file di testo che i siti visitati inviano al
              dispositivo dell'utente, dove vengono memorizzati per essere poi
              ritrasmessi agli stessi siti alla visita successiva. Il presente
              documento è redatto in conformità al Regolamento UE 2016/679
              (GDPR) e alle Linee guida del Garante per la protezione dei dati
              personali in materia di cookie (provvedimento del 10 giugno 2021).
            </p>
          </section>

          <section className="privacy-section">
            <h2>3. Tipologie di Cookie Utilizzati</h2>
            <p>
              <strong>a) Cookie tecnici (necessari):</strong> indispensabili per
              il corretto funzionamento del sito e per l'erogazione dei servizi
              richiesti dall'utente. Comprendono i cookie che memorizzano le
              preferenze relative al consenso sull'uso dei cookie. Per questi
              cookie non è richiesto il consenso dell'utente, in quanto la loro
              installazione è basata sul legittimo interesse del Titolare (art.
              6, par. 1, lett. f, GDPR).
            </p>
            <p>
              <strong>b) Cookie analitici:</strong> utilizzati per raccogliere
              informazioni, in forma aggregata, sul numero degli utenti e su come
              questi visitano il sito, al fine di migliorarne i contenuti e
              l'esperienza di navigazione. Questi cookie vengono installati{" "}
              <strong>solo previo consenso</strong> dell'utente, prestato
              tramite l'apposito banner (art. 6, par. 1, lett. a, GDPR).
            </p>
            <p>
              <strong>c) Cookie di profilazione e di terze parti:</strong>{" "}
              allo stato attuale il sito <strong>non utilizza</strong> cookie di
              profilazione finalizzati all'invio di messaggi pubblicitari in
              linea con le preferenze dell'utente. Qualora in futuro venissero
              introdotti, la presente policy sarà aggiornata e ne sarà richiesto
              il consenso preventivo.
            </p>
          </section>

          <section className="privacy-section">
            <h2>4. Gestione del Consenso</h2>
            <p>
              Al primo accesso al sito viene mostrato un banner che consente
              all'utente di accettare tutti i cookie, rifiutare i cookie non
              necessari oppure consultare l'informativa estesa. I cookie non
              tecnici non vengono installati prima dell'acquisizione del consenso.
            </p>
            <p>
              L'utente può modificare o revocare in qualsiasi momento il consenso
              prestato cancellando i cookie dal proprio browser (vedi punto
              successivo): al successivo accesso il banner verrà nuovamente
              mostrato, consentendo una nuova scelta.
            </p>
          </section>

          <section className="privacy-section">
            <h2>5. Come Disabilitare i Cookie dal Browser</h2>
            <p>
              L'utente può gestire o disabilitare i cookie tramite le
              impostazioni del proprio browser. Di seguito i link alle guide dei
              browser più diffusi:
            </p>
            <p>
              <a
                href="https://support.google.com/chrome/answer/95647"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Chrome
              </a>{" "}
              ·{" "}
              <a
                href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mozilla Firefox
              </a>{" "}
              ·{" "}
              <a
                href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                target="_blank"
                rel="noopener noreferrer"
              >
                Safari
              </a>{" "}
              ·{" "}
              <a
                href="https://support.microsoft.com/it-it/microsoft-edge/eliminare-i-cookie-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
                target="_blank"
                rel="noopener noreferrer"
              >
                Microsoft Edge
              </a>
            </p>
            <p>
              La disabilitazione dei cookie tecnici potrebbe compromettere il
              corretto funzionamento di alcune parti del sito.
            </p>
          </section>

          <section className="privacy-section">
            <h2>6. Diritti dell'Interessato e Riferimenti</h2>
            <p>
              Per l'esercizio dei diritti previsti dagli articoli 15-22 del GDPR
              e per ogni informazione sul trattamento dei dati personali si
              rimanda alla{" "}
              <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>{" "}
              del sito. È inoltre possibile proporre reclamo all'Autorità
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
            <h2>7. Modifiche alla Cookie Policy</h2>
            <p>
              Il Titolare si riserva il diritto di modificare la presente Cookie
              Policy in qualsiasi momento, dandone informazione agli utenti
              tramite pubblicazione sul sito. Si invita a consultare
              periodicamente questa pagina.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
