import * as React from "react";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../../constants/path.constant";
import { ACCESS_TOKEN_KEY } from "../../../constants/token.constant";
import { useLogout } from "../../../hooks/queries/useAuth";
import HeaderView from "./Views/HeaderView";

export interface IHeaderProps {
  onLogout: () => void;
}

const Header = () => {
  const navigate = useNavigate();
  const { logout } = useLogout();
  const HeaderProps: IHeaderProps = {
    onLogout: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      logout();
      navigate(AUTH.LOGIN, { replace: true });
    },
  };
  return <HeaderView {...HeaderProps} />;
};

export default Header;
