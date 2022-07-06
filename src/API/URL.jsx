import React from "react";
import axios from "axios";

const URL = "https://api.github.com";

const Api = {
  getUser: () => {
    return axios.get(`${URL}/users`);
  },
  getRepos: () => {
    return axios.get(`${URL}/users/Abdurrahmon2700/repos`);
  },
  getFollowers: () => {
    return axios.get(`${URL}/users/Abdurrahmon2700/followers`);
  },
  getSearch: (username) => {
    return axios.get(`${URL}/search/users?q=${username}`);
  },
};
export default Api;
