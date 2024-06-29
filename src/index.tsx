import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import App from "./App";
const whitelabelId = "3";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App whitelabelId={whitelabelId}/>
  </React.StrictMode>
);
