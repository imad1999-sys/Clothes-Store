import React from "react";
import "../Assets/CSS/styles.css"




const baseButton = (props) => {
    return (
      <div className="button-section">
        <div class="d-grid gap-2 col-6 mx-auto">
          <a href="#" class="btn btn-outline-primary btn-link" type="button">
            {props.icon} {props.text}
          </a>
        </div>
      </div>
    );
}
export default baseButton;