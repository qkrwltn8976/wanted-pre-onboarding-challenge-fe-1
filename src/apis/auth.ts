import axios from "../utils/axios";

export const loginApi = (email: string, password: string) =>
  axios.post("/users/login", { email, password }).then((res) => res.data);
