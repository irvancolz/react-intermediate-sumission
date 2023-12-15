import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ThemeContextProvider from "./context/theme.jsx";
import LanguageContextProvider from "./context/language.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeContextProvider>
        <LanguageContextProvider>
          <App />
        </LanguageContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
