import React, { Component } from "react";
import PageTitle from "./Components/PageTitle.jsx";
import GridOfClothesCategories from "./Components/GridOfClothesCategories.jsx";
export default class MenPage extends Component {
  render() {
    return (
      <div>
        <div className="men-page-container">
          <div className="row">
            <PageTitle title="Men Fashion" />
          </div>
          <div className="row">
            <GridOfClothesCategories />
          </div>
        </div>
      </div>
    );
  }
}
