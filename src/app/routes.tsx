import { FC, useState } from "react";
import { Routes as ReactRoutes, Route } from "react-router-dom";

import { Auth, Dashboard } from "pages";
import { Profile, Map } from "components";
import { LoginForm, SignupForm } from "forms";
import { getToken } from "services/tokenService";

import { ProtectedRoute } from "./ProtectedRoute";

export const Routes: FC = () => {
  const [authed, setAuthed] = useState<boolean>(Boolean(getToken()));
  return (
    <ReactRoutes>
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
    </ReactRoutes>
  );
};
