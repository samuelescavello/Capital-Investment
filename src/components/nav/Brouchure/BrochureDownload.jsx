import "./BrochureDownload.css";

const BrochureDownload = () => {
  const handleDownload = () => {
    // Qui metteró il link al PDF della brochure
    const brochureUrl = "/documents/brochure-capital-investment.pdf";
    window.open(brochureUrl, "_blank");
  };

  return (
    <section className="brochure-section">
      <div className="brochure-container">
        <div className="brochure-content">
          <div className="brochure-icon">📄</div>
          <div className="brochure-text">
            <h3>Scarica la Brochure delle Nostre Operazioni Immobiliari</h3>
            <p>
              Scopri nel dettaglio le nostre operazioni immobiliari, i
              rendimenti attesi e la strategia di valorizzazione
            </p>
          </div>
          <button onClick={handleDownload} className="brochure-btn">
            Scarica Brochure
            <span className="download-icon">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrochureDownload;
