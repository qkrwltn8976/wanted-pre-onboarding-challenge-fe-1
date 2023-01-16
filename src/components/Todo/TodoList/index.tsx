import styled from "@emotion/styled";
import { Button, List } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDeleteTodo } from "../../../hooks/queries/useTodos";
import { Todo } from "../../../types/todos";
import TodoModal from "../TodoModal";

interface ITodoListProps {
  todos: Todo[] | undefined;
}

const Base = styled.div`
  width: 500px;
`;

const TodoList: React.FunctionComponent<ITodoListProps> = ({ todos }) => {
  const navigate = useNavigate();
  const { mutate } = useDeleteTodo();
  const [selectedId, setSelectedId] = useState<string | null>();
  const { id: todoId } = useParams();

  useEffect(() => {
    setSelectedId(todoId);
  }, [todoId]);

  return (
    <Base>
      <List
        itemLayout="horizontal"
        dataSource={todos}
        renderItem={(item) => (
          <List.Item
            actions={[
              <Button
                onClick={() => {
                  navigate(`/todos/${item.id}`);
                }}
              >
                보기
              </Button>,
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
          onCancel={() => navigate("/todos")}
          todoId={selectedId}
        />
      )}
    </Base>
  );
};

export default TodoList;
