import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import GlobalStyle from "./styles/GlobalStyle";
import toast, { Toaster } from "react-hot-toast";
import { AxiosError } from "axios";
import Router from "./router/router";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // window 가 다시 포커스 될 때 refetch
      retry: 0, // 요청이 실패했을시 재요청을 실행합니다. 기본값은 3입니다.
    },
  },
  queryCache: new QueryCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.details}`);
      }
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(`${error.response?.data.details}`);
      }
    },
  }),
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Toaster />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
