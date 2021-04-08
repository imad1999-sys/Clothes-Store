import React from "react";
import PageTitle from "./PageTitle.jsx";

const gridOfOtherLines = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <PageTitle title="Men's Category" />
        </div>
        <div className="row">
          <div className="col-6">
            <PageTitle title="Clothing" />
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Shirts
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                T-Shirts
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Polo Shirts
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Over Shirts
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                SweatShirts
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Sweaters
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Jackets
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Jeans
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Underwears And Pyjamas
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Coats
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Sport Wears
              </a>
            </div>
          </div>
          <div className="col-6">
            <PageTitle title="Accessoires" />
            <div class="list-group">
              <a
                href="#"
                class="list-group-item list-group-item-action active"
                aria-current="true"
              >
                Shoes
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Bags
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Wallets
              </a>
              <a href="#" class="list-group-item list-group-item-action">
                Sunglasses
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Bracelets
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Belts
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Ties and tow-ties
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Hats and caps
              </a>
              <a
                href="#"
                class="list-group-item list-group-item-action"
                tabindex="-1"
                aria-disabled="true"
              >
                Scarves
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default gridOfOtherLines;
