import React from "react";
import "./App.css";
import Home from "./Pages/home";
import Login from "./Pages/login";
import TimeSheet from "./Pages/timesheet";
import Reports from "./Pages/report";
import Profile from "./Pages/profile";
import NavBar from "./components/NavBar/navbar";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// The router routes to specfic components

function App() {
  return (
    <Router>
      <div className="main-container">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/timesheet" component={TimeSheet} />
          <Route path="/report" component={Reports} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
