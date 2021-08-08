import React, { useEffect, useState } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "../1-css/Networks.css";

export default function Networks() {
  const [color, setColor] = useState("#202020");
  const test = () => {
    const contact = document.querySelector(".contact");
    if (contact.getBoundingClientRect().top > 1) {
      setColor("#202020");
    } else {
      setColor("#fff");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", test);
    return () => {
      window.removeEventListener("scroll", test);
    };
  }, []);

  return (
    <div className="networks-container" style={{ color: color }}>
      <AiFillLinkedin size={30} />
      <AiOutlineGithub size={30} />
    </div>
  );
}
