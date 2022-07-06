import React from "react";
import Herocss from "./Hero.css";
import { NavLink } from "react-router-dom";

let activeStyle = {
  color: "white",
  borderBottom: "2px solid #FD8C73",
};

function Hero(props) {
  return (
    <>
      <div className="main_site">
        <ul className="list-unstyled d-flex list_ul pb-4">
          <li>
            <NavLink
              to="/Overview"
              className=""
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className="bx bx-book-open me-2"></i>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink
              to="Repositories"
              className=" ms-4"
              aria-current="page"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <i className="bx bx-book-bookmark me-2"></i>
              Repositories <span className="count_repo">113</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=" ms-4" aria-current="page">
              <i className="bx bxs-dashboard me-2"></i>
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=" ms-4" aria-current="page">
              <i className="bx bx-package me-2"></i>
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className=" " aria-current="page">
              <i className="bx bx-star me-2"></i>
              Stars
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hero;
