// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require("express");
const cors = require("cors");
const dotEnv = require("dotenv");
const passport = require("passport");
const bodyparser = require("body-parser"); // allows to parse any incoming request
const session = require("express-session");

const { User } = require("./database/dbconnnet");
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

app.use(
  session({
    secret: "HeadStartSecretPreProduction",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize()); // Initailize
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

app.get("/api", (req, res) => {
  // home path
  res.send("hello");
});

// Register Route
app.post("/api/signup", cors(), (req, res) => {
  const newUser = new User({
    email: req.body.user.email,
    firstName: req.body.user.firstName,
    lastName: req.body.user.lastName,
    username: req.body.user.username,
  });

  User.register(newUser, req.body.user.password, (err) => {
    if (err) {
      return res.send("ERROR: User Registered")
    }
  });
  return res.send("Successful");
});

app.post("/api/login", cors(), (req, res) => {
  res.send("Succesful");
});

app.listen(PORT, () => {
  console.log("Server is up!");
});
