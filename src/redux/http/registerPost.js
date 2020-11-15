import axios from "axios";

const registerPost = (user) => {
  return axios
    .post("http://localhost:4000/api/signup", user)
    .then((res) => res)
    .catch((err) => err);
};

export default registerPost;
