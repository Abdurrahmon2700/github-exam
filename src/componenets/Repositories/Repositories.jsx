import React, { useState, useEffect } from "react";
import Api from "../../API/URL";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Repositoriescss from "../Repositories/Repositories.css";
function Repositories(props) {
  const [repos, setRepos] = useState([]);
  const [prev, setPrev] = useState(10);
  const [current, setCurrent] = useState(2);
  useEffect(() => {
    Api.getRepos().then((item) => setRepos(item.data));
  }, []);

  const pagenation = prev * current;
  const numberDat = pagenation - prev;

  const currentData = repos.slice(numberDat, pagenation);

  return (
    <div className="col-9">
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
            <i className="bx bx-book-bookmark me-2"></i>
            New
          </a>
        </div>
        <ul className="wrapper_item ">
          {currentData?.map((e) => (
            <li
              className="wrapper_repos_item d-flex justify-content-between"
              key={Math.random()}
            >
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
        <div className="w-100 d-flex justify-content-end my-5">
          <Stack
            spacing={2}
            sx={{ border: 1, p: 1, bgcolor: "background.paper" }}
          >
            <Pagination
              count={repos.length / 10}
              color="primary"
              defaultValue={1}
              onChange={(e) => setCurrent(e.target.textContent)}
            />
          </Stack>
        </div>
      </div>
    </div>
  );
}
export default Repositories;
