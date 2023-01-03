import { TodoInput } from "./../types/todos";
import axios from "../utils/axios";

export const getTodos = () => axios.get("/todos").then((res) => res.data.data);

export const getTodoById = (id: string) =>
  axios.get(`/todos/${id}`).then((res) => res.data.data);

export const createTodo = (todoInput: TodoInput) =>
  axios.post("/todos", todoInput).then((res) => res.data.data);

export const updateTodo = (id: string, todoInput: TodoInput) =>
  axios.put(`/todos/${id}`, todoInput).then((res) => res.data.data);

export const deleteTodo = (id: string) =>
  axios.delete(`/todos/${id}`).then(() => id);
