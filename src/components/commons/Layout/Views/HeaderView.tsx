import styled from "@emotion/styled";
import { flexCenter } from "../../../../styles/flex";
import { IHeaderProps } from "../Header";
import { Button } from "antd";

const Container = styled.div`
  ${flexCenter}
  position: fixed;
  top: 0px;
  z-index: 1000;
  width: 100%;
  height: 80px;
  box-shadow: 0 2px 5px rgba(130, 130, 130, 0.1);
`;

const Wrapper = styled.div`
  ${flexCenter}
  justify-content: space-between;
  padding: 20px 35px;
  width: 100%;
`;

const Title = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const HeaderView = ({ onLogout }: IHeaderProps) => {
  return (
    <Container>
      <Wrapper>
        <Title>TODO</Title>
        <Button onClick={onLogout}>로그아웃</Button>
      </Wrapper>
    </Container>
  );
};

export default HeaderView;
