// To run the server without automatic updates use --- node server.js
// To run the server with automatic updates use --- nodemon server.js
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const bodyparser = require("body-parser"); // allows to parse any incoming request
const mongoose = require("mongoose");
const { dbURL } = require("./Database/dbconnnet");
const user = require("./Validation/user");
const app = express();
const http = require('http').createServer(app)
const io = require('socket.io')(http)
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
  useFindAndModify: false,
});

 // app will take instance of express// instead of 'express.get || express.send'
require("./validation/passportjwt")(passport);

app.use(cors(corsOptions));
app.use(passport.initialize()); // Initailize
app.use(bodyparser.urlencoded({ extended: false })); // middleware
app.use(bodyparser.json()); // parses any request to JSON from client
app.use("/api", user);

io.on('connect', (socket)=>{
  socket.on("/signup", ({name, room})=> {
    console.log(room)
  })


})

app.get("/api", (req, res) => {
  // home path
  res.send("hello");
});

app.get("/api/login", (req, res) => {
  res.send(`${req.body}`);
});


http.listen(PORT, () => {
  console.log("Server is up!");
});



io.on('connection', (socket)=> {
  console.log("connected")
})