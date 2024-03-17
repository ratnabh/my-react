import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const UnProtected = () => {
  const user = useSelector((state) => state.auth);
  console.log(user?.isAuthenticated);
  if (!user?.isAuthenticated) {
    return <Outlet />;
  } else return <Navigate to="/" />;
};
