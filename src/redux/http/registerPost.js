// register post request
const registerPost = (user) => {
  return fetch("http://localhost:4000/api/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res)
    .catch((err) => err.response);
};

export { registerPost };
