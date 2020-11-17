import React from "react";
import Login from "../Pages/login";
import SignUp from "../Pages/signup";
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
import Navbar from "../components/NavBar/navbar";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path= "/Home" component={Home} />

          <>
            <PrivateRoute component={Navbar} />
            <PrivateRoute exact path="/home" {...props} component={Home} />
            <PrivateRoute path="/timesheet" component={TimeSheet} />
            <PrivateRoute path="/report" component={Reports} />
            <PrivateRoute path="/profile" component={Profile} />
          </>
          <Redirect from={"/login"} to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
