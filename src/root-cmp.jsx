import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";

import { Header } from "./cmps/header.jsx";

export const App = () => {
  return (
    <main className="app">
      <Header/>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} element={component} path={path} />
        ))}
      </Routes>
    </main>
  );
};
