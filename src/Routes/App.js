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

  return (
    <Router>
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
