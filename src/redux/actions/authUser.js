import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { login, register } from "./actions";
import loginPost from "../http/loginPost";
import registerPost from "../http/registerPost";

import {alertSuccess, alertError} from "../actions/alertAction"
 
export const registerAuth = (user, history) => (dispatch) => {
  registerPost(user)
    .then((res) => {
      // registered successfully
      if (res.status === 200) {
        console.log(res.data.title);
        dispatch(register());
        dispatch(alertSuccess("Successfully Registered!"))
        history.push("/login"); // will redirect them to login page
      }

      

    })
    .catch((err) => dispatch(alertError(err)));
};

export const loginAuth = (user, history, from) => (dispatch) => {
  loginPost(user)
    .then((res) => {
      console.log(res);
      // data object with token
      const { token } = res.data;
      // store token in localstorage
      localStorage.setItem("jwt-token", token);
      setAuthToken(token);

      const decodeToken = jwtDecode(token);
      // redirect from login -> home
      history.push(from);
      // store the token in redux state
      dispatch(login(decodeToken));
      dispatch(alertSuccess("Sucessfully logged in!"))
    })
    .catch((err) => {
      dispatch(alertError(err))
    });
};
