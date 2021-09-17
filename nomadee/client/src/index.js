import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Home from "./components/Home";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Home />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
