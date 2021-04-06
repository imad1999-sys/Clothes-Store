import React from "react";
import "../../Assets/CSS/styles.css";
import SigninIcon from "../../Icons/SigninIcon.jsx";

const splashScreen = () => {
  return (
    <div className="landing-page">
      <div className="page-content">
        <h1>Welcome to I&M store</h1>
        <p>
          To browse the store{" "}
          <a href="#">
            <SigninIcon />
            Login Here
          </a>
        </p>
      </div>
    </div>
  );
};
export default splashScreen;
