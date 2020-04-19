import React, { Component } from "react";
import "./auth";

import { isAuthenticated } from "./auth";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {};
  render() {
    const loginRegLink = (
      <div className="card-body col-12 col-md-3" style={{ margin: "0 auto" }}>
        <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
        <hr />
        <p className="text-success text-center">Some message goes here</p>
        <form action="/login" method="POST">
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fa fa-user"></i>
                </span>
              </div>
              <input
                name="username"
                className="form-control"
                placeholder="Email or login"
                type="text"
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <i className="fa fa-lock"></i>{" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="******"
                type="password"
                name="password"
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-danger btn-block">
              {" "}
              Login{" "}
            </button>
          </div>
          <p className="text-center">
            <Link className="btn">Forgot password?{isAuthenticated()}</Link>
          </p>
        </form>
      </div>
    );

    const userLink = (
      <div className="card-body col-12 col-md-3" style={{ margin: "0 auto" }}>
        I'm logged
      </div>
    );
    return (
      <div className="container-fluid margin-top">
        {!isAuthenticated() ? loginRegLink : userLink}
      </div>
    );
  }
}

export default Login;
