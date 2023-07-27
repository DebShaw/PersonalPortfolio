import React from "react";
import "./Footer.css";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <a href="#home" className="footer_logo">
        Debyansh Shaw
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#intern">Internship</a>
        </li>
        <li>
          <a href="#achievement">Achievement</a>
        </li>
        <li>
          <a href="#workshop">Workshops</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer_social">
        <a
          href="https://www.facebook.com/debyansh.shaw.9/"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a
          href="https://www.instagram.com/debyanshshaw/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/debyansh-shaw-9b53b2175/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
        <a href="tel:+917980501748" target="_blank" rel="noreferrer">
          <AiFillPhone />
        </a>
      </div>
      <div className="footer_copyright">
        <small>&copy; Debyansh Shaw. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default footer;
