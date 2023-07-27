import React from "react";

const AchievementCard = (props) => {
  return (
    <div className="achieve-card">
      <div className="achieve-title">
        <p>{props.title}</p>
      </div>
      <div className="achieve-img">
        <img src={props.image} alt="certificates" />
      </div>
      <div className="achieve-content">
        {props.description.map((desc, i) => (
          <p key={i}>{desc}</p>
        ))}
      </div>
    </div>
  );
};

export default AchievementCard;
