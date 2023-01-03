import { UserInput } from "./../types/users";
import axios from "../utils/axios";

export const login = (email: string, password: string) =>
  axios.post("/users/login", { email, password }).then((res) => res.data);

export const signUp = (userInput: UserInput) =>
  axios.post("/users/create", userInput).then((res) => res.data);
