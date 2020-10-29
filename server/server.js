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
  Origin: "http://localhost:3000",
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
  password: "Headstart123-", // your password
  database: "headstart", // database that IS created//
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
  res.send("<h1>Server is working</h1>");
});

app.get("/api/signup", cors(), (req, res) =>{

    res.send("<h1>Hello</h1>")
})

// Register Route
app.post("/api/signup", cors(), (req, res) => {
   const{ firstName, lastName, email, username, password } = req.body

   const userData = userTable.insertUser(firstName, lastName, email, username, password)
    
  sqlCon.query('INSERT INTO User SET ?',{firstName: firstName}, (err, result) => {
    if (err) {
      res.redirect("/signup");
      throw console.error();
    }
    console.log(`Successfully redirected the user: ${req.body.username}`);
    res.redirect("/home");
  });
});

app.listen(PORT, () => {
  console.log("Server is up!");
});
