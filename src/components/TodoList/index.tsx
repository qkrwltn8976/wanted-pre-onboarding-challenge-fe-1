import styled from "@emotion/styled";
import { Button, List, Modal } from "antd";
import React, { useState } from "react";
import { Todo } from "../../types/todos";

interface ITodoListProps {
  todos: Todo[] | undefined;
}

const Base = styled.div`
  width: 500px;
`;

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todos }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Base>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => setOpen(true)}>보기</Button>,
              <Button>삭제</Button>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.content} />
          </List.Item>
        )}
      />
      <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={500}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </Base>
  );
};

export default TodoList;
