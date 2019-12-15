import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PageLoading from "../../components/layouts/loader";

export default function(ComposedComponent) {
  class UnAuthentication extends Component {
    render() {
      const { authenticated } = this.props;
      console.log(authenticated);
      if (authenticated === null) {
        return <PageLoading LoadingType="main" />;
      }
      if (authenticated === false) {
        return <ComposedComponent {...this.props} />;
      }
      if (authenticated === true) {
        return <Redirect to="/" />;
      }
    }
  }

  UnAuthentication.propTypes = {
    authenticated: PropTypes.bool
  };
  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
  });
  return connect(mapStateToProps)(UnAuthentication);
}
