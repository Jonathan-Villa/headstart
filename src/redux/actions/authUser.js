import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { login, register} from "./actions";
import loginPost from "../http/loginPost";
import { userActionType } from "./actiontypes/userActionTypes";
import registerPost from "../http/registerPost"

export const registerAuth = (user, history) => (dispatch) => {
  registerPost(user)
    .then((res) => {
      // registered successfully
      if(res.status === 200){ 
        dispatch(register())
        history.push("/login");
      } 
    }).catch((e) => dispatch());
};

export const loginAuth = (user, history, from) => (dispatch) => {
  loginPost(user)
    .then((res) => {   console.log(res)
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

