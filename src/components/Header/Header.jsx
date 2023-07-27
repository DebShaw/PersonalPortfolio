import React from "react";
import CTA from "./CTA";
import Social from "./Social";
import "./Header.css";
import ME from "../../assets/me.png";
const Header = () => {
  return (
    <section id="home">
      <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Debyansh Shaw</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA />
        <Social />
        <div className="profile">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll-down">
          Scroll Down
        </a>
      </div>
    </section>
  );
};

export default Header;
