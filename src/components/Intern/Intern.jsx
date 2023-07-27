import React from "react";
import "./Intern.css";
import certificate from "../../assets/i-certify.png";
const Intern = () => {
  return (
    <section id="intern">
      <h5>I'm having an</h5>
      <h2>Internship</h2>
      <div className="intern-container">
        <div className="i-certificate">
          <img src={certificate} alt="certificate" className="i-img" />
        </div>
        <div className="i-content">
          <ul>
            <li>Physi-Fit is a Digital Physiotherapy Providing Web-Site</li>
            <li>URL: https://www.physifit.org/</li>
            <li>I work at Physi-Fit as a Front-End Web Developer</li>
            <li>I play a valuable role at Physi-Fit</li>
            <li>I renamed all the files according to REST nomenclature</li>
            <li>I refactored the Home-Page, About-us Page, FAQs Page</li>
            <li>I created a Blog of Groin Pain</li>
            <li>I worked on the Doctor's Dashboard</li>
            <li>I created a coupon management UI</li>
            <li>I created an appointment management UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Intern;
