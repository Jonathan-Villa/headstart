import axios from "axios";

// post request for user login
const loginPost = (user) => {
  return axios.post("http://localhost:4000/api/login", user).then((res) => res);
};

export { loginPost };
