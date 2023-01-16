import styled from "@emotion/styled";
import React from "react";
import WithAuth from "../../components/Common/hocs/withAuth";
import { flexCenter } from "../../styles/flex";
import Login from "../../components/Auth/Login";
import { IAuthProps } from "../../types/authProps";

import { useLocation } from "react-router-dom";
import Register from "../../components/Auth/Register";

const Base = styled.div`
  height: 100vh;
  flex-direction: column;
  ${flexCenter}
`;
const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  const { pathname } = useLocation();
  const isLoginPage = pathname.includes("/login");
  return (
    <Base>{isLoginPage ? <Login {...props} /> : <Register {...props} />}</Base>
  );
};

export default WithAuth(Auth);
