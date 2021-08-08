import React from "react";
import "../1-css/Contact.css";

export default function Contact() {
  const displayForm = () => {
    const formContact = document.querySelector(".form-contact");
    formContact.classList.add("active");
    formContact.classList.remove("hidden");
  };

  return (
    <div className="contact">
      <h1>ysegh.dev@gmail.com</h1>
      <h2>
        <span>SEGHROUCHNI Youssef</span>
        <span className="dash"> - </span>
        <span>46B Rue de la Convention, Nantes</span>
        <span className="dash"> - </span>
        <span>0620706551</span>
      </h2>
      <button onClick={() => displayForm()}>On embauche !</button>
      <div className="footer">
        <p> ©2020 YS Development web.</p>
      </div>
    </div>
  );
}
