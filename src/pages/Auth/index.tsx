import styled from "@emotion/styled";
import * as React from "react";
import WithAuth from "../../components/commons/hocs/withAuth";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { flexCenter } from "../../styles/flex";

interface IAuthProps {
  setLoginToken?: React.Dispatch<React.SetStateAction<string>> | undefined
}

const Base = styled.div`
 height:100vh;
 ${flexCenter}
`
const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <Base>
      <LoginForm {...props} />
      {/* <RegisterForm /> */}
    </Base>
  );
};

export default WithAuth(Auth);
