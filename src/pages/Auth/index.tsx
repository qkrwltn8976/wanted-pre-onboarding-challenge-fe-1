import styled from "@emotion/styled";
import * as React from "react";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { flexCenter } from "../../styles/flex";

interface IAuthProps { }

const Base = styled.div`
 height:100vh;
 ${flexCenter}
`
const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <Base>
      <LoginForm />
      {/* <RegisterForm /> */}
    </Base>
  );
};

export default Auth;
