import React from "react";
import "../1-css/FormContact.css";
import { MdClose } from "react-icons/md";

export default function FormContact() {
  const hideForm = (e) => {
    e.stopPropagation();
    const formContact = document.querySelector(".form-contact");
    if (
      e.target.classList.contains("form-contact") ||
      e.target.classList.contains("close-icon")
    ) {
      formContact.classList.remove("active");
      formContact.classList.add("hidden");
    }
  };

  return (
    <div className="form-contact" onClick={(e) => hideForm(e)}>
      <form className="form">
        <MdClose
          className="close-icon"
          size={25}
          onClick={(e) => hideForm(e)}
        />
        <h1>On embauche !</h1>
        <div className="form-group">
          <label>Nom</label>
          <input type="text" placeholder="Nom" />
        </div>
        <div className="form-group">
          <label>Prénom</label>
          <input type="text" placeholder="Prénom" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="form-group">
          <label>Téléphone</label>
          <input type="text" placeholder="Téléphone" />
        </div>
        <div className="form-group">
          <label>Message (optionel)</label>
          <textarea type="text" placeholder="Message" />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}
