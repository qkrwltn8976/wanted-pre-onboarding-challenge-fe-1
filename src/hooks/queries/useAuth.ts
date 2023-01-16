import { useMutation, useQuery, useQueryClient } from "react-query";
import { login, signUp } from "../../apis/auth";
import { UserInput } from "../../types/users";
import toast from "react-hot-toast";
import { authKeys } from "../../constants/queryKey.constant";

const useLogin = (email: string, password: string) =>
  useQuery(authKeys.login, () => login(email, password), {
    enabled: false,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
  });

const useRegister = () => {
  return useMutation(
    authKeys.register,
    (userInput: UserInput) => signUp(userInput),
    {
      onSuccess: ({ message }) => {
        toast.success(message);
      },
    }
  );
};

const useLogout = () => {
  const queryClient = useQueryClient();
  const logout = function () {
    queryClient.setQueryData(authKeys.login, null);
  };
  return { logout };
};

export { useLogin, useRegister, useLogout };
