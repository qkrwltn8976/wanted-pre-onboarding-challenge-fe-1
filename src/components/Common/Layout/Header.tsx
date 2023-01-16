import * as React from "react";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../../constants/token.constant";
import HeaderView from "./Views/HeaderView";

export interface IHeaderProps {
  onLogout: () => void;
}

const Header = () => {
  const navigate = useNavigate();
  const HeaderProps: IHeaderProps = {
    onLogout: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      navigate("/auth");
    },
  };
  return <HeaderView {...HeaderProps} />;
};

export default Header;
