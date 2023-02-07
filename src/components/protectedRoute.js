import { Navigate } from "react-router-dom";

const protectedRoute = ({ children, user }) => {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
};

export default protectedRoute;
