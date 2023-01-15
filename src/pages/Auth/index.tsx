import styled from "@emotion/styled";
import React, { useState } from "react";
import WithAuth from "../../components/commons/hocs/withAuth";
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import { flexCenter } from "../../styles/flex";

interface IAuthProps {
  setLoginToken?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const Base = styled.div`
  height: 100vh;
  ${flexCenter}
`;
const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  const [showLogin, setShowLogin] = useState(true);
  return (
    <Base>
      {showLogin ? <LoginForm {...props} /> : <RegisterForm {...props} />}
      {showLogin && (
        <a href="#" onClick={() => setShowLogin(false)}>
          회원가입
        </a>
      )}
    </Base>
  );
};

export default WithAuth(Auth);
