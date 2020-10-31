import React from "react";
import NavBar from "../components/NavBar/navbar";
import TimeSheet from "../Pages/timesheet";
import Reports from "../Pages/report";
import Profile from "../Pages/profile";
import Home from "../Pages/home";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  useHistory,
  Redirect,
} from "react-router-dom";

function Protectedroute() {
  return (
    <NavBar>
      <Route exact path="/home" component={Home} />
      <Route exact path="/timesheet" component={TimeSheet} />
      <Route exact path="/report" component={Reports} />
      <Route exact path="/profile" component={Profile} />
    </NavBar>
  );
}

export default Protectedroute;
