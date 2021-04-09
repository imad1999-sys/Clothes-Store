import React, { Component } from "react";
import PageTitle from "./Components/PageTitle.jsx";
import GridOfClothesCategories from "./Components/GridOfClothesCategories.jsx";
export default class BoysPage extends Component {
  render() {
    return (
      <div>
        <div className="boys-page-container">
          <div className="row">
            <PageTitle title="Boys Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories />
          </div>
        </div>
      </div>
    );
  }
}
