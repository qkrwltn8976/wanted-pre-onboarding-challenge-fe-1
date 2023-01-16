import * as React from "react";
import styled from "@emotion/styled";
import WithAuth from "../../components/Common/hocs/withAuth";
import TodoList from "../../components/Todo/TodoList";
import { flexHorizontal } from "../../styles/flex";
import { useAddTodo, useGetTodos } from "../../hooks/queries/useTodos";
import TodoForm from "../../components/Todo/TodoForm";
import { Card } from "antd";

interface IMainProps {}

const Base = styled.div`
  height: 100vh;
  padding: 30px;
  width: 100%;
  ${flexHorizontal}
`;

const Main: React.FunctionComponent<IMainProps> = (props) => {
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
    </Base>
  );
};

export default WithAuth(Main);
