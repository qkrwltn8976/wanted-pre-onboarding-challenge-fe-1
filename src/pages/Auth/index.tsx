import * as React from "react";
import LoginForm from "../../components/LoginForm";

interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <>
      <LoginForm />
    </>
  );
};

export default Auth;
