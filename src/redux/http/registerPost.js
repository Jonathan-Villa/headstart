import axios from "axios";

// register post request
const registerPost = (user) => {
  return axios
    .post("http://localhost:4000/api/signup", user)
    .then((res) => res)
    .catch((err) => err.response);
};

export { registerPost };
