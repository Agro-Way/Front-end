// src/components/PrivateRoute.jsx
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("token"); // ou use context, redux, etc.

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
