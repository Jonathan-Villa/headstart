import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { login, register } from "./actions";
import loginPost from "../http/loginPost";
import registerPost from "../http/registerPost";
import { toast } from "react-toastify";

export const registerAuth = (user, history) => (dispatch) => {
  registerPost(user)
    .then((res) => {
      // registered successfully
      if (res.status === 200) {
        console.log(res.data.title);
        dispatch(register());
        history.push("/login"); // will redirect them to login page
        toast.success("Sucessfully registered!");
      }
    })
    .catch((e) => dispatch());
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
    })
    .catch((err) => {
      console.log(err);
    });
};
