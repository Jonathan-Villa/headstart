const mysql = require("mysql");

// all database credentials will be placed in the .env file for production -> for now it'll stay here
let sqlCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Headstart123-",
  database: "headstart",
});

// connect to local mysql server
sqlCon.connect((err) => {
  if (err) return console.log("Error: " + err.message);

  sqlCon.query("CREATE DATABASE IF NOT EXISTS headstart", (err, res) => {
    if (err) return console.log(err);
  });

  console.log("Succesful connection to headstart database");
});

module.exports = {
  sqlCon
}