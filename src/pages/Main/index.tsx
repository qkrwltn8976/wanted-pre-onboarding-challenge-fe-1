import * as React from "react";
import styled from "@emotion/styled";
import WithAuth from "../../components/commons/hocs/withAuth";
import TodoList from "../../components/TodoList";
import { flexColumn } from "../../styles/flex";
import { useGetTodos } from "../../hooks/useTodos";

interface IMainProps {}

const Base = styled.div`
  height: 100vh;
  ${flexColumn}
`;

const Main: React.FunctionComponent<IMainProps> = (props) => {
  const { data: todos } = useGetTodos();
  // console.log(data);
  return (
    <Base>
      <TodoList todos={todos} />
    </Base>
  );
};

export default WithAuth(Main);
