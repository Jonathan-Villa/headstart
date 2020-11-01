const { sqlCon } = require("./sqlconnect");

const loginAuth = (req, res, next) => {
  const email = req.body.user.email;
  const password = req.body.user.password;
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  if (email && password) {
    sqlCon.query(sql, [email, password], (err, res) => {
      if (err) {
        return res.send(err);
      }
      next();
    });
  }
};

module.exports={
    loginAuth
}
