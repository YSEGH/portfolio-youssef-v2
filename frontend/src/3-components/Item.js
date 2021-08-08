import React from "react";
import { Link } from "react-router-dom";
import "../1-css/Item.css";

export default function Item({
  item = {
    url: "www.ghislainramage.com",
    title: "Ghislain ramage",
    description:
      "Partisan du, je me concentre sur les besoins utilisateurs pour concevoir des produits digitaux.",
    img: "/images/gr.png",
  },
}) {
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
