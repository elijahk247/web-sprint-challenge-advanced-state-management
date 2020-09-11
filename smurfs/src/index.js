import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { reducers } from './Reducers/reducers'


const store = createStore(reducers, applyMiddleware(thunk, logger))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root")
);

