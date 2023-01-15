import Axios, { AxiosRequestConfig } from "axios";
import { ACCESS_TOKEN_KEY } from "../constants/token.constant";

const axios = Axios.create({
  baseURL: "http://localhost:8081",
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY);

    if (!token) return config;

    config.headers = {
      authorization: token,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (err) {
    return Promise.reject(err);
  }
);

export default axios;
