import * as React from "react";
import { Button, Form, Input } from "antd";
import { IRegisterProps } from "../Register";

const RegisterView = ({
  email,
  password,
  passwordCheck,
  onChangeEmail,
  onChangePassword,
  onChangePasswordCheck,
  validateEmail,
  validatePassword,
  validatePasswordCheck,
  onSubmit,
}: IRegisterProps) => {
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ validator: validateEmail }]}
      >
        <Input value={email} onChange={onChangeEmail} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ validator: validatePassword }]}
      >
        <Input.Password value={password} onChange={onChangePassword} />
      </Form.Item>
      <Form.Item
        label="PasswordCheck"
        name="passwordCheck"
        rules={[{ validator: validatePasswordCheck }]}
      >
        <Input.Password
          value={passwordCheck}
          onChange={onChangePasswordCheck}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          회원가입
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterView;
