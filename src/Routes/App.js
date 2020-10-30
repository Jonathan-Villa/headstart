import React from "react";
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

// The router routes to specfic components
const userState = {
  isLoggedIn: "User not logged in",
  user: {}
}


const LoginRoute = () => (
  <div>
    <Route exact path="/" component={Login} />
  </div>
);

const DefaultPath = (props) => (
  <div>
    <NavBar />
    <Route 
    exact
    path="/home" 
    render={props=> (<Home {...props}/>)}/>
    <Route path="/timesheet" component={TimeSheet} />
    <Route path="/report" component={Reports} />
    <Route path="/profile" component={Profile} />
  </div>
);

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginRoute} />
        <Route exact path="/signup" component={SignUp}/>
        <Route/>
      </Switch>
    </Router>
  );
}

export default App;
