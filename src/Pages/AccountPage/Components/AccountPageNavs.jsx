import React from "react";
import AccountInformationTab from "./AccountInformationTab.jsx";
import FavoritesTab from "./FavoritesTab.jsx";
import MyItemsTab from "./MyItemsTab.jsx";
import "../../../Assets/CSS/styles.css"

const accountPageNavs = (props) => {
    return (
      <div className="account-page-navs-container">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button
              class="nav-link active"
              id="nav-home-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-home"
              type="button"
              role="tab"
              aria-controls="nav-home"
              aria-selected="true"
            >
              {props.firstIcon} {props.firstTab}
            </button>
            <button
              class="nav-link"
              id="nav-profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-profile"
              type="button"
              role="tab"
              aria-controls="nav-profile"
              aria-selected="false"
            >
              {props.secondIcon} {props.secondTab}
            </button>
            <button
              class="nav-link"
              id="nav-contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#nav-contact"
              type="button"
              role="tab"
              aria-controls="nav-contact"
              aria-selected="false"
            >
              {props.thirdIcon} {props.thirdTab}
            </button>
          </div>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <AccountInformationTab link="/login"/>
          </div>
          <div
            class="tab-pane fade"
            id="nav-profile"
            role="tabpanel"
            aria-labelledby="nav-profile-tab"
          >
            <FavoritesTab />
          </div>
          <div
            class="tab-pane fade"
            id="nav-contact"
            role="tabpanel"
            aria-labelledby="nav-contact-tab"
          >
            <MyItemsTab />
          </div>
        </div>
      </div>
    );
}
export default accountPageNavs;