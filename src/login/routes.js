import React from "react";

import { isAuthenticated } from "./shared/auth";

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

const Routes = () => (
//   <Switch>
//     <Route exact={true} path="/" component={Login} />
//     <PrivateRoute path="/login" component={Login} />
//     <PrivateRoute path="/config" component={Config} />
//     <PrivateRoute path="/comm" component={Comm} />
//     <PrivateRoute path="/reports" component={Reports} />
//   </Switch>
);

export default Routes;
