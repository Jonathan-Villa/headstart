import axios from "axios";
import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { currentUser } from "./actions";
import { GET_ERRORS } from "./actionTypes";

export const registerNewUser = (user, history) => (dispatch) => {
  axios
    .post("http://localhost:4000/api/signup", user)
    .then((res) => history.push("/login"))
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};

export const loginUser = (user, history, from) => (dispatch) => {
  axios
    .post("http://localhost:4000/api/login", user)
    .then((res) => {
      console.log(res);
      const { token } = res.data; // get data
      localStorage.setItem("jwt-token", token); //store token
      setAuthToken(token);
      const decodeToken = jwtDecode(token);
      history.push(from); // redirect from login -> home
      dispatch(currentUser(decodeToken)); 
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};
