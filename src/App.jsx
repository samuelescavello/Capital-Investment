import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/nav/hero/Hero";
import ComeFunziona from "./components/nav/comeFunziona/ComeFunzionaa";
import Progetti from "./components/nav/progetti/Progetti";

import ChiSiamo from "./components/nav/chiSiamo/ChiSiamo";
import Contatti from "./components/nav/contatti/Contatti";
import Footer from "./components/nav/footer/Footer";
import PrivacyPolicy from "./components/nav/privacy/PrivacyPolicy";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    const handleRoute = () => {
      const path = window.location.pathname;
      if (path === "/privacy-policy") {
        setCurrentPage("privacy");
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

  return (
    <>
      <Navbar />
      <Hero />
      <ComeFunziona />
      <Progetti />

      <ChiSiamo />
      <Contatti />
      <Footer />
    </>
  );
}

export default App;
