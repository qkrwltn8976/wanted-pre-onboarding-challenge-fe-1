import styled from "@emotion/styled";
import React from "react";
import { flexCenter } from "../../styles/flex";
import { IAuthProps } from "../../types/authProps";
import { Outlet } from "react-router-dom";

const Base = styled.div`
  height: 100vh;
  flex-direction: column;
  ${flexCenter}
`;
const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <Base>
      <Outlet context={props} />
    </Base>
  );
};

export default Auth;
