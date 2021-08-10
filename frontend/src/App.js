import "./1-css/App.css";
import Banner from "./2-pages/Banner";
import Portfolio from "./2-pages/Portfolio";
import { HashRouter as Router } from "react-router-dom";
import Contact from "./2-pages/Contact";
import About from "./2-pages/About";
import Networks from "./3-components/Networks";
import FormContact from "./3-components/FormContact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Banner />
        <About />
        <Portfolio />
        <Contact />
        <Networks />
        <FormContact />
        <ToastContainer position="bottom-left" autoClose={2500} pauseOnHover />
      </div>
    </Router>
  );
}

export default App;
