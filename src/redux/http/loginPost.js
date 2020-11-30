import axios from "axios";

// post request for user login
const loginPost = async (user) => {
  return await axios
    .post("http://localhost:4000/api/login", user)
    .then((res) => res) // return response
    .catch((err) => err.response);
};

export { loginPost };
