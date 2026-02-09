import "./App.css";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/nav/hero/Hero";
import ComeFunziona from "./components/nav/comeFunziona/ComeFunzionaa";
import Progetti from "./components/nav/progetti/Progetti";
import BrochureDownload from "./components/nav/Brouchure/BrochureDownload";
import ChiSiamo from "./components/nav/chiSiamo/ChiSiamo";
import Contatti from "./components/nav/contatti/Contatti";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ComeFunziona />
      <Progetti />
      <BrochureDownload />
      <ChiSiamo />
      <Contatti />
    </>
  );
}

export default App;
