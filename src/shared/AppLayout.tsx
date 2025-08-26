import React, { Suspense } from "react";
import { Outlet, Link } from "react-router-dom";
import "modern-css-reset";

export const AppLayout: React.FC = () => {
  return (
    <div className="app-layout">
      <header>
        <nav>
          <Link to="/">Home</Link>
        </nav>
      </header>
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
