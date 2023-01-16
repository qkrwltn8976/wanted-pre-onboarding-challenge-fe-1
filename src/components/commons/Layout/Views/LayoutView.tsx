import * as React from "react";
import styled from "@emotion/styled";
import { flexCenter, flexHorizontal } from "../../../../styles/flex";
import Header from "../Header";
import { ILayoutProps } from "../Layout";

const Container = styled.div`
  ${flexHorizontal}
  justify-content: flex-start;
  width: 100%;
  min-height: 100vh;
`;

const Content = styled.div<{
  isAuthPage: boolean;
}>`
  ${flexCenter}
  width: 100%;
  padding: 0px 15px;
  ${({ isAuthPage }) => !isAuthPage && `margin-top: 80px`}
`;

const LayoutView = ({ children, isAuthPage }: ILayoutProps) => {
  return (
    <Container>
      {!isAuthPage && <Header />}
      <Content isAuthPage={isAuthPage}>{children}</Content>
    </Container>
  );
};

export default LayoutView;
