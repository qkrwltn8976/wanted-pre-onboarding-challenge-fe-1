import { AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { loginApi } from "../apis/auth";
import { AuthResponse } from "../types/auth";

const useAuth = (email: string, password: string) =>
  useQuery<AxiosResponse<AuthResponse>, Error>(
    ["login"],
    () => loginApi(email, password),
    {
      enabled: false,
    }
  );

export default useAuth;