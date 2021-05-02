import React from "react";
import { Component } from "react";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
import GridOfContent from "./GridOfContent.jsx";
export default class CategoryContentFinal extends Component {
  render() {
    return (
      <>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="row">
          <GridOfContent />
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </>
    );
  }
}
