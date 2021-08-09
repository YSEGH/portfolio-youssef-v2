import React from "react";
import "../1-css/Portfolio.css";
import Item from "../3-components/Item";
import data from "../data";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>
        Quelques <br />
        <span>projets.</span>
      </h1>
      <div className="item-container">
        {data.map((item, i) => (
          <Item item={item} key={i} />
        ))}
      </div>
      {/*       <button>Voir plus</button>
       */}
    </div>
  );
}
