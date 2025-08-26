import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const Home = lazy(() => import("@/pages/Home/Home"));

export const router = createBrowserRouter([
  {
    path: "/",
    async lazy() {
      const { AppLayout } = await import("@/shared/AppLayout");
      return { Component: AppLayout };
    },
    children: [
      { index: true, element: <Home /> },
      { path: "*", async lazy() { const { NotFound } = await import("@/shared/NotFound"); return { Component: NotFound }; } }
    ],
    errorElement: React.createElement(React.Fragment, null)
  }
]);
