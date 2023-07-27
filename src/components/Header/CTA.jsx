import React from "react";
import resume from "../../assets/Debyansh_Shaw_Resume.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a
        href={resume}
        download
        className="btn"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk!
      </a>
    </div>
  );
};

export default CTA;
