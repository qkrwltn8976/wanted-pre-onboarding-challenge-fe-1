import React, { ChangeEvent, useCallback, useEffect } from "react";
import { RuleObject } from "antd/es/form";
import { emailValidator, passwordValidator } from "../../utils/validator";
import useInput from "../../hooks/commons/useInput";
import { useRegister } from "../../hooks/queries/useAuth";
import { IAuthProps } from "../../types/authProps";
import RegisterView from "./Views/RegisterView";

export interface IRegisterProps {
  email: string;
  password: string;
  passwordCheck: string;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePasswordCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  validateEmail: (_: RuleObject, value: string) => Promise<void>;
  validatePassword: (_: RuleObject, value: string) => Promise<void>;
  validatePasswordCheck: (_: RuleObject, value: string) => Promise<void>;
  onSubmit: () => void;
}

const Register = ({ setLoginToken }: IAuthProps) => {
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [passwordCheck, onChangePasswordCheck] = useInput("");

  const { mutate, data } = useRegister();

  useEffect(() => {
    if (!data) return;
    const { token } = data;
    setLoginToken && setLoginToken(token);
  }, [data]);

  const registerProps: IRegisterProps = {
    email,
    password,
    passwordCheck,
    onChangeEmail,
    onChangePassword,
    onChangePasswordCheck,
    validateEmail: useCallback((_: RuleObject, value: string) => {
      if (!emailValidator(value)) {
        return Promise.reject(
          new Error("이메일은 최소 `@`, `.` 포함해야 합니다")
        );
      }
      return Promise.resolve();
    }, []),
    validatePassword: useCallback((_: RuleObject, value: string) => {
      if (!passwordValidator(value)) {
        return Promise.reject(new Error("비밀번호는 8자 이상 입력해야 합니다"));
      }
      return Promise.resolve();
    }, []),
    validatePasswordCheck: useCallback(
      (_: RuleObject, value: string) => {
        if (value !== password) {
          return Promise.reject(new Error("비밀번호가 일치하지 않습니다"));
        }
        return Promise.resolve();
      },
      [password]
    ),
    onSubmit: () => {
      if (!email || !password) return;
      mutate({ email, password });
    },
  };

  return <RegisterView {...registerProps} />;
};

export default Register;
