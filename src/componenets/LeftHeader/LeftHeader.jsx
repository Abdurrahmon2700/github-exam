import React from "react";
import UserImg from "../../assets/img/userimg.jpg";
import LeftHeadercss from "./LeftHeader.css";
import PullImg from "../../assets/img/pull-shark-default.png";

function LeftHeader(props) {
  return (
    <div className="col-3">
      <div className="wrapper_user_info">
        <div className="px-4">
          <img
            className="user_img_header img-fluid rounded-circle"
            src={UserImg}
            alt=""
          />
        </div>
        <div className="wrapper_user_name">
          <h2 className="m-0 text-light mt-4">Abdurahmon</h2>
          <p className="username fs-4 mb-3">Abdurrahmon2700</p>
          <p className="fs-5 m-0 p-0 mb-2 text-light Web">
            Web developer 24 y.o contact me
          </p>
          <p className="fs-5 m-0 p-0 mb-2 text-light ">@alamxonov</p>
          <button className="edit_profile btn btn-dark border w-100 my-3">
            Edit profile
          </button>
          <div>
            <a className="me-4 " href="#">
              <i className="bx bx-user fs-6"></i>2 followers
            </a>
            <a className="mb-5" href="#">
              1 following
            </a>
            <p className="mb-0 mt-2 text-light">
              <i className="bx bx-building-house"></i>Najot ta'lim
            </p>
            <p className="mb-0 text-light">
              <i className="bx bx-map"></i>Tashkent city, Chilonzor streat
            </p>
          </div>
          <div className="mt-4">
            <a href="#" className="d-block mb-2 fs-5">
              Achievements
            </a>
            <img
              className="pull_img mb-3 img-fluid w-25"
              src={PullImg}
              alt=""
            />
            <div>
              <button className="beta_btn px-2 me-2">Beta</button>
              <a className="feedack_link" href="#">
                Send feedback
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftHeader;
