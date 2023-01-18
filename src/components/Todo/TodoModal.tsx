import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TODO } from "../../constants/path.constant";
import { useGetTodo, useUpdateTodo } from "../../hooks/queries/useTodos";
import { Todo, TodoInput } from "../../types/todos";
import TodoModalView from "./Views/TodoModalView";

export interface ITodoModalProps {
  todo: Todo | undefined;
  isEditMode: boolean;
  enableEditMode: () => void;
  onCloseModal: () => void;
  onUpdateTodo: (todoInput: TodoInput) => void;
}

const TodoModal = () => {
  const { id: todoId } = useParams();
  const navigate = useNavigate();
  const { data: todo } = useGetTodo(todoId ?? "");
  const { mutate } = useUpdateTodo(todoId ?? "");
  const [isEditMode, setIsEditMode] = useState(true);

  const todoModalProps = {
    todo,
    isEditMode,
    enableEditMode: () => setIsEditMode(false),
    onCloseModal: () => navigate(TODO.DEFAULT),
    onUpdateTodo: (todoInput: TodoInput) => {
      mutate(todoInput);
      todoModalProps.onCloseModal();
    },
  };
  return <TodoModalView {...todoModalProps} />;
};

export default TodoModal;
