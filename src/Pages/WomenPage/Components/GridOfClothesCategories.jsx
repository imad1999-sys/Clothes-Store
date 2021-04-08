import React from "react";
import BaseCard2 from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/womenJackets.jpg";
import Shirts from "../../../Assets/Images/womenShirts.jpg";
import Pants from "../../../Assets/Images/womenPants.jpg";
import Accessoires from "../../../Assets/Images/womenAccessoires.jpg";
import Suits from "../../../Assets/Images/womenSuits.jpg";
import Glasses from "../../../Assets/Images/womenGlasses.jpg";
import Sport from "../../../Assets/Images/womenSport.jpg";
import Shoes from "../../../Assets/Images/womenShoes.jpg";
import Underwears from "../../../Assets/Images/womenUnderwear.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = () => {
  return (
    <div className="women-clothes-container">
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
