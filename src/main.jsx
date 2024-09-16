import React from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./auth/sign-in/index.jsx";
import App from "./App";
import HomePage from "./home";
import DashBoard from "./Dashboard";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      },
    ],
  },
  {
    path: "/auth/sign-in",
    element: <SignInPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </React.StrictMode>
);
