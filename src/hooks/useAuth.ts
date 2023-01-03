import { useMutation, useQuery } from "react-query";
import { login, signUp } from "../apis/auth";
import { AuthResponse } from "../types/auth";
import { UserInput } from "../types/users";

const useLogin = (email: string, password: string) =>
  useQuery<AuthResponse>(["login"], () => login(email, password), {
    enabled: false,
  });

const useRegister = () => {
  return useMutation(
    ["register"],
    (userInput: UserInput) => signUp(userInput),
    {
      onSuccess: () => {},
    }
  );
};

export { useLogin, useRegister };
