import React from "react";
import "../1-css/Portfolio.css";
import Item from "../3-components/Item";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>
        Quelques <br />
        <span>projets.</span>
      </h1>
      <div className="item-container">
        <Item />
        <Item />
        <Item />
      </div>
      <button>Voir plus</button>
    </div>
  );
}
