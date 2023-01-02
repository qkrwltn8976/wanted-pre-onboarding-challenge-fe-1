import Axios from "axios";

const axios = Axios.create({
  baseURL: "http://localhost:8081",
  headers: {
    "Cache-Control": "no-cache",
    Authorization: localStorage.getItem("my-app_loginToken") || "",
  },
  //withCredentials: true,
  // 사이트 간 액세스 제어 요청 여부를 나타낸다. true면 클라이언트와 서버의 쿠키 값을 공유하겠다는 의미.
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (err) {
    return Promise.reject(err);
  }
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
