import { useNavigate } from "react-router-dom";
import React, { ComponentType, useEffect } from "react";
import { useLocalStorage } from "../../../utils/storage";

function WithAuth<P extends object>(Component: ComponentType<P>): React.FC<P> {
  return function WihAuthComponent({ dataObj, ...props }: any) {
    const navigate = useNavigate();
    const [loginToken, setLoginToken] = useLocalStorage("loginToken", "");

    useEffect(() => {
      if (!loginToken) return navigate("/auth");
      else return navigate("/");
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
