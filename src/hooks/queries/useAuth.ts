import { ACCESS_TOKEN_KEY } from "./../../constants/token.constant";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { login, signUp } from "../../apis/auth";
import { UserInput } from "../../types/users";
import toast from "react-hot-toast";
import { authKeys } from "../../constants/queryKey.constant";
import { TODO } from "../../constants/path.constant";
import { useNavigate } from "react-router-dom";

const useLogin = (email: string, password: string) => {
  const navigate = useNavigate();
  return useQuery(authKeys.login, () => login(email, password), {
    enabled: false,
    onSuccess: ({ message, token }) => {
      toast.success(message);
      localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(token));
      navigate(TODO.DEFAULT, { replace: true });
    },
  });
};

const useRegister = () => {
  const navigate = useNavigate();
  return useMutation(
    authKeys.register,
    (userInput: UserInput) => signUp(userInput),
    {
      onSuccess: ({ message, token }) => {
        toast.success(message);
        localStorage.setItem(ACCESS_TOKEN_KEY, JSON.stringify(token));
        navigate(TODO.DEFAULT);
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
