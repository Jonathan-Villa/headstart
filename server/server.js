// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const bodyparser = require("body-parser"); // allows to parse any incoming request
const mysql = require("mysql");
const userTable = require("./sqlqueries/sqlqueries");
const PORT = 4000;
dotEnv.config({ path: "./.env" });

let corsOptions = {
  // middleware
  Origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
  
};
const app = express(); // app will take instance of express// instead of 'express.get || express.send'
app.use(cors(corsOptions));
app.use(bodyparser.urlencoded({ extended: false })); // middleware
app.use(bodyparser.json()); // parses any request to JSON from client


// all database credentials will be placed in the .env file for production -> for now it'll stay here
let sqlCon = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "headstart" 
});

sqlCon.connect((err) => {
  if (err) return console.log("Error: " + err.message);


  sqlCon.query("CREATE DATABASE IF NOT EXISTS headstart", (err, res) => {
    if (err) return console.log(err);
  });

  console.log("Succesful connection to headstart database");
});

app.get("/api", (req, res) => {
  // home path
  res.send("hello");
});


// Register Route
app.post("/api", cors(), (req, res) => {
  const firstName = req.body.firstName
  const lastName = req.body.lastName
  const email = req.body.emai
  const username = req.body.username
  const password = req.body.password

  const sql = 'INSERT INTO User (firstName, lastName, email, username, password) VALUES (?,?,?,?,?)'

  sqlCon.query(sql, [firstName,lastName,email,username,password],
    (err, result) => {
      if (err) {
        console.log(err.code)
        return res.send("fail to sign up");
      }
      console.log(`Successfully redirected the user: ${req.body.username}`);
      return res.send('Successful signup! ');

    });
});

app.listen(PORT, () => {
  console.log("Server is up!");
});
