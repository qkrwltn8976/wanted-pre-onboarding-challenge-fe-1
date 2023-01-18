import React from "react";
import { useNavigate } from "react-router-dom";
import { TODO } from "../../constants/path.constant";
import { useDeleteTodo } from "../../hooks/queries/useTodos";
import { Todo } from "../../types/todos";
import TodoListView from "./Views/TodoListView";

export interface ITodoListProps {
  todos: Todo[] | undefined;
  deleteTodo: (id: string) => void;
  showTodoDetail: (id: string) => void;
}

const TodoList = ({ todos }: any) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteTodo();

  const todoListProps: ITodoListProps = {
    todos,
    deleteTodo: (id) => mutate(id),
    showTodoDetail: (id) => navigate(TODO.DETAIL(id)),
  };

  return <TodoListView {...todoListProps} />;
};

export default TodoList;
