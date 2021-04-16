import React from "react";
import Logo from "../Assets/Images/logo.png";
import Home from "../Icons/HomeIcon.jsx";
import ChartIcon from "../Icons/ChartIcon.jsx";
import {Link} from "react-router-dom";
import Account from "../Icons/AccountIcon.jsx";
import AutoCompleteForm from "../Base/BaseAutocompleteForm.jsx";
const baseNavbar = () => {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img src={Logo} alt="I&M" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
              <li class="nav-item">
                <Link to="/home" class="nav-link" aria-current="page">
                  <Home /> Home
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/login-admin" class="nav-link" aria-current="page">
                  <ChartIcon /> Dashboard
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/account"
                  type="button"
                  class="nav-link"
                  tabindex="-1"
                  aria-disabled="true"
                >
                  <Account />
                  Account
                </Link>
              </li>
            </ul>
            <AutoCompleteForm />
          </div>
        </div>
      </nav>
    );
}
export default baseNavbar;