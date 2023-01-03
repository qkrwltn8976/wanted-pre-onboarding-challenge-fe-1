import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";

import useInput from "../../hooks/useInput";

interface ILoginFormProps {
  setLoginToken?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const LoginForm: React.FunctionComponent<ILoginFormProps> = ({
  setLoginToken,
}) => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { data, refetch } = useLogin(email, password);

  const onFinish = () => {
    refetch();
  };

  useEffect(() => {
    if (!data) return;
    const { token } = data;
    setLoginToken && setLoginToken(token);
    navigate("/");
  }, [data]);

  return (
    <>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item label="Email" name="email">
          <Input value={email} onChange={onChangeEmail} />
        </Form.Item>

        <Form.Item label="Password" name="password">
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
