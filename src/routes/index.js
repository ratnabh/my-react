import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Login from "../containers/login";
import Signup from "../containers/signup";
import Home from "../containers/home";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { Dashboard } from "../containers/dashboard";
import { useContext } from "react";
import { AuthContext } from "../provider/authProvider";
import { UnprotectedRoute } from "../components/UnprotectedRoute";
import { NotFound } from "../containers/not-found";

export const RoutesHandler = () => {
  const routesForAuthenticatedOnly = [
    {
      path: "/app",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
  ];

  const routesForPublic = [
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/not-found",
      element: <NotFound />,
    },
  ];

  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <UnprotectedRoute />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        { path: "/signup", element: <Signup /> },
      ],
    },
  ];

  const { token } = useContext(AuthContext);

  const router = createBrowserRouter([
    ...routesForPublic,
    ...routesForAuthenticatedOnly,
    // ...(!token ? routesForNotAuthenticatedOnly : []),
    ...routesForNotAuthenticatedOnly,
    { path: "*", element: <Navigate to="/not-found" /> },
  ]);

  return <RouterProvider router={router} />;
};
