import React from "react";
import "../Assets/CSS/styles.css";
import man from "../Assets/Images/man.jpg";
import TshirtIcon from "../Icons/TshirtIcon.jsx";
const baseCard = (props) => {
  return (
    <div className="card">
      <div className="card-image">
        <img className="image" src={props.image} alt="man" />
      </div>
      <div className="content-box">
        <h2 className="card-title">{props.title}</h2>
        <a href="#" type="button" class="btn btn-outline-danger btn-lg">
          <TshirtIcon /> {props.linkText}
        </a>
      </div>
    </div>
  );
};
export default baseCard;
