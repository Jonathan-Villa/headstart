import React from "react";
import { Home, TimeSheet, Report, Settings, Login, Signup } from "../Pages";
import { AdminLogin } from "../Pages/adminPages";
import PrivateRoute from "./privateroute";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import { Navbar } from "../components/NavBar";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import AdminRoute from "./adminRoute";
import { Page403, Page404 } from "../Pages/errorPages";
import { useSelector } from "react-redux";

function App(props) {
  return (
    <Provider store={store}>
      
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />

          <>
            <PrivateRoute component={Navbar}/>
            <PrivateRoute exact path="/home" {...props} component={Home} />
            <PrivateRoute path="/time-sheet" component={TimeSheet} />
            <PrivateRoute path="/settings" component={Settings} />
          </>

          <Redirect from="/login" to="/home" />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
