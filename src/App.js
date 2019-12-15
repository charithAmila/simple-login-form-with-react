import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { checkAuthenticated } from "./action-creators/auth";

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(checkAuthenticated());
  }
  render() {
    const { children } = this.props;
    return <Fragment>{children}</Fragment>;
  }
}

const mapStateToProps = () => {
  return {};
};
export default connect(mapStateToProps)(App);
