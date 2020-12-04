import React from "react";
import { Home, TimeSheet, Reports, Settings, Login, Signup } from "../Pages";
import PrivateRoute from "./privateroute";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { Navbar } from "../components/NavBar";

function App(props) {
  console.log(props);
  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <>
          <PrivateRoute component={Navbar} />
          <PrivateRoute exact path="/home" {...props} component={Home} />
          <PrivateRoute path="/time-sheet" component={TimeSheet} />
          <PrivateRoute path="/reports" component={Reports}/>
          <PrivateRoute path="/settings" component={Settings} />
          <Redirect from="/login" to="/home" />
        </>
      </Switch>
    </Router>
  );
}

export default App;
