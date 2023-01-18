import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import TodoModal from "../components/Todo/TodoModal";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Main />}>
        <Route path=":id" element={<TodoModal />} />
      </Route>
      <Route path="/auth" element={<Auth />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="*" element={<Navigate to="todos" replace />} />
    </Routes>
  );
};

export default Router;
