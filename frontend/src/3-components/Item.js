import React from "react";
import "../1-css/Item.css";

export default function Item({ item }) {
  return (
    <a href={item.url} target="_blank" className="item">
      <img src={item.img} />
      <div className="text-container">
        <h1>{item.title}</h1>
        <p>{item.description}</p>
      </div>
    </a>
  );
}
