import React from "react";
import BaseCard2 from "../../../Base/BaseCard.jsx";
import Jackets from "../../../Assets/Images/girlJacket.jpg";
import Shirts from "../../../Assets/Images/girlShirts.jpg";
import Pants from "../../../Assets/Images/girlPants.jpg";
import Accessoires from "../../../Assets/Images/girlAccessoires.jpg";
import Suits from "../../../Assets/Images/girlSuit.jpg";
import Glasses from "../../../Assets/Images/girlGlasses.jpg";
import Sport from "../../../Assets/Images/girlSports.jpg";
import Shoes from "../../../Assets/Images/girlShoes.jpg";
import Underwears from "../../../Assets/Images/girlUnderwear.jpg";
import "../../../Assets/CSS/styles.css";
const gridOfClothesCategories = () => {
  return (
    <div className="girls-clothes-container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
          <BaseCard2
            image={Jackets}
            title="Jackets"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Shirts}
            title="Shirts"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Pants}
            title="Pants"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Accessoires}
            title="Accessoires"
            linkText="Show Details"
            link="/content"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Suits}
            title="Suits"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Glasses}
            title="Glasses"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Sport}
            title="Sport"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
            image={Shoes}
            title="Shoes"
            link="/content"
            linkText="Show Details"
          />
        </div>
        <div className="col">
          <BaseCard2
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
