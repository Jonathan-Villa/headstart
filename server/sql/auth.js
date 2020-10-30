const { sqlCon } = require("./sqlconnect");

const authSignUp = (req, res, next) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

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
