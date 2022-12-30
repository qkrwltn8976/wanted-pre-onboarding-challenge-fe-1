import * as React from "react";
import Login from "../../components/Login";

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <>
      <Login />
    </>
  );
};

export default Auth;
