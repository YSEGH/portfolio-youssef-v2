import "./1-css/App.css";
import Banner from "./2-pages/Banner";
import Portfolio from "./2-pages/Portfolio";
import { HashRouter, HashRouter as Router } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Banner />
        <Portfolio />
      </div>
    </HashRouter>
  );
}

export default App;
