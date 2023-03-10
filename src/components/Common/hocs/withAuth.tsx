import { useNavigate } from "react-router-dom";
import React, { ComponentType, useEffect } from "react";
import { useLocalStorage } from "../../../utils/storage";
import { ACCESS_TOKEN_KEY } from "../../../constants/token.constant";
import { AUTH, TODO } from "../../../constants/path.constant";

function WithAuth<P extends object>(Component: ComponentType<P>): React.FC<P> {
  return function WihAuthComponent({ ...props }) {
    const navigate = useNavigate();
    const [loginToken, setLoginToken] = useLocalStorage(ACCESS_TOKEN_KEY, "");

    useEffect(() => {
      if (!loginToken) return navigate(AUTH.LOGIN, { replace: true });
      else return navigate(TODO.DEFAULT);
    }, [loginToken]);

    return (
      <Component
        {...props}
        loginToken={loginToken}
        setLoginToken={setLoginToken}
      />
    );
  };
}

export default WithAuth;
