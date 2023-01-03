import { TodoInput } from "./../types/todos";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "./../apis/todo";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../types/todos";

const useGetTodo = (id: string) =>
  useQuery<Todo>(["todo"], () => getTodoById(id));

const useGetTodos = () => useQuery<Todo[]>(["todos"], () => getTodos());

const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    ["addTodo"],
    (todoInput: TodoInput) => createTodo(todoInput),
    {
      onSuccess: (newTodo: Todo) => {
        queryClient.setQueryData(["todos"], (todos: Todo[] | undefined) => {
          const prevTodos = todos ?? [];
          return [...prevTodos, newTodo];
        });
      },
    }
  );
};

const useUpdateTodo = (id: string) => {
  const queryClient = useQueryClient();
  return useMutation(
    ["updateTodo", id],
    (todoInput: TodoInput) => updateTodo(id, todoInput),
    {
      onSuccess: (updatedTodo: Todo) => {
        queryClient.setQueryData(["todos"], (todos: Todo[] | undefined) => {
          const prevTodos = todos ?? [];
          return prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo));
        });
      },
    }
  );
};

const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(["deleteTodo"], (id: string) => deleteTodo(id), {
    onSuccess: (id: string) => {
      queryClient.setQueryData(["todos"], (todos: Todo[] | undefined) => {
        const prevTodos = todos ?? [];
        return prevTodos.filter((todo) => todo.id !== id);
      });
    },
  });
};

export { useGetTodo, useGetTodos, useAddTodo, useUpdateTodo, useDeleteTodo };
