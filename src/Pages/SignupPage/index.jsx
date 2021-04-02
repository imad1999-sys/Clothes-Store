import React, { Component } from "react";
import AvatarImage from "../SignupPage/Components/AvatarImage.jsx";
import SignupIcon from "../../Icons/SignupIcon.jsx";
import Paper from "@material-ui/core/Paper";
import PageTitle from "./Components/PageTitle.jsx";
import SubTitle from "../SignupPage/Components/SubTitle.jsx";
import BaseInput from "../../Base/BaseInput.jsx";
import BaseButton from "../../Base/BaseButton.jsx";
export default class SignupPage extends Component {
  render() {
    return (
      <div className="container">
        <Paper elevation={8}>
          <div className="row">
            <AvatarImage icon={<SignupIcon />} />
          </div>
          <div className="row">
            <PageTitle title="Sign up" />
          </div>
          <div className="row">
            <SubTitle subTitle="Please fill up the form to signup" />
          </div>
          <div className="row">
            <BaseInput label="First Name: " type="text"/>
          </div>
          <div className="row">
            <BaseInput label="Email: " type="email"/>
          </div>
          <div className="row">
            <BaseInput label="Password: " type="password" />
          </div>
          <div className="row">
            <BaseInput label="Confirm Password: " type="password" />
          </div>
          <div className="row">
            <BaseButton icon={<SignupIcon />} text="Register"/>
          </div>
        </Paper>
      </div>
    );
  }
}
