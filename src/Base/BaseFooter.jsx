import React from "react";
import EmailIcon from "../Icons/EmailIcon.jsx";
import FaxIcon from "../Icons/FaxIcon.jsx";
import LocationIcon from "../Icons/LocationIcon.jsx";
import PhoneIcon from "../Icons/PhoneIcon.jsx";
import FacebookIcon from "../Icons/FacebookIcon.jsx";
import TwitterIcon from "../Icons/TwitterIcon.jsx";
import GooglePlusIcon from "../Icons/GooglePlusIcon.jsx";
import YoutubeIcon from "../Icons/YoutubeIcon.jsx";
import LinkedInIcon from "../Icons/LinkedInIcon.jsx";
import "../Assets/CSS/styles.css";
const baseFooter = () => {
  return (
    <div className="bg-light text-dark pt-5 pb-4 ">
      <div className="footer-container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold">
              About Us
            </h5>
            <hr className="mb-4" />
            <p className="about-us-text">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries for previewing layouts and visual
              mockups.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold">
              Let Us Help
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link">
                Your Account
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                Your Orders
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                Make Your Content And Devices
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                Help
              </a>
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold">
              Make Money
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link">
                Sell products on our website
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                Advertise your products
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                Become an affiliate
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                Self-Publish
              </a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-capitalize mb-4 font-weight-bold">
              Contact
            </h5>
            <hr className="mb-4" />
            <p>
              <a href="#" className="text-dark link">
                <LocationIcon /> Seattle - US
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                <EmailIcon /> imad.alzayat.1999@gmail.com
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                <PhoneIcon /> +1 770-277-7150
              </a>
            </p>
            <p>
              <a href="#" className="text-dark link">
                <FaxIcon /> +1 770-277-7150
              </a>
            </p>
          </div>

          <hr className="mb-4" />

          <div className="row d-flex justify-content-center">
            <div>
              <p className="copyright">
                  Copyright 2021 All Rights Reserved By:
                <a href="#" className="copyright-link">
                  I & M
                </a>
              </p>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="text-center">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    <FacebookIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    <TwitterIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    <GooglePlusIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    <YoutubeIcon />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-dark">
                    <LinkedInIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default baseFooter;
