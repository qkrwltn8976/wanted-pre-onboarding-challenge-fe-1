import { getTodos } from "./../apis/todo";
import { useQuery } from "react-query";
import { Todo } from "../types/todos";

const useGetTodos = () =>
  useQuery<Todo[]>(["todos"], () => getTodos(), {
    enabled: true,
  });

export { useGetTodos };
