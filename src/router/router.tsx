import { Route, Routes } from "react-router-dom";
import Auth from "../pages/Auth";
import Main from "../pages/Main";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default Router;
