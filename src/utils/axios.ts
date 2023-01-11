import Axios, { AxiosRequestConfig } from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8081",
});

axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("my-app_loginToken");

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
