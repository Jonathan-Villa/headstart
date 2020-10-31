import React, { useState, useCallback } from "react";
import Login from "../Pages/login";
import SignUp from "../Pages/signup";
import NavBar from "../components/NavBar/navbar";
import TimeSheet from "../Pages/timesheet";
import Reports from "../Pages/report";
import Profile from "../Pages/profile";
import Home from "../Pages/home";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
  useHistory,
  Redirect,
} from "react-router-dom";
import home from "../Pages/home";

function App() {
  const history = useHistory();
  const userAuthenticate = {
    isAuthenticated: false,

    authenticate() {
      userAuthenticate.isAuthenticated = true;
      history.push("/home");
    },
    signout() {
      userAuthenticate.isAuthenticated = false;
      history.push("/login");
    },
  };
  return (
    <Router>
      <Switch>
        <Route
          exact={true}
          path="/"
          render={() => <Login userAuthenticate={userAuthenticate} />}
        />
        <Route
          path="/signup"
          render={() => <SignUp userAuthenticate={userAuthenticate} />}
        />
        <Privateroute userAuthenticate={userAuthenticate}>
          <NavBar />
          <Route exact path="/home" component={Home} />
          <Route path="/timesheet" component={TimeSheet} />
          <Route path="/report" component={Reports} />
          <Route path="/profile" component={Profile} />
        </Privateroute>
      </Switch>
    </Router>
  );
}

function Privateroute({ userAuthenticate }, { children, ...rest }) {
  return (
    <Route
      {...rest}
      render={() =>
        userAuthenticate.isAuthenticated ? (
          children
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}

export default App;
