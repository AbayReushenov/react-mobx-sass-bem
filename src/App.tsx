import React, { Suspense } from "react";
import { observer } from "mobx-react-lite";
import { appStore } from "./store/AppStore";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Home = React.lazy(() => import("./pages/Home/Home"));
const NotFound = React.lazy(() => import("./pages/NotFound/NotFound"));

export const App: React.FC = observer(() => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="app" style={{ padding: 16 }}>
          <h1>{appStore.title}</h1>
          <nav style={{ marginBottom: 16 }}>
            <Link to="/" onClick={() => appStore.reset()}>Главная</Link>
          </nav>
          <Suspense fallback={<div>Загрузка...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
});
