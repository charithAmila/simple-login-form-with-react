import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import PageLoading from "../../components/layouts/loader";
export default function(ComposedComponent) {
  class Authentication extends Component {
    render() {
      const { authenticated } = this.props;
      if (authenticated === null) {
        return <PageLoading LoadingType="page" />;
      }
      if (authenticated === true) {
        return <ComposedComponent {...this.props} />;
      }
      if (authenticated === false) {
        return <Redirect to="/login" />;
      }
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool
  };
  const mapStateToProps = state => ({
    authenticated: state.auth.authenticated
  });
  return connect(mapStateToProps)(Authentication);
}
