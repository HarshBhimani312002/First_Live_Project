import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import netlifyIdentity from "netlify-identity-widget";

netlifyIdentity.init();

window.addEventListener("load", () => {
  if (window.location.hash.includes("recovery_token")) {
    netlifyIdentity.open();
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);