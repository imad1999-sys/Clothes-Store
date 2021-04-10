import React, { Component } from "react";
import PageTitle from "./Components/PageTitle.jsx";
import GridOfClothesCategories from "./Components/GridOfClothesCategories.jsx";
import BaseNavbar from "../../Base/BaseNavbar.jsx";
import BaseFooter from "../../Base/BaseFooter.jsx";
export default class MenPage extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="men-page-container">
          <div className="row">
            <PageTitle title="Men Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories />
          </div>
        </div>
        <div className="row">
          <BaseFooter />
        </div>
      </div>
    );
  }
}
