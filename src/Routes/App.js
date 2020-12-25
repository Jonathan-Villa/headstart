import React from "react";
import { Home, TimeSheet, Reports, Settings, Login, Signup } from "../Pages";
import PrivateRoute from "./privateroute";
import "./App.css"
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";
import { Navbar } from "../components/NavBar";
import {useSelector} from "react-redux"

import {Snackbar} from "../components/Alerts/snackbar"

function App(props) {
  const alertMessage = useSelector((state) => state.alertReducer);
  return (
    <Router>
      {alertMessage.type  === "error" ? <Snackbar/> : null }
      {alertMessage.type  === "success" ? <Snackbar/> : null }
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <>
          <PrivateRoute component={Navbar} />
          <Route exact path="/home" {...props} component={Home} />
          <Route path="/time-sheet" component={TimeSheet} />
          <Route path="/reports" component={Reports}/>
          <Route path="/settings" component={Settings} />
          <Redirect from="/login" to="/home" />
          
        </>
      </Switch>
    </Router>
  );
}

export default App;
