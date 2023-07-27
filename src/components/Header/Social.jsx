import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
const Social = () => {
  return (
    <div className="social">
      <a
        href="https://www.linkedin.com/in/debyansh-shaw-9b53b2175/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://www.instagram.com/debyanshshaw/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a href="https://github.com/DebShaw" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
  );
};

export default Social;
