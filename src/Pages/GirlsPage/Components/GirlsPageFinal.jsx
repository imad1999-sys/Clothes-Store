import React, { Component } from "react";
import PageTitle from "./PageTitle.jsx";
import GridOfClothesCategories from "./GridOfClothesCategories.jsx";
import BaseNavbar from "../../../Base/BaseNavbar.jsx";
import BaseFooter from "../../../Base/BaseFooter.jsx";
export default class GirlsPageFinal extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <BaseNavbar />
        </div>
        <div className="girls-page-container">
          <div className="row">
            <PageTitle title="Girls Fashion" />
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
