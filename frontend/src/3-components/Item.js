import React from "react";
import { Link } from "react-router-dom";
import "../1-css/Item.css";

export default function Item({
  item = {
    title: "Ghislain ramage",
    description:
      "Partisan du, je me concentre sur les besoins utilisateurs pour concevoir des produits digitaux.",
    img: "/images/p1.jpg",
  },
}) {
  return (
    <Link className="item">
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <img src={item.img} />
    </Link>
  );
}
