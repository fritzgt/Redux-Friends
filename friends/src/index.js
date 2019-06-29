import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//importing dependencies
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";

//Creating the store
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

//Wrapping the app with the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
