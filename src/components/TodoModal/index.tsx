import { Button, Modal } from "antd";
import React, { useState } from "react";
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
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

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
        submitBtnTxt={"제출"}
        todo={data}
        onSubmit={(todoInput: TodoInput) => {
          mutate(todoInput);
          onCancel();
        }}
        isDisabled={isDisabled}
        extraButton={
          <>
            <Button disabled={false} onClick={() => setIsDisabled(false)}>
              수정
            </Button>
          </>
        }
      />
    </Modal>
  );
};

export default TodoModal;
