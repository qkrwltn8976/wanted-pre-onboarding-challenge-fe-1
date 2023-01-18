import { UserInput } from "./../types/users";
import axios from "../utils/axios";

export const login = (userInput: UserInput) =>
  axios.post("/users/login", userInput).then((res) => res.data);

export const signUp = (userInput: UserInput) =>
  axios.post("/users/create", userInput).then((res) => res.data);
