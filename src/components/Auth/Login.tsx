import React, { ChangeEvent, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AUTH, TODO } from "../../constants/path.constant";
import useInput from "../../hooks/commons/useInput";
import { useLogin } from "../../hooks/queries/useAuth";
import { IAuthProps } from "../../types/authProps";
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

const Login = ({ setLoginToken }: IAuthProps) => {
  const navigate = useNavigate();
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");
  const { data, refetch } = useLogin(email, password);

  useEffect(() => {
    if (!data) return;
    const { token } = data;
    setLoginToken && setLoginToken(token);
    navigate(TODO.DEFAULT, { replace: true });
  }, [data]);

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
