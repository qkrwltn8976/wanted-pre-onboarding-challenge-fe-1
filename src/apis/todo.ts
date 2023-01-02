import axios from "../utils/axios";

export const getTodos = () => axios.get("/todos").then((res) => res.data.data);

export const getTodoById = (id: string) =>
  axios.get(`/todos/${id}`).then((res) => res.data);

export const createTodo = (title: string, content: string) =>
  axios
    .post("/todos", {
      title,
      content,
    })
    .then((res) => res.data);

export const updateTodo = (id: string, title: string, content: string) =>
  axios
    .put(`/todos/${id}`, {
      title,
      content,
    })
    .then((res) => res.data);

export const deleteTodo = (id: string) =>
  axios.delete(`/todos/${id}`).then((res) => res.data);
