import React from "react";
import BaseCard2 from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/boysJacket.jpg";
import Shirts from "../../../Assets/Images/boysShirts.jpg";
import Pants from "../../../Assets/Images/boysPants.jpg";
import Accessoires from "../../../Assets/Images/boysAccessoires.jpg";
import Suits from "../../../Assets/Images/boysSuits.jpg";
import Glasses from "../../../Assets/Images/boysGlasses.jpg";
import Sport from "../../../Assets/Images/boysSport.jpg";
import Shoes from "../../../Assets/Images/boysShoes.jpg";
import Underwears from "../../../Assets/Images/boysUnderwear.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = () => {
  return (
    <div className="boys-clothes-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <BaseCard2
            image={Jackets}
            title="Jackets"
            link="men/jackets"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2 image={Shirts} title="Shirts" linkText="Show Details" />
        </div>
        <div className="col">
          <BaseCard2 image={Pants} title="Pants" linkText="Show Details" />
        </div>
        <div className="col">
          <BaseCard2
            image={Accessoires}
            title="Accessoires"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2 image={Suits} title="Suits" linkText="Show Details" />
        </div>
        <div className="col">
          <BaseCard2 image={Glasses} title="Glasses" linkText="Show Details" />
        </div>
        <div className="col">
          <BaseCard2 image={Sport} title="Sport" linkText="Show Details" />
        </div>
        <div className="col">
          <BaseCard2 image={Shoes} title="Shoes" linkText="Show Details" />
        </div>
        <div className="col">
          <BaseCard2
            image={Underwears}
            title="Underwears"
            linkText="Show Details"
          />
        </div>
      </div>
    </div>
  );
};
export default gridOfClothesCategories;
