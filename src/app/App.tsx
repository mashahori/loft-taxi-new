import { FC } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { getToken } from "services/tokenService";
import { Auth, Dashboard } from "pages";
import { Login, Signup, Profile, Map } from "components";

import { ProtectedRoute } from "./ProtectedRoute";
import { GlobalStyles } from "./global-styles";

const queryClient = new QueryClient();

export const App: FC = () => {
  const authed = Boolean(getToken());

  console.log(authed);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute redirectPath="/auth/login" isAllowed={authed}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute redirectPath="/auth/login" isAllowed={authed}>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={true} />
      <GlobalStyles />
    </QueryClientProvider>
  );
};
