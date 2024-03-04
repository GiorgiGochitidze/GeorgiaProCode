import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <ScrollToTop />
    <App />
  </BrowserRouter>
);
