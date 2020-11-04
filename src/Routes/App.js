import React, { useState, useCallback } from "react";
import Login from "../Pages/login";
import SignUp from "../Pages/signup";
import NavBar from "../components/NavBar/navbar";
import TimeSheet from "../Pages/timesheet";
import Reports from "../Pages/report";
import Profile from "../Pages/profile";
import Home from "../Pages/home";
import PrivateRoute from "./privateroute";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { UserContext } from "../helpers/utils/usercontext";
import Navbar from "../components/NavBar/navbar";


function App(props) {
  const authUser = {
    isAuthenticated:false,

    authenticate(cb){
      authUser.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signOut(cb){
      authUser.isAuthenticated = false; 
      setTimeout(cb,100)
    }
  }

  return (
    <Router>
      <UserContext.Provider value={{ props, authUser }}>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route
            exact
            path="/signup"
            component={SignUp}
          />

          <PrivateRoute component={Navbar}/>
          <PrivateRoute exact path="/home" {...props} component={Home} />
          <PrivateRoute exact path="/timesheet" component={TimeSheet} />
          <PrivateRoute exact path="/reports" component={Reports} />
          <PrivateRoute exact path="/profile " component={Profile} />

          <Route
            exact={true}
            path="/"
            render={() =>
              authUser.isAuthenticated ? <Redirect to="/home" /> : <Redirect to="/login" />
            }
          />
        </Switch>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
