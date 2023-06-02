import { FC } from "react";

import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Routes } from "./routes";
import { GlobalStyles } from "./global-styles";

const queryClient = new QueryClient();

export const App: FC = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <GlobalStyles />
        <Routes />
      </QueryClientProvider>
      <ToastContainer />
    </>
  );
};
