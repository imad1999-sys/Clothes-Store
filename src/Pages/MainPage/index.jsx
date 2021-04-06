import React, { Component } from "react";
import GridOfCards from "../../Pages/MainPage/Components/GridOfCards.jsx";

export default class MainPage extends Component{
    render(){
        return (
          <div className="container">
            <div className="row">
                <GridOfCards />
            </div>
          </div>
        );
    }
}