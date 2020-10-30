// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const bodyparser = require("body-parser"); // allows to parse any incoming request
const sql = require("./sql/sqlconnect");
const {authSignUp} = require('./sql/auth')
const PORT = 4000;
dotEnv.config({ path: "./.env" });

let corsOptions = {
  // middleware
  Origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,

};
const app = express(); // app will take instance of express// instead of 'express.get || express.send'

app.use(cors(corsOptions)); // allows a
app.use(bodyparser.urlencoded({ extended: false })); // middleware
app.use(bodyparser.json()); // parses any request to JSON from client

app.get("/api", (req, res) => {
  // home path
  res.send("hello");
});

// Register Route
app.post("/api/signup", cors(), authSignUp, (req, res) => {
  console.log(`Succesfully signed up username:${req.body.user.username}`)
  res.send("Successful");
});

app.listen(PORT, () => {
  console.log("Server is up!");
});
