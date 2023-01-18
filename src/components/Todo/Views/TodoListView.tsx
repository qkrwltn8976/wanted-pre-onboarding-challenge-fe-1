import * as React from "react";
import styled from "@emotion/styled";
import { Button, List } from "antd";
import { ITodoListProps } from "../TodoList";

const Base = styled.div`
  width: 500px;
`;

const TodoListView = ({
  todos,
  deleteTodo,
  showTodoDetail,
}: ITodoListProps) => {
  return (
    <Base>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => showTodoDetail(item.id)}>보기</Button>,
              <Button onClick={() => deleteTodo(item.id)}>삭제</Button>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.content} />
          </List.Item>
        )}
      />
    </Base>
  );
};

export default TodoListView;
