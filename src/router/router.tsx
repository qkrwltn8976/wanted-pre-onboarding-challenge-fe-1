import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/todos" element={<Main />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/todos/:id" element={<Main />} />
    </Routes>
  );
};

export default Router;
