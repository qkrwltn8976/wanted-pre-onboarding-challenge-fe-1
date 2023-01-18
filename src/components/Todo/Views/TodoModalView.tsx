import * as React from "react";
import { Button, Modal } from "antd";
import { ITodoModalProps } from "../TodoModal";
import TodoForm from "../TodoForm";

const TodoModalView = ({
  todo,
  isEditMode,
  enableEditMode,
  onCloseModal,
  onUpdateTodo,
}: ITodoModalProps) => {
  return (
    <Modal
      centered
      title={"할일 보기"}
      open={true}
      onCancel={onCloseModal}
      width={500}
      footer={null}
    >
      <TodoForm
        submitBtnTxt={"제출"}
        todo={todo}
        onSubmit={onUpdateTodo}
        isDisabled={isEditMode}
        extraButton={
          <>
            <Button disabled={false} onClick={enableEditMode}>
              수정
            </Button>
          </>
        }
      />
    </Modal>
  );
};

export default TodoModalView;
