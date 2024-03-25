import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./pages/Login";
import { Create } from "./pages/Create";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={Login} path="/auth" />
          <Route Component={Create} path="/register" />
        </Routes>
      </BrowserRouter>
    </>
  );
}
