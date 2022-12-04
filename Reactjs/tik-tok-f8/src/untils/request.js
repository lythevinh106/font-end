import axios from "axios";
import React from "react";
import PropTypes from "prop-types";

// console.log(process.env.REACT_APP_BASE_URL);

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

// export const getRequest = async (path, options = {}) => {
//   ////ham async lun tra ve 1 promise
//   const response = await request.get(path, options);

//   return response.data;
// };
export default request;
