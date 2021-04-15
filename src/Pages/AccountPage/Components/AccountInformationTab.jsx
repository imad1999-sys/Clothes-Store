import React from "react";
import {Link} from "react-router-dom";
import LogoutIcon from "../../../Icons/LogoutIcon.jsx";
import "../../../Assets/CSS/styles.css";

const accountInformationTab = (props) =>{
    return (
      <div className="account-information-tab-container">
        <ul className="list-group">
          <li className="list-group-item d-flex justify-content-between align-items-center">
            First name:
            <span className="badge bg-primary rounded-pill">14</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Last name:
            <span className="badge bg-primary rounded-pill">2</span>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            Username:
            <span className="badge bg-primary rounded-pill">1</span>
          </li>
        </ul>
        <div className="logout-section">
          <div className="d-grid gap-2 col-6 mx-auto">
            <Link to={props.link} className="btn btn-primary button-logout" type="button">
              <LogoutIcon /> Logout
            </Link>
          </div>
        </div>
      </div>
    );
}
export default accountInformationTab;