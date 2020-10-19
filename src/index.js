import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";
import Login from "./pages/login";
import * as serviceWorker from "./serviceWorker";
import Signup from "./pages/signup";

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Router basename="/v1.0.0">
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Router>
    </App>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
