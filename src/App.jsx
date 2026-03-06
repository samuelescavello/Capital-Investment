import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/nav/hero/Hero";
import ComeFunziona from "./components/nav/comeFunziona/ComeFunzionaa";
import Progetti from "./components/nav/progetti/Progetti";
import BrochureDownload from "./components/nav/Brouchure/BrochureDownload";
import ChiSiamo from "./components/nav/chiSiamo/ChiSiamo";
import Contatti from "./components/nav/contatti/Contatti";
import Footer from "./components/nav/Footer/Footer";
import PrivacyPolicy from "./components/nav/Privacy/PrivacyPolicy";
import LandingConsulenza from "./components/nav/landing/LandingConsulenza";
import LandingRendimento from "./components/nav/landing/LandingRendimento";
import LandingInvestimento from "./components/nav/landing/LandingInvestimento";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === "/privacy-policy") {
        setCurrentPage("privacy");
      } else if (path === "/casasumisura") {
        setCurrentPage("consulenza");
      } else if (path === "/rendimento") {
        setCurrentPage("rendimento");
      } else if (path === "/investimento") {
        setCurrentPage("investimento");
      } else {
        setCurrentPage("home");
      }
    };

    handleRoute();
    window.addEventListener("popstate", handleRoute);
    return () => window.removeEventListener("popstate", handleRoute);
  }, []);

  if (currentPage === "privacy") {
    return (
      <>
        <PrivacyPolicy />
        <Footer />
      </>
    );
  }

  if (currentPage === "consulenza") return <LandingConsulenza />;
  if (currentPage === "rendimento") return <LandingRendimento />;
  if (currentPage === "investimento") return <LandingInvestimento />;

  return (
    <>
      <Navbar />
      <Hero />
      <ComeFunziona />
      <Progetti />
      <BrochureDownload />
      <ChiSiamo />
      <Contatti />
      <Footer />
    </>
  );
}

export default App;
