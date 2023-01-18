import React from "react";
import styled from "@emotion/styled";
import TodoList from "../../components/Todo/TodoList";
import { flexHorizontal } from "../../styles/flex";
import { useAddTodo, useGetTodos } from "../../hooks/queries/useTodos";
import TodoForm from "../../components/Todo/TodoForm";
import { Card } from "antd";
import { IChildrenProps } from "../../types/childrenProps";

const Base = styled.div`
  height: 100vh;
  padding: 30px;
  width: 100%;
  ${flexHorizontal}
`;

const TodoLayout = ({ children }: IChildrenProps) => {
  const { data: todos } = useGetTodos();
  const { mutate } = useAddTodo();

  return (
    <Base>
      <Card title={"할일 추가"} style={{ width: 500 }}>
        <TodoForm
          submitBtnTxt={"추가"}
          onSubmit={(todoInput) => mutate(todoInput)}
        />
      </Card>

      <TodoList todos={todos} />
      {children}
    </Base>
  );
};

export default TodoLayout;
