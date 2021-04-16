import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import AdminImage from "./Components/AdminImage.jsx";
import SignupIcon from "../../Icons/SignupIcon.jsx";
import Title from "./Components/Title.jsx";
import SubTitle from "./Components/SubTitlePage.jsx";
import BaseInput from "../../Base/BaseInput.jsx";
import BaseButton from "../../Base/BaseButton.jsx";
export default class AdminSignupPage extends Component {
  render() {
    return (
      <div className="container">
        <Paper elevation={8}>
          <div className="row">
            <AdminImage icon={<SignupIcon />} />
          </div>
          <div className="row">
            <Title title="Signup Admin" />
          </div>
          <div className="row">
            <SubTitle subTitle="Please fill up the form to signup" />
          </div>
          <div className="row">
            <BaseInput label="First Name: " type="text" />
          </div>
          <div className="row">
            <BaseInput label="Email: " type="email" />
          </div>
          <div className="row">
            <BaseInput label="Password: " type="password" />
          </div>
          <div className="row">
            <BaseInput label="Confirm Password: " type="password" />
          </div>
          <div className="row">
            <BaseButton icon={<SignupIcon />} text="Register" link="/dashboard" />
          </div>
        </Paper>
      </div>
    );
  }
}
