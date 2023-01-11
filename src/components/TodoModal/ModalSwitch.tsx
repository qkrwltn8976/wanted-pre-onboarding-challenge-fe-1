import * as React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import TodoModal from ".";
import Main from "../../pages/Main";

interface IModalSwitchProps {}

const ModalSwitch: React.FunctionComponent<IModalSwitchProps> = (props) => {
  const location = useLocation();
  const background = location.state && location.state.background;
  console.log(background);
  return <Route path="/todo" element={<Main />} />;
};

export default ModalSwitch;
