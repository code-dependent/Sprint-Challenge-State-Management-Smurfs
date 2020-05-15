import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import {reducer} from './store/reducers/reducer'

const store = createStore(reducer, applyMiddleware(thunk, logger))



ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
