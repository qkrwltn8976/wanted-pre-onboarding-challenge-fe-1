import { Button, Form, Input } from "antd";
import React, { useCallback, useEffect } from "react";
import { useRegister } from "../../hooks/queries/useAuth";
import useInput from "../../hooks/commons/useInput";
import { RuleObject } from "antd/es/form";

interface IRegisterFormProps {
  setLoginToken?: React.Dispatch<React.SetStateAction<string>> | undefined;
}

const RegisterForm: React.FunctionComponent<IRegisterFormProps> = ({
  setLoginToken,
}) => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const { mutate, data } = useRegister();

  const onFinish = () => {
    if (!email || !password) return;
    mutate({ email, password });
  };

  const validateEmail = useCallback((_: RuleObject, value: string) => {
    const regExp = /(?=.*@)(?=.*\.).*/;
    if (!regExp.test(value)) {
      return Promise.reject(
        new Error("이메일은 최소 `@`, `.` 포함해야 합니다")
      );
    }
    return Promise.resolve();
  }, []);

  const validatePassword = useCallback((_: RuleObject, value: string) => {
    if (value.length < 8) {
      return Promise.reject(new Error("비밀번호는 8자 이상 입력해야 합니다"));
    }
    return Promise.resolve();
  }, []);

  const validatePasswordCheck = useCallback(
    (_: RuleObject, value: string) => {
      if (value !== password) {
        return Promise.reject(new Error("비밀번호가 일치하지 않습니다"));
      }
      return Promise.resolve();
    },
    [password]
  );

  useEffect(() => {
    if (!data) return;
    const { token } = data;
    console.log(token, "#######");
    setLoginToken && setLoginToken(token);
  }, [data]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
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

export default RegisterForm;
