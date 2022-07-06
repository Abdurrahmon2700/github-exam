import React from "react";
import Footercss from "../Footer/Footer.css";
function Footer(props) {
  return (
    <>
      <div className="container-fluid d-flex">
        <div className="d-flex w-25">
          <i class="bx bxl-github"></i>
          <p>© 2022 GitHub, Inc.</p>
        </div>
        <ul className="d-flex justify-content-between list-unstyled">
          <li className="me-4">
            <a className="footer_link" href="#">
              Terms
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Privacy
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Security
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Status
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Docs
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Contact GitHub
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Pricing
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              API
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Training
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              Blog
            </a>
          </li>
          <li className="me-4">
            <a className="footer_link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
