import * as React from "react";
import { useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../../constants/path.constant";
import { ACCESS_TOKEN_KEY } from "../../../constants/token.constant";
import HeaderView from "./Views/HeaderView";

export interface IHeaderProps {
  onLogout: () => void;
}

const Header = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const HeaderProps: IHeaderProps = {
    onLogout: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      queryClient.setQueryData("login", null);
      navigate(AUTH.LOGIN, { replace: true });
    },
  };
  return <HeaderView {...HeaderProps} />;
};

export default Header;
