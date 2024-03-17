import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import ErrorBoundary from "./errorBoundary";

export const ProtectedRoute = () => {
  const user = useSelector((state) => state.auth);
  console.log(user?.isAuthenticated);
  if (user?.isAuthenticated) {
    return (
      <ErrorBoundary>
        <Outlet />
      </ErrorBoundary>
    );
  } else return <Navigate to="/auth/login" />;
};
