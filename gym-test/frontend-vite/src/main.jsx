import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page.jsx";
import Login from "./routes/Login.jsx";
import Register from "./routes/Register.jsx";

import { action as loginAction } from "./routes/Login.jsx";
import { action as registerAction } from "./routes/Register.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
    action: loginAction,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "register",
    element: <Register />,
    errorElement: <ErrorPage />,
    action: registerAction,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
