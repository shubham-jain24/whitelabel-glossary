import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import ThemeContext from "./Utils/ThemeContext";
import App from "./App";
import { getThemeColor, themingProps } from '../src/Constants/Theme';
const whitelabelId = "3";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const themeProps: themingProps = getThemeColor(whitelabelId);

root.render(
  <React.StrictMode>
    <ThemeContext.Provider value={themeProps}>
      <App whitelabelId={whitelabelId}/>
    </ThemeContext.Provider>
  </React.StrictMode>
);
