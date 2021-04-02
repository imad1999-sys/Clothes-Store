import React from "react";
import BaseButton from "../../../Base/BaseButton.jsx";
import SignupIcon from "../../../Icons/SignupIcon.jsx";
const registerLink = () => {
  return (
    <div className="link-section">
      <p className="link-text">If you don't have an account</p>
      <BaseButton text="Signup now" icon={<SignupIcon />} />
    </div>
  );
};
export default registerLink;
