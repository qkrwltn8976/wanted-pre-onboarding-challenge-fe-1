import styled from "@emotion/styled";
import { Button, List } from "antd";
import * as React from "react";
import { Todo } from "../../types/todos";

interface ITodoListProps {
  todos: Todo[] | undefined;
}

const Base = styled.div`
  width: 500px;
`;

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todos }) => {
  console.log(todos);
  return (
    <Base>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item) => (
          <List.Item actions={[<Button>수정</Button>, <Button>삭제</Button>]}>
            <List.Item.Meta title={item.title} description={item.content} />
          </List.Item>
        )}
      />
    </Base>
  );
};

export default TodoList;
