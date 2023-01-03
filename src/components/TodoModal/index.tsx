import { Modal } from "antd";
import * as React from "react";
import { useGetTodo, useUpdateTodo } from "../../hooks/useTodos";
import { TodoInput } from "../../types/todos";
import TodoForm from "../TodoForm";

interface ITodoModalProps {
  open: boolean;
  onCancel: () => void;
  todoId: string;
}

const TodoModal: React.FunctionComponent<ITodoModalProps> = ({
  open,
  onCancel,
  todoId,
}) => {
  const { data } = useGetTodo(todoId);
  const { mutate } = useUpdateTodo(todoId);
  return (
    <Modal
      centered
      title={"할일 보기"}
      open={open}
      onCancel={onCancel}
      width={500}
      footer={null}
    >
      <TodoForm
        submitBtnTxt={"수정"}
        todo={data}
        onSubmit={(todoInput: TodoInput) => {
          mutate(todoInput);
          onCancel();
        }}
      />
    </Modal>
  );
};

export default TodoModal;
