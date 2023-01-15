import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { QueryCache, QueryClient, QueryClientProvider } from "react-query";
import GlobalStyle from "./styles/GlobalStyle";
import toast, { Toaster } from 'react-hot-toast';
import { AxiosError } from "axios";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

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
        toast.error(`${error.response?.data.details}`)
      }
    }
  })
});

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Toaster />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
