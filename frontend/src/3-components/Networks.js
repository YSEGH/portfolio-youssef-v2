import React, { useEffect, useState } from "react";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import "../1-css/Networks.css";

export default function Networks() {
  const [color, setColor] = useState("#202020");
  const test = () => {
    const about = document.querySelector(".about");
    const contact = document.querySelector(".contact");

    if (
      about.getBoundingClientRect().top < 30 &&
      about.getBoundingClientRect().top >
        -about.getBoundingClientRect().height + 30
    ) {
      setColor("#fff");
    } else if (contact.getBoundingClientRect().top < 30) {
      setColor("#fff");
    } else {
      setColor("#3f3f3f");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", test);
    return () => {
      window.removeEventListener("scroll", test);
    };
  }, []);

  return (
    <div className="networks-container">
      <a
        href={`https://www.linkedin.com/in/youssef-seghrouchni`}
        target="_blank"
        rel="noreferrer"
        style={{ color: color }}
      >
        <AiFillLinkedin size={30} />
      </a>
      <a
        href={`https://github.com/YSEGH`}
        target="_blank"
        rel="noreferrer"
        style={{ color: color }}
      >
        <AiOutlineGithub size={30} />
      </a>
    </div>
  );
}
