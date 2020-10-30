import React, { useState, useCallback } from "react";
import Home from "../Pages/home";
import Login from "../Pages/login";
import TimeSheet from "../Pages/timesheet";
import Reports from "../Pages/report";
import Profile from "../Pages/profile";
import SignUp from "../Pages/signup"
import NavBar from "../components/NavBar/navbar";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";



const ProtectedRoute = (props) => (
  <NavBar>
    <Route
      exact
      path="/home"
      render={props => <Home {...props} />} />
    <Route path="/timesheet" component={TimeSheet} />
    <Route path="/report" component={Reports} />
    <Route path="/profile" component={Profile} />

  </NavBar>
);

const PrivateRoute =({children, ...rest})=>{



}

function App(props) {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const handleAuth = useCallback (auth => {
    auth.preventDefault();
    setAuthenticated(!isAuthenticated);
  }, [isAuthenticated]);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path ="" />
      </Switch>
    </Router>
  );
}

export default App;
