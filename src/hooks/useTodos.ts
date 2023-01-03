import { TodoInput } from "./../types/todos";
import { createTodo, getTodoById, getTodos } from "./../apis/todo";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../types/todos";

const useGetTodo = (id: string) =>
  useQuery<Todo>(["todo"], () => getTodoById(id));

const useGetTodos = () => useQuery<Todo[]>(["todos"], () => getTodos());

const useAddTodo = (todoInput: TodoInput) => {
  const queryClient = useQueryClient();
  return useMutation<Todo>(["addTodo"], () => createTodo(todoInput), {
    onSuccess: (newTodo: Todo) => {
      console.log("success", newTodo);
      queryClient.setQueryData(["todos"], (todos: Todo[] | undefined) => {
        const prevTodos = todos ?? [];
        return [...prevTodos, newTodo];
      });
    },
  });
};

export { useGetTodo, useGetTodos, useAddTodo };
