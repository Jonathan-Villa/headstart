
// post request for user login
const loginPost = (user) => {
  console.log()
  return fetch(
    "api/login",
    { method: "POST" ,   headers: {
      'Content-Type': 'application/json',
    }, body:JSON.stringify(user)}
  ).then((res) => res);
};

export { loginPost };
