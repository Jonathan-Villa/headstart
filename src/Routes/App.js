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
import { UserContext } from "../helpers/utils/usercontext";
import Navbar from "../components/NavBar/navbar";
import store from "../redux/store/store";
import { Provider } from "react-redux";

function App(props) {
  return (
    <Router>
      <Provider state={store}>
        <Switch>
          <Route exact path="/login" render={() => <Login />} />
          <Route exact path="/signup" component={SignUp} />

          <>
            <PrivateRoute component={Navbar} />
            <PrivateRoute exact path="/home" {...props} component={Home} />
            <PrivateRoute exact path="/timesheet" component={TimeSheet} />
            <PrivateRoute exact path="/report" component={Reports} />
            <PrivateRoute exact path="/profile" component={Profile} />
          </>
          {/* <Route
            exact={true}
            path="/"
            render={() =>
              authUser.isAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <Redirect to="/login" />
              )
            }
          /> */}
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
