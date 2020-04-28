import React from "react";

import { isAuthenticated } from "./shared/auth";
import Login from './login';
import Base from '../userInterface/base';
import Index from '../userInterface/index';


import { Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = props => (
  <Switch>
    {/* <Route exact={true} path="/" render={props => <Login {...props} algumaProp="alguma"/>} /> */}
    <Route exact={true} path="/" component={Login} />
    <PrivateRoute path="/login" component={Login} />
    <Route path="/index"  component={props.existsBase ? () => <Index /> : () => <Base />}/>
  </Switch>
);

export default Routes;
