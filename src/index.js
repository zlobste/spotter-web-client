import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import App from "./App";
import "./index.css";

const store = createStore(
  compose(applyMiddleware())
);

ReactDom.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.querySelector("#root")
);
