import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ isAllowed, children, redirectPath }) => {
  if (!isAllowed) {
    return <Navigate to={redirectPath} />;
  }

  return children;
};
