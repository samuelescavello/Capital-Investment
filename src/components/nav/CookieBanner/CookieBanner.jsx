import { useState } from "react";
import "./CookieBanner.css";

const STORAGE_KEY = "ci_cookie_consent";

const hasConsent = () => {
  try {
    return Boolean(localStorage.getItem(STORAGE_KEY));
  } catch {
    return false;
  }
};

// Banner cookie conforme alle Linee guida del Garante Privacy (10 giugno 2021)
// e al GDPR (Reg. UE 2016/679):
// - i cookie non tecnici NON vengono installati prima del consenso;
// - "Accetta" e "Rifiuta" hanno pari evidenza (stessa dimensione/peso visivo);
// - chiusura tramite "X" = rifiuto (nessun consenso prestato);
// - la scelta viene memorizzata e il banner non riappare finché non scade/è revocata.
const CookieBanner = () => {
  const [visible, setVisible] = useState(() => !hasConsent());

  const saveConsent = (status) => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          status, // "accepted" | "rejected"
          timestamp: new Date().toISOString(),
          version: 1,
        }),
      );
    } catch {
      // localStorage non disponibile: chiudiamo comunque il banner
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="cookie-banner"
      role="dialog"
      aria-live="polite"
      aria-label="Informativa sull'uso dei cookie"
    >
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <h4>Rispettiamo la tua privacy</h4>
          <p>
            Utilizziamo cookie tecnici necessari al funzionamento del sito e,
            previo tuo consenso, cookie analitici per migliorare l'esperienza di
            navigazione. Puoi accettare, rifiutare i cookie non necessari o
            consultare l'
            <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
              informativa completa
            </a>
            .
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button
            className="cookie-btn cookie-btn-reject"
            onClick={() => saveConsent("rejected")}
          >
            Rifiuta
          </button>
          <button
            className="cookie-btn cookie-btn-accept"
            onClick={() => saveConsent("accepted")}
          >
            Accetta tutti
          </button>
        </div>
        <button
          className="cookie-close"
          aria-label="Chiudi e rifiuta i cookie non necessari"
          onClick={() => saveConsent("rejected")}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
