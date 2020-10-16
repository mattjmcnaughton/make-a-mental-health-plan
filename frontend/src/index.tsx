import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// What is the safest way to limit the impact of any specific CSS framework?
import "./App.sass";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App routerComponent={BrowserRouter} />
  </React.StrictMode>,
  document.getElementById("root")
);
