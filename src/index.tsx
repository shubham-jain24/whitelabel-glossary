import React from "react";
import "./styles.css";
import ReactDOM from "react-dom/client";
import ThemeContext from "./Utils/ThemeContext";
import App from "./App";
import { getThemeColor, themingProps } from '../src/Constants/Theme';
import { Provider } from 'react-redux';
import appStore from "./Store/appStore";

// console.log(window.location.hostname);

// const getWhitelabelId = (hostName: string) => {

// }

const whitelabelId = "1";

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
