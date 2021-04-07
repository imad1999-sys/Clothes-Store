import React, { Component } from "react";
import GridOfCards from "../../Pages/MainPage/Components/GridOfCards.jsx";
import BaseNavbar from "../../Base/BaseNavbar.jsx";
import BaseFooter from "../../Base/BaseFooter.jsx";
export default class MainPage extends Component{
    render(){
        return (
          <div>
            <div className="row">
              <BaseNavbar />
            </div>
            <div className="main-page-container">
              <div className="row">
                <GridOfCards />
              </div>
            </div>
            <div className="row">
              <BaseFooter />
            </div>
          </div>
        );
    }
}