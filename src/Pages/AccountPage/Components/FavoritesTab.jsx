import React from "react";
import BaseCard from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/jacket.jpg";
import "../../../Assets/CSS/styles.css";


const favoritesTab = () => {
    return (
      <div className="favorites-tab-container">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <BaseCard
              image={Jackets}
              title="Jackets"
              linkText="Show Details"
            />
          </div>
        </div>
      </div>
    );
}
export default favoritesTab;