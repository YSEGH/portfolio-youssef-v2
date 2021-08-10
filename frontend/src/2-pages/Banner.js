import React from "react";
import "../1-css/Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="text-container">
        <h1>
          Seghrouchni<span>Youssef</span>
        </h1>
        <h1>Bonjour.</h1>
        <h1>
          Développeur web <br />
          <span>basé à Nantes.</span>
        </h1>
        <p>Amateur de nouvelle technologie doté d’une curiosité insatiable.</p>
      </div>
      <div className="image-container">
        <img
          src="/static-files/images/tete-bannier.jpg"
          alt="seghrouchni youssef"
        />
      </div>
    </div>
  );
}
