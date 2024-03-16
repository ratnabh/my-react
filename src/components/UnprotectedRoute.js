import React, { useContext } from "react";
import { AuthContext } from "../provider/authProvider";
import { Navigate, Outlet } from "react-router-dom";

export const UnprotectedRoute = () => {
  const value = useContext(AuthContext);
  console.log(value,'value12')
  if (value.token) {
    return <Navigate to="/app" />;
  }

  return <Outlet />;
};
