import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

//importing dependencies
import rootReducer from "./reducers";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "redux-thunk";
import thunk from "redux-thunk";

//Creating the store
const store = createStore(rootReducer, applyMiddleware(thunk));

//Wrapping the app with the Provider
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
