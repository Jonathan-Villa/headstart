// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyparser = require("body-parser"); // allows to parse any incoming request
const mongoose = require("mongoose");
const { dbURL } = require("./database/dbconnnet");
const user = require("./validation/user");
const PORT = 4000;
require('dotenv').config();

let corsOptions = {
  // middleware
  Origin: process.env.PORT ,
  optionsSuccessStatus: 200,
};

mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const app = express(); // app will take instance of express// instead of 'express.get || express.send'
require("./validation/passportjwt")(passport);

app.use(cors(corsOptions));
app.use(passport.initialize()); // Initailize
app.use(bodyparser.urlencoded({ extended: false })); // middleware
app.use(bodyparser.json()); // parses any request to JSON from client
app.use("/api", user);

app.get("/api", (req, res) => {
  // home path
  res.send("hello");
});

app.get("/api/login", (req, res) => {
  res.send(`${req.body}`);
});

app.listen(PORT, () => {
  console.log("Server is up!");
});
