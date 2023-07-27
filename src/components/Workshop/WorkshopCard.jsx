import React from "react";

const WorkshopCard = (props) => {
  return (
    <div className="workshop-card">
      <div className="workshop-title">
        <p>{props.name}</p>
      </div>
      <div className="workshop-img">
        <img src={props.avatar} alt="avatar" />
      </div>
      <div className="workshop-desc">
        <p>{props.review}</p>
      </div>
    </div>
  );
};

export default WorkshopCard;
