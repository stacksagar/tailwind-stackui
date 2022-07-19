import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./raw.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { RootProvider } from "./context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <RootProvider>
        <App />
      </RootProvider>
    </BrowserRouter>
  </React.StrictMode>
);
