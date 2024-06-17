import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/Store";
import {Toaster } from "react-hot-toast";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  // we need to wrap our code into browser router because we are using routes 
  // we also need to wrap App.js file into provider as we are using react redux to maintain state
  <BrowserRouter>
  
  <Provider store={store}>
    <App />
    <Toaster />
  </Provider>
  
  </BrowserRouter>
);
