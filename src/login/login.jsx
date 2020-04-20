import React, { Component } from "react";

import { isAuthenticated } from "./shared/auth";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./shared/auth";
// import Validator from './shared/validator';
// import LoginService from './shared/loginService';
import Test from './test.jsx';

class Login extends Component {
  constructor(props){
    super(props);
    // this.loginService = new LoginService();
    // this.validator = new Validator();  
    this.state={
      email: '',
      password: '',
      test: false,
    };

    // this.handleChangeUsername = this.handleChangeUsername.bind(this);
    // this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // handleChangeUsername(event) {
  //   this.setState({username: event.target.value});
  // }
  // handleChangePassword(event) {
  //   this.setState({password: event.target.value});
  // }

  handleSubmit(event) {
    // if (this.validator.validateInputs(this.state))
    // this.props.onSubmit(this.state);
    alert('Username: '+ this.state.email+'\nPassword: '+ this.state.password);
    // this.loginService.login(this.state);
    this.setState({
      test: true,
    });
    event.preventDefault();
  }

  render() {
    const loginRegLink = (
      <div className="card-body col-12 col-md-3" style={{ margin: "0 auto" }}>
        <h4 className="card-title text-center mb-4 mt-1">Sign in</h4>
        <hr />
        <p className="text-success text-center">Some message goes here</p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <FontAwesomeIcon icon="user" />
                  {/* <FontAwesomeIcon icon={['fab', 'apple']} /> */}
                </span>
              </div>
              <input
                name="email"
                className="form-control"
                placeholder="Email or login"
                type="text"
                email={this.state.email}
                required onChange={this.handleInputChange}
              />
            </div>
          </div>
          <div className="form-group">
            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  {" "}
                  <FontAwesomeIcon icon="lock" />
                  {" "}
                </span>
              </div>
              <input
                className="form-control"
                placeholder="******"
                type="password"
                name="password"
                password={this.state.password}
                required onChange={this.handleInputChange}
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
        {this.state.test === true && <Test email={this.state.email} password={this.state.password}/>}
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
