import { Route, Routes, Navigate } from "react-router-dom";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Main />}>
        <Route path=":id" element={<Main />} />
      </Route>
      <Route path="/auth" element={<Auth />} />

      <Route path="*" element={<Navigate to="todos" replace />} />
    </Routes>
  );
};

export default Router;
