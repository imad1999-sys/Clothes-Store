import React, { Component } from "react";
import PageTitle from "./Components/PageTitle.jsx";
import GridOfClothesCategories from "./Components/GridOfClothesCategories.jsx";
export default class MensPage extends Component {
  render() {
    return (
      <div>
        <div className="girls-page-container">
          <div className="row">
            <PageTitle title="Girls Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories />
          </div>
        </div>
      </div>
    );
  }
}
