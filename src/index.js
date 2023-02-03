import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ConsolidatedContextProvider from "./contexts/ConsolidatedContextProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ConsolidatedContextProvider>
      <App />
    </ConsolidatedContextProvider>
  </React.StrictMode>
);
