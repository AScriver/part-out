import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const RequireAuth = ComposedComponent => {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object
    };

    // Check before components
    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.history.push("/login");
      }
    }

    // Compare new props coming in
    componentWillUpdate(nextProps) {
      if (!this.props.authenticated) {
        this.context.router.history.push("/login");
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => {
    return {
      authenticated: state.auth.authenticated,
      username: state.auth.username,
      rerender: state.auth.rerender
    };
  };

  return connect(
    mapStateToProps,
    null
  )(Authentication);
};

export default RequireAuth;
