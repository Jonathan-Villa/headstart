import axios from "axios";
import { alertError } from "../actions";


// post request for user login
const loginPost = (user) =>{
  return axios
    .post("http://localhost:4000/api/login", user)
    .then((res) => res).catch((err)=> console.log(err.response.data)) // return response

};

export { loginPost };
