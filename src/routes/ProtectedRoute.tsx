import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ authed, children }) => {
  if (!authed) {
    return <Navigate to="/landing" replace />;
  }

  return children;
};
