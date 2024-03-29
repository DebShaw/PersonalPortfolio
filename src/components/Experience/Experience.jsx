import React from "react";
import "./Experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Expert</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>Material UI</h4>
                <small className="text-light">Advance</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>Mongo DB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <BsFillPatchCheckFill className="icons" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
