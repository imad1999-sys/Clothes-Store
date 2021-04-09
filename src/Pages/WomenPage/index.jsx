import React, { Component } from "react";
import PageTitle from "./Components/PageTitle.jsx";
import GridOfClothesCategories from "./Components/GridOfClothesCategories.jsx";
export default class WomenPage extends Component {
  render() {
    return (
      <div>
        <div className="women-page-container">
          <div className="row">
            <PageTitle title="Women Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories />
          </div>
        </div>
      </div>
    );
  }
}
