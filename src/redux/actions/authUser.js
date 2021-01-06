import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { login, register } from "./";
import { loginPost, registerPost } from "../http";
import { alertSuccess, alertError } from "./AlertActions/alertAction";
import { registerError } from "./RegisterActions/registerAction";
import { loginError } from "./LoginActions/loginAction";
import { userAuthError, userAuth } from "./GetUserAction/getUserAction";

export const registerAuth = (user, history) => (dispatch) => {
  registerPost(user).then(async (res) => {
    const data = await res.json();

    // registered successfully
    if (res.status === 200) {
      dispatch(register());
      dispatch(alertSuccess("Successfully Registered!"));
      history.push("/login"); // will redirect them to login page
    }
    if (res.status === 400) {
      console.log(res.data);
      dispatch(registerError());
      dispatch(alertError(res.data.message, res.data.email));
    }
  });
};

export const loginAuth = (user, history, from) => (dispatch) => {
  loginPost(user)
    .then(async (res) => {
      if (res) {
        const data = await res.json();

        const token = data.token;

        // store token in localstorage
        localStorage.setItem("jwt-token", token);
        setAuthToken(token);
        const decodeToken = jwtDecode(token);
        // redirect from login -> home
        history.push(from);
        dispatch(userAuth(decodeToken));
        dispatch(login(decodeToken));

        dispatch(alertSuccess("Sucessfully logged in!"));
      }
    })
    .catch((res) => {
      const data = res.response;
      dispatch(loginError());
      dispatch(userAuthError());
      dispatch(alertError(data));
    });
};

