import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../provider/authProvider";

export const ProtectedRoute = () => {
  const value = useContext(AuthContext);

  if (!value.token) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};
