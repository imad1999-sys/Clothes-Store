import React, { Component } from "react";
import PageTitle from "./Components/PageTitle.jsx";
import GridOfClothesCategories from "./Components/GridOfClothesCategories.jsx";
import GridOfOtherLines from "./Components/GridOfOtherLines.jsx";
export default class MensPage extends Component {
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
