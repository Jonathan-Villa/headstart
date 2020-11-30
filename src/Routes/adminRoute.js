import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Page403 } from "../Pages/errorPages";

function AdminRoute({ component: Component, rest }) {
  const isAdmin = useSelector((state) => state.loginReducer.payload);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin.role === "Admin" ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location, error: "Status: 403" },
            }}
          />
        )
      }
    />
  );
}

export default AdminRoute;
