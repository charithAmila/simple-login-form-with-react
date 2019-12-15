import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import auth from "../reducers/auth";

export default createStore(
  combineReducers({ auth }),
  applyMiddleware(reduxThunk)
);
