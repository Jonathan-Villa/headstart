import React from "react";
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ component: Component, ...rest }) {
  // ...rest retrieves the remainder of the props
  return (
    <Route
      {...rest}
      render={({ location }) =>
        localStorage.getItem("jwt-token") ? (
          // user has token
          <Component />
        ) : (
          // user does not have token
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
