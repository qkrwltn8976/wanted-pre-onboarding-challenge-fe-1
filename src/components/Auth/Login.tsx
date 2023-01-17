import React, { ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH } from "../../constants/path.constant";
import useInput from "../../hooks/commons/useInput";
import { useLogin } from "../../hooks/queries/useAuth";

import LoginView from "./Views/LoginView";

export interface ILoginProps {
  email: string;
  password: string;
  loginEnabled: boolean;
  onChangeEmail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  toRegisterPage: () => void;
}

const Login = () => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { refetch } = useLogin(email, password);

  const loginProps: ILoginProps = {
    email,
    password,
    loginEnabled: email.length > 0 && password.length > 0,
    onChangeEmail,
    onChangePassword,
    onSubmit: () => refetch(),
    toRegisterPage: () => navigate(AUTH.REGISTER),
  };
  return <LoginView {...loginProps} />;
};

export default Login;
