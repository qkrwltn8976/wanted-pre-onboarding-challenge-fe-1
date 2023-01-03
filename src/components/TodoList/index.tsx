import styled from "@emotion/styled";
import { Button, List, Modal } from "antd";
import React, { useState } from "react";
import { useDeleteTodo, useGetTodo } from "../../hooks/useTodos";
import { Todo } from "../../types/todos";
import TodoForm from "../TodoForm";
import TodoModal from "../TodoModal";

interface ITodoListProps {
  todos: Todo[] | undefined;
}

const Base = styled.div`
  width: 500px;
`;

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todos }) => {
  const { mutate } = useDeleteTodo();
  const [selectedId, setSelectedId] = useState<string | null>();

  return (
    <Base>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button onClick={() => setSelectedId(item.id)}>보기</Button>,
              <Button onClick={() => mutate(item.id)}>삭제</Button>,
            ]}
          >
            <List.Item.Meta title={item.title} description={item.content} />
          </List.Item>
        )}
      />
      {selectedId && (
        <TodoModal
          open={!!selectedId}
          onCancel={() => setSelectedId(null)}
          todoId={selectedId}
        />
      )}
    </Base>
  );
};

export default TodoList;
