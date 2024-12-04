import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import HeaderBar from "./components/HeaderBar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <AuthProvider>
        <HeaderBar />
        <App />
      </AuthProvider>
    </HashRouter>
  </StrictMode>
);
