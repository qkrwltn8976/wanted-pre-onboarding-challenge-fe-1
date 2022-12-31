import { Button, Checkbox, Form, Input } from "antd";
import React, { useCallback, useState } from "react";

interface IRegisterFormProps { }

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = (props) => {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const onFinish = (values: any) => {
    console.log("Success:", values);
    //Success: {password: 'sdf', remember: true, email: 'asdf'}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const validateEmail = useCallback((_: any, value: any) => {
    const regExp = /(?=.*@)(?=.*\.).*/;
    if (!regExp.test(value)) {
      return Promise.reject(new Error('이메일은 최소 `@`, `.` 포함해야 합니다'))
    }
    return Promise.resolve();
  }, []);

  const validatePassword = useCallback((_: any, value: any) => {
    if (value.length < 8) {
      return Promise.reject(new Error('비밀번호는 8자 이상 입력해야 합니다'));
    }
    return Promise.resolve();
  }, [])

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ validator: validateEmail }]}
        >
          <Input value={email} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ validator: validatePassword }]}
        >
          <Input.Password value={password} />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" disabled>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default RegisterForm;
