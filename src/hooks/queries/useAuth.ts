import { useMutation, useQuery } from "react-query";
import { login, signUp } from "../../apis/auth";
import { UserInput } from "../../types/users";
import toast from "react-hot-toast";

const useLogin = (email: string, password: string) =>
  useQuery(["login"], () => login(email, password), {
    enabled: false,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
  });

const useRegister = () => {
  return useMutation(
    ["register"],
    (userInput: UserInput) => signUp(userInput),
    {
      onSuccess: ({ message }) => {
        toast.success(message);
      },
    }
  );
};

export { useLogin, useRegister };
