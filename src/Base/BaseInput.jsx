import React from "react";
import "../Assets/CSS/styles.css";
const BaseInput = (props) => {
  return (
    <div className="input-section">
      <input class="form-input" list="datalistOptions" id="exampleDataList" type={props.type} />
      <label className="form-label">{props.label}</label>
    </div>
  );
};
export default BaseInput;
