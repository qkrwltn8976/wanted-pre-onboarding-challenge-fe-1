import { todoKeys } from "./../../constants/queryKey.constant";
import { TodoInput } from "./../../types/todos";
import {
  createTodo,
  deleteTodo,
  getTodoById,
  getTodos,
  updateTodo,
} from "./../../apis/todo";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo } from "../../types/todos";

const useGetTodo = (id: string) =>
  useQuery<Todo>(todoKeys.detail(id), () => getTodoById(id), {
    enabled: !!id,
  });

const useGetTodos = () => useQuery<Todo[]>(todoKeys.all, () => getTodos());

const useAddTodo = () => {
  const queryClient = useQueryClient();
  return useMutation(
    [todoKeys.create()],
    (todoInput: TodoInput) => createTodo(todoInput),
    {
      onSuccess: (newTodo: Todo) => {
        queryClient.setQueryData(todoKeys.all, (todos: Todo[] | undefined) => {
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
    [todoKeys.update(id)],
    (todoInput: TodoInput) => updateTodo(id, todoInput),
    {
      onSuccess: (updatedTodo: Todo) => {
        queryClient.setQueryData(todoKeys.all, (todos: Todo[] | undefined) => {
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
      queryClient.setQueryData(todoKeys.all, (todos: Todo[] | undefined) => {
        const prevTodos = todos ?? [];
        return prevTodos.filter((todo) => todo.id !== id);
      });
    },
  });
};

export { useGetTodo, useGetTodos, useAddTodo, useUpdateTodo, useDeleteTodo };
