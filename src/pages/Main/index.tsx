import * as React from "react";
import styled from "@emotion/styled";
import WithAuth from "../../components/commons/hocs/withAuth";
import TodoList from "../../components/TodoList";
import { flexHorizontal } from "../../styles/flex";
import { useGetTodos } from "../../hooks/useTodos";
import TodoForm from "../../components/TodoForm";

interface IMainProps {}

const Base = styled.div`
  height: 100vh;
  padding: 30px;
  ${flexHorizontal}
`;

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const { data: todos } = useGetTodos();

  return (
    <Base>
      <TodoForm />
      <TodoList todos={todos} />
    </Base>
  );
};

export default WithAuth(Main);
