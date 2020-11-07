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

let corsOptions = {
  // middleware
  Origin: "http://localhost:3000/",
  optionsSuccessStatus: 200,
};

mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
});

const app = express(); // app will take instance of express// instead of 'express.get || express.send'
require("./validation/passportjwt")(passport);

app.use(cors(corsOptions)); // allows a
app.use(passport.initialize()); // Initailize
app.use(bodyparser.urlencoded({ extended: false })); // middleware
app.use(bodyparser.json()); // parses any request to JSON from client
app.use("/api", user);

app.get("/api", (req, res) => {
  // home path
  res.send("hello");
});

app.listen(PORT, () => {
  console.log("Server is up!");
});
