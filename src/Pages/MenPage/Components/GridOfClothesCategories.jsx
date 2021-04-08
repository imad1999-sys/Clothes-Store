import React from "react";
import BaseCard2 from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/jacket.jpg";
import Shirts from "../../../Assets/Images/shirts.jpg";
import Pants from "../../../Assets/Images/pants.jpg";
import Accessoires from "../../../Assets/Images/accessoires.jpg";
import Suits from "../../../Assets/Images/Suit.jpg";
import Glasses from "../../../Assets/Images/Glasses.jpg";
import Sport from "../../../Assets/Images/Sport.jpg";
import Shoes from "../../../Assets/Images/Shoes.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = () => {
  return (
    <div className="clothes-container">
      <div className="row">
        <div className="col-sm">
          <BaseCard2
            image={Jackets}
            title="Jackets"
            link="men/jackets"
            linkText="Show Details"
          />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Shirts} title="Shirts" linkText="Show Details" />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Pants} title="Pants" linkText="Show Details" />
        </div>
        <div className="col-sm">
          <BaseCard2
            image={Accessoires}
            title="Accessoires"
            linkText="Show Details"
          />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Suits} title="Suits" linkText="Show Details" />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Glasses} title="Glasses" linkText="Show Details" />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Sport} title="Sport" linkText="Show Details" />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Shoes} title="Shoes" linkText="Show Details" />
        </div>
        <div className="col-sm">
          <BaseCard2 image={Shoes} title="Underwears" linkText="Show Details" />
        </div>
      </div>
    </div>
  );
};
export default gridOfClothesCategories;
