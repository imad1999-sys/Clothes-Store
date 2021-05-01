import React, { Component , useState , useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import "../../Assets/CSS/styles.css";
import AdminImage from "./Components/AdminImage.jsx";
import AdminIcon from "../../Icons/AdminIcon.jsx";
import SigninIcon from "../../Icons/SigninIcon.jsx";
import Title from "./Components/Title.jsx";
import BaseInput from "../../Base/BaseInput.jsx";
import BaseButton from "../../Base/BaseButton.jsx";
import SignupLink from "./Components/SignupLink.jsx";
const AdminLoginPage = () => {
    return (
      <div className="container">
        <Paper elevation={10}>
          <div className="row">
            <AdminImage alt="Login Admin" icon={<AdminIcon />} />
          </div>
          <div className="row">
            <Title title="Login Admin Page" />
          </div>
          <div className="row">
            <BaseInput label="Username: " type="text" />
          </div>
          <div className="row">
            <BaseInput label="Password: " type="password" />
          </div>
          <div className="row">
            <BaseButton
              icon={<SigninIcon />}
              text="Sign in"
              link="/dashboard"
            />
          </div>
          <div className="row">
            <SignupLink link="/signup-admin" />
          </div>
        </Paper>
      </div>
    );
}
export default AdminLoginPage;
