import jwtDecode from "jwt-decode";
import setAuthToken from "./setAuthToken";
import { login, register} from "./actions";
import loginPost from "../http/loginPost";
import { userActionType } from "./actiontypes/userActionTypes";
import registerPost from "../http/registerPost"

export const registerAuth = (user, history) => (dispatch) => {
  registerPost(user)
    .then((res) => {

      if(res.status === 200){
        dispatch(register())
        history.push("/login");
      } 
    
    })
    .catch((e) => dispatch());
};

export const loginAuth = (user, history, from) => (dispatch) => {
  loginPost(user)
    .then((res) => {
      const { token } = res.data; // get data
      localStorage.setItem("jwt-token", token); //store token
      setAuthToken(token);

      const decodeToken = jwtDecode(token);
      history.push(from); // redirect from login -> home
      console.log(res)
      dispatch(login(decodeToken)); // dispatch our action token
    })
    .catch((err) => {
      console.log(err);
    });
};

