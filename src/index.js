import { StrictMode } from "react";
import React from "react";
import ReactDOM from "react-dom";

import TodoList from "./TodoList.js";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
    <TodoList />
  </StrictMode>,
  rootElement
);
