import { createRoot } from "react-dom/client";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Home from "../containers/home";

export const RoutesHandler = () => {
  const routes = [
    {
      path: "/",
      element: <Home />,
    },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};
