import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";

export const ProtectedRoute = ({ requiredRole = "user" }) => {
  const user = useSelector((state) => state.auth);
  console.log(user.permissions, requiredRole);
  if (user?.isAuthenticated && user.permissions?.includes(requiredRole)) {
    return <Outlet />;
  } else if (
    user?.isAuthenticated &&
    !user.permissions?.includes(requiredRole)
  ) {
    return <Navigate to="/" />;
  } else return <Navigate to="/auth/login" />;
};
