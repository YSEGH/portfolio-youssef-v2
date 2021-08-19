import React from "react";
import "../1-css/Item.css";

export default function Item({ item }) {
  return (
    <a href={item.url} target="_blank" rel="noreferrer" className="item">
      <img src={item.img} alt={item.title} />
      <div className="text-container">
        <h1>
          {item.title} {item.statut && <span>({item.statut})</span>}
        </h1>
        <p>{item.description}</p>
      </div>
    </a>
  );
}
