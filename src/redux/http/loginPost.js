import axios from "axios";

const loginPost = (user) => {
  return axios
    .post("http://localhost:4000/api/login", user)
    .then((res) => res)
    .catch((err) => err);
};

export default loginPost;
