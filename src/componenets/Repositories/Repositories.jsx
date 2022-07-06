import React, { useState, useEffect } from "react";
import Api from "../../API/URL";
import Repositoriescss from "../Repositories/Repositories.css";
function Repositories(props) {
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    Api.getRepos().then((item) => setRepos(item.data));
  }, []);

  return (
    <div className="">
      <div className="wrapper_info_code">
        <div className="wrapper_filter d-flex">
          <input
            className="form-control search_repo"
            type="text"
            placeholder="Find a repositories..."
          />
          <select className="form-control" name="" id="">
            <option value="">Type</option>
            <option value="">Html</option>
            <option value="">Html</option>
          </select>
          <select className="form-control" name="" id="">
            <option value="">Html</option>
            <option value="">Html</option>
            <option value="">Html</option>
          </select>
          <select className="form-control me-3" name="" id="">
            <option value="">Html</option>
            <option value="">Html</option>
            <option value="">Html</option>
          </select>
          <a className="new_link " href="#">
            <i class="bx bx-book-bookmark me-2"></i>
            New
          </a>
        </div>
        <ul className="wrapper_item ">
          {repos?.map((e) => (
            <li className="wrapper_repos_item d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <h3 className="me-2">
                  <a className="repo_name" href="#">
                    {e.name}
                  </a>
                </h3>
                <div>
                  <span className="public">Public</span>
                </div>
              </div>
              <div>
                <button className="btn btn-secondary repo_btn">
                  <i className="bx bxs-star"></i> Star
                </button>
                <button className="btn btn-secondary repo_btn">
                  <i className="bx bxs-down-arrow"></i>
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Repositories;
