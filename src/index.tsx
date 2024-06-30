import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import ThemeContext from "./Utils/ThemeContext";
import App from "./App";
import { getThemeColor, themingProps } from '../src/Constants/Theme';
import { Provider } from 'react-redux';
import appStore from "./Store/appStore";

const getWhitelabelId = (hostName: string): string => {
  switch(hostName){
    case "https://lays-blog-spot.vercel.app/":
      return "1"
    case "http://127.0.0.1:3002":
      return "2"
    case "http://127.0.0.1:3003":
      return "3"
    default:
      return "1"
  }
}

const whitelabelId = getWhitelabelId(window.location.origin);

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
const themeProps: themingProps = getThemeColor(whitelabelId);

root.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <ThemeContext.Provider value={themeProps}>
        <App whitelabelId={whitelabelId}/>
      </ThemeContext.Provider>
    </Provider>
  </React.StrictMode>
);
