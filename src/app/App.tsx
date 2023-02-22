import { FC, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { getToken } from "services/tokenService";
import { Auth, Dashboard } from "pages";
import { Profile, Map } from "components";
import { LoginForm, SignupForm } from "forms";

import { ProtectedRoute } from "./ProtectedRoute";
import { GlobalStyles } from "./global-styles";

const queryClient = new QueryClient();

export const App: FC = () => {
  const [authed, setAuthed] = useState(Boolean(getToken()));

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route
            path="/auth/login"
            element={<LoginForm onLogin={() => setAuthed(true)} />}
          />
          <Route
            path="/auth/signup"
            element={<SignupForm onSignup={() => setAuthed(true)} />}
          />
        </Route>
        <Route
          path="/"
          element={
            <ProtectedRoute redirectPath="/auth/login" isAllowed={authed}>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="/map" element={<Map />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
      <ReactQueryDevtools />
      <GlobalStyles />
    </QueryClientProvider>
  );
};
