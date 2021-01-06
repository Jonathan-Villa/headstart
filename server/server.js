// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require("express");
const cors = require("cors");
const path = require("path");
var passport = require("passport");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const { dbURL } = require("./Database/dbconnnet");
const user = require("./Validation/user");
const app = express();
const buildPath = path.join(__dirname, "..", "/build");

require("./Validation/passportjwt")(passport);
require("dotenv").config();

let corsOptions = {
  // middleware
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  origin: "*",
  optionsSuccessStatus: 200,
};

mongoose.connect(dbURL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(express.static(buildPath));

app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/api", user);

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.get("/api", (req, res) => {
  res.send("hello");
});

app.get("/api/signup", (req, res) => {
  res.send(`${req.body}`);
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server is up!");
});
