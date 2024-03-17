import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../containers/home";
import { Login } from "../containers/login";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { UnProtected } from "../components/UnProtected";

export const RoutesHandler = () => {
  const routes = [
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "",
          element: <Home />,
        },
      ],
    },
    {
      path: "/auth",
      element: <UnProtected />,
      children: [{ path: "login", element: <Login /> }],
    },
    { path: "*", element: <div>You got lost</div> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};
