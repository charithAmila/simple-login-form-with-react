import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { GoogleLogin } from "react-google-login-component";
import Nav from "../../components/layouts/nav";
import { signup } from "../../utils/api/auth";
import { authenticate } from "../../actions/auth";
import { setCookie } from "../../utils/cookie";
import { ACCESS_TOCKEN, SOCIALID } from "../../utils/constants";
import AuthCheck from "../../hoc/un-auth";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      error: ""
    };
  }

  saveForm = () => {
    const { email, password, confirmPassword } = this.state;
    const { dispatch } = this.props;
    if (!email) {
      this.setState({ error: "Email is required !" });
      return false;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      this.setState({ error: "Invalid email !" });
      return false;
    } else if (!password) {
      this.setState({ error: "Password is required !" });
      return false;
    } else if (
      !/([^a-zA-Z\d])+([a-zA-Z\d])+|([a-zA-Z\d])+([^a-zA-Z\d])+/.test(password)
    ) {
      this.setState({ error: "Invalid password !" });
    } else if (!confirmPassword) {
      this.setState({ error: "Confirm password is required !" });
      return false;
    } else if (password !== confirmPassword) {
      this.setState({ error: "Check your confirm password !" });
      return false;
    }

    signup({ email, password })
      .then(res => {
        setCookie(ACCESS_TOCKEN, res.data.token);
        dispatch(authenticate(true));
      })
      .catch(e => {});
  };

  responseGoogle = () => {
    // Connect with api
    return true;
  };

  render() {
    const { email, password, confirmPassword } = this.state;
    return (
      <Fragment>
        <Nav />
        <div className="container">
          <br />
          <br />
          <br />
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4 ">
              <fieldset>
                <legend>Sign up</legend>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={({ target }) =>
                      this.setState({ email: target.value })
                    }
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={({ target }) =>
                      this.setState({ password: target.value })
                    }
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={confirmPassword}
                    onChange={({ target }) =>
                      this.setState({ confirmPassword: target.value })
                    }
                  />
                </div>
                <div className="row">
                  <div className="col-md-3">
                    <button
                      type="submit"
                      onClick={this.saveForm}
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="col-md-9">
                    <GoogleLogin
                      size="40px"
                      socialId={SOCIALID}
                      className="btn btn-primary"
                      scope="profile"
                      fetchBasicProfile={true}
                      responseHandler={this.responseGoogle}
                      buttonText="Signup with Google"
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default connect()(AuthCheck(Signup));
