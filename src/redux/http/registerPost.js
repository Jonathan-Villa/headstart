import axios from "axios";

// register post request
const registerPost = async (user) => {
  return await axios
    .post("http://localhost:4000/api/signup", user)
    .then((res) => res)
    .catch((err) => err.response);
};

export { registerPost };
