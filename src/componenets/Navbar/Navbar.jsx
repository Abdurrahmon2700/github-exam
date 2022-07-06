import React from "react";
import Navbarcsss from "./Navbar.css";
import UserImg from "../../assets/img/userimg.jpg";

function Navbar() {
  return (
    <>
      <div className="container-fluid p-0">
        <div className="w-100 wrapper_navbar">
          <ul className="p-0 m-0 d-flex align-items-center list-unstyled">
            <li>
              <a href="#">
                <i className="bx bxl-github"></i>
              </a>
            </li>
            <li>
              <input
                className="search_input rounded-2"
                type="search"
                placeholder="Search or jump to..."
              />
              <button className="button_input">/</button>
            </li>
            <li>
              <a href="#">Pull requests</a>
            </li>
            <li>
              <a href="#">Issues</a>
            </li>
            <li>
              <a href="#">Marketplace</a>
            </li>
            <li>
              <a href="#">Explore</a>
            </li>
          </ul>
          <ul className="p-0 m-0 d-flex align-items-center list-unstyled">
            <li>
              <a href="#">
                <i className="bx bx-bell size_icon"></i>
              </a>
            </li>
            <li>
              <div>
                <a href="#">
                  <i className="bx bx-plus size_icon"></i>
                </a>
                <a href="#">
                  <i className="bx bxs-down-arrow"></i>
                </a>
              </div>
            </li>
            <li>
              <div>
                <a href="">
                  <img className="user_img" src={UserImg} alt="" />
                </a>
                <a href="">
                  <i className="bx bxs-down-arrow"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
