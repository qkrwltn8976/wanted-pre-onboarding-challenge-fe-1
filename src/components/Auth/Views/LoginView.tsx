import * as React from "react";
import { Button, Form, Input } from "antd";
import { ILoginProps } from "../Login";
import styled from "@emotion/styled";

const ButtonWrapper = styled(Form.Item)`
  button + button {
    margin-left: 10px;
  }
`;

const LoginView = ({
  email,
  password,
  loginEnabled,
  onChangeEmail,
  onChangePassword,
  onSubmit,
  toRegisterPage,
}: ILoginProps) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      <Form.Item label="Email" name="email">
        <Input value={email} onChange={onChangeEmail} />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password value={password} onChange={onChangePassword} />
      </Form.Item>

      <ButtonWrapper wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" disabled={!loginEnabled}>
          로그인
        </Button>
        <Button onClick={() => toRegisterPage()}>회원가입</Button>
      </ButtonWrapper>
    </Form>
  );
};

export default LoginView;
