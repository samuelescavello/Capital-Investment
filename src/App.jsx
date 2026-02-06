import "./App.css";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/nav/hero/Hero";
import ComeFunziona from "./components/nav/comeFunziona/ComeFunzionaa";
import Progetti from "./components/nav/progetti/Progetti";
import ChiSiamo from "./components/nav/chiSiamo/ChiSiamo";
import Contatti from "./components/nav/contatti/Contatti";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ComeFunziona />
      <Progetti />
      <ChiSiamo />
      <Contatti />
    </>
  );
}

export default App;
