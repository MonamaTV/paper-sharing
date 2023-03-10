import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Papers from "./pages/Papers";
import UploadPaper from "./pages/AddPaper";
import { AuthProvider } from "./context/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile",
    element: (
      <AuthProvider>
        <Profile />
      </AuthProvider>
    ),
    children: [
      {
        path: "/profile",
        element: <Papers />,
      },
      {
        path: "/profile/new",
        element: <UploadPaper />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
