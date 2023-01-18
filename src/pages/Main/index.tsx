import * as React from "react";
import WithAuth from "../../components/Common/hocs/withAuth";
import TodoLayout from "../../components/Todo/TodoLayout";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <TodoLayout>
      <Outlet />
    </TodoLayout>
  );
};

export default WithAuth(Main);
