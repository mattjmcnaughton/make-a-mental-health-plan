import React from "react";
import ReactDOM from "react-dom";

// What is the safest way to limit the impact of any specific CSS framework?
import "./App.sass";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
