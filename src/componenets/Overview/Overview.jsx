import React, { useEffect, useState } from "react";
import Api from "../../API/URL";
import Overwievcss from "../Overview/Overview.css";
function Overwiev(props) {
  const [overview, setOverview] = useState([]);
  useEffect(() => {
    Api.getRepos().then((item) => setOverview(item.data));
  }, []);

  return (
    <>
      <div className="wrapper_info_code">
        <div className="d-flex justify-content-between mb-2 ">
          <p className="ms-3">Popular repositories</p>
          <button className="custom_bnt">Customize your pins</button>
        </div>
        <ul className="wrapper_item">
          {overview?.map((e) => (
            <li className="item mb-3">
              <div className="p-3">
                <div className="d-flex justify-content-between mb-3">
                  <a href="#">{e.name}</a>
                  <p className="public">Public</p>
                </div>
                <span className="circle me-1"></span>
                <span>HTML</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Overwiev;
