import React from "react";
import MINE from "../../assets/me-about.jpg";
import { HiAcademicCap } from "react-icons/hi";
import { BsArrowBarDown } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";
import { MdOutlineSportsGolf } from "react-icons/md";
import "./About.css";
const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-me">
          <div className="me-img">
            <img src={MINE} alt="me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">
            <div className="about-card">
              <HiAcademicCap className="about-icon" />
              <h5>Academics</h5>
              <div className="dropdown">
                <small className="main-icon">
                  <BsArrowBarDown />
                </small>
                <div className="dropdown-content">
                  <ul>
                    <li>Class X - 87.3%</li>
                    <li>Class XII - 85.3%</li>
                    <li>B. Tech. - 8.69 CGPA</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-card">
              <FaLanguage className="about-icon" />
              <h5>Languages Known</h5>
              <div className="dropdown">
                <small className="main-icon">
                  <BsArrowBarDown />
                </small>
                <div className="dropdown-content">
                  <ul>
                    <li>English</li>
                    <li>Hindi</li>
                    <li>Bengali</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="about-card">
              <MdOutlineSportsGolf className="about-icon" />
              <h5>Hobbies</h5>
              <div className="dropdown">
                <small className="main-icon">
                  <BsArrowBarDown />
                </small>
                <div className="dropdown-content">
                  <ul>
                    <li>Singing</li>
                    <li>Cricket</li>
                    <li>Table Tennis</li>
                    <li>Travel</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <p>
            I am currently pursuing B. Tech in Electronics and Communication
            Engineering from Heritage Institute of Technology, Kolkata. I wish
            to carry on my career as a Software or Full-Stack Developer. I have
            interests in the fields of Competitive Programming, Data Structures
            & Algorithms and many other fields of programming. I am eager to
            hone my skills and make myself better in my fields of improvement
            and to apply my skills to solve real world problems.
          </p>
          <a href="#contact" className="btn btn-primary one_more">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
