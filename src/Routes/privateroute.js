import React , { useContext}from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../helpers/utils/usercontext";

function PrivateRoute({ component: Component, path, ...rest }) {
  const { authUser,  props } = useContext(UserContext);

  return (
    <Route
      path={path}
      {...rest}
      render={({location}) =>
        authUser.isAuthenticated ? (
          <Component  />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location, error: "Login first" },
            }}
          />
        )
      }
    />
  );
}
export default PrivateRoute;
