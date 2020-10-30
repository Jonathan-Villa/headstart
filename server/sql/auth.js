const { sqlCon } = require("./sqlconnect");

const authSignUp = (req, res, next) => {
  const firstName = req.body.user.firstName;
  const lastName = req.body.user.lastName;
  const email = req.body.user.email;
  const username = req.body.user.username;
  const password = req.body.user.password;

  const sql ="INSERT INTO User (firstName, lastName, email, username, password)VALUES (?,?,?,?,?)";
  sqlCon.query(
    sql,
    [firstName, lastName, email, username, password],
    (err, result) => {
      if (err) {
        return res.send("Failed to sign-up");
      }
      next();
    }
  );
};

module.exports = {
  authSignUp,
};
