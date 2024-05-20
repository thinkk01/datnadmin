import React from "react";
import axios from "axios";
const Instance = axios.create({
  baseURL: "http://localhost:8030",
  headers: {
    "Content-Type": "application/json",
  },
});
// Thêm interceptor cho request
const accessToken = localStorage.getItem("token");
Instance.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default Instance;
