import "./1-css/App.css";
import Banner from "./2-pages/Banner";
import Portfolio from "./2-pages/Portfolio";
import { HashRouter, HashRouter as Router } from "react-router-dom";
import Contact from "./2-pages/Contact";
import About from "./2-pages/About";
import Networks from "./3-components/Networks";
import FormContact from "./3-components/FormContact";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Banner />
        <Portfolio />
        <About />
        <Contact />
        <Networks />
        <FormContact />
      </div>
    </HashRouter>
  );
}

export default App;
