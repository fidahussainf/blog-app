import React from "react";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import {BrowserRouter as Router} from "react-router-dom"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
     <ToastContainer />
    <Router>
      <App/>
    </Router>
  </StrictMode>
);

