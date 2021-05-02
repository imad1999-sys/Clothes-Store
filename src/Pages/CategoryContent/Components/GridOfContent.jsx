import React from "react";
import "../../../Assets/CSS/styles.css";
import BaseCard from "../../../Base/BaseCard.jsx";
import Shoes from "../../../Assets/Images/Shoes.jpg";
const gridOfContent = () => {
    return (
      <div className="grid-of-content-section">
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <BaseCard
              image={Shoes}
              title="Jackets"
              text="Cotton Jacket"
              price="150$"
              link="men/jackets"
              linkText="Show Details"
            />
          </div>
          <div className="col">
            <BaseCard
              image={Shoes}
              title="Shoes"
              text="Lesiure Shoes"
              price="200$"
              link="men/jackets"
              linkText="Show Details"
            />
          </div>
        </div>
      </div>
    );
}
export default gridOfContent;