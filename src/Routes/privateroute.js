import React , { useContext}from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../helpers/utils/usercontext";

function PrivateRoute({ component: Component, ...rest }) {
  // rest retrieves the remainder of the props
  
  const { authUser} = useContext(UserContext); // Context provider 

  return (
    <Route
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
