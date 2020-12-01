import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function AdminRoute({ component: Component, ...rest }) {
  const isAdmin = useSelector((state) => state.loginReducer.role);

  return (
    <Route
      {...rest}
      render={(props,{ location }) =>
        isAdmin === "admin" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}

export default AdminRoute;
