import { Button, Checkbox, Form, Input } from "antd";
import React, { useCallback, useState } from "react";
import useAuth from "../../hooks/useAuth";
import useInput from "../../hooks/useInput";

interface ILoginFormProps { }

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { data, isLoading, isError, refetch } = useAuth(email, password);

  console.log(data)
  const onFinish = () => {
    console.log("Success:", email, password);
    refetch();
    //Success: {password: 'sdf', remember: true, email: 'asdf'}
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);

  };

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
        >
          <Input value={email} onChange={onChangeEmail} />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
        >
          <Input.Password value={password} onChange={onChangePassword} />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button
            type="primary"
            htmlType="submit"
            disabled={email.length > 0 && password.length > 0 ? false : true}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default LoginForm;
