import React from "react";
import Logo from "../Assets/Images/logo.png";
import Home from "../Icons/HomeIcon.jsx";
import Bookmarks from "../Icons/BookmarkIcon.jsx";
import Location from "../Icons/LocationIcon.jsx";
import Logout from "../Icons/LogoutIcon.jsx";
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
                <a class="nav-link" aria-current="page" href="#">
                  <Home /> Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <Bookmarks /> Bookmarks
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarScrollingDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Location /> Languages
                </a>
                <ul
                  class="dropdown-menu"
                  aria-labelledby="navbarScrollingDropdown"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                      English
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Arabic
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  <Logout /> Logout
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
                  <Account />
                  Account
                </a>
              </li>
            </ul>
            <AutoCompleteForm />
          </div>
        </div>
      </nav>
    );
}
export default baseNavbar;