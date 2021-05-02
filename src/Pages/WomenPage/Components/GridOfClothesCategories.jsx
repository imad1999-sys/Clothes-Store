import React from "react";
import BaseCard from "../../../Base/BaseCard.jsx";
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
          <BaseCard
            image={Jackets}
            title="Jackets"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Shirts}
            title="Shirts"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Pants}
            title="Pants"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Accessoires}
            title="Accessoires"
            linkText="Show Details"
            link="/content"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Suits}
            title="Suits"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Glasses}
            title="Glasses"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Sport}
            title="Sport"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Shoes}
            title="Shoes"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard
            image={Underwears}
            title="Underwears"
            linkText="Show Details"
            link="/content"
          />
        </div>
      </div>
    </div>
  );
};
export default gridOfClothesCategories;
