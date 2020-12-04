const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { admin, student } = require("./roleAuthorization");
const { User } = require("../database/dbconnnet");

router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    // check to see if email is already in use
    console.log(user);
    if (user) {
      res.status(400).send({
        type: "error",
        email: user.email,
        message: "Email is already registered",
      });
    } else {
      const newUser = new User({
        // register user
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        title: req.body.title,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        // salt, hash the password
        if (err) {
          console.log(err);
        } else {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) {
              console.log(err);
            } else {
              newUser.password = hash;
              newUser.save().then((user) => {
                res.json(user);
              });
            }
          });
        }
      });
    }
  });
});

router.post("/login", (req, res) => {
  // request the body from the post request
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email }).then((user) => {
    // "findOne" queries the DB to find email
    if (!user) return res.status(400).json({error: "error" , message: "Email is not registered"});

    bcrypt.compare(password, user.password).then((isUserMatch) => {
      // validates password
      if (isUserMatch) {
        const payLoad = {
          id: user.id,
          username: user.username,
          role: user.title,
        };

        // user is validated // token expires in 1 hr
        jwt.sign(
          payLoad,
          "secretIDHeadStart",
          { expiresIn: 3600 },
          (err, token) => {
            if (err) {
              res.json(
                "Wrong password. Try again or click Forgot password to reset it"
              );
            } else {
              if (payLoad.role === "admin") {
                res.json({
                  success: true,
                  token: `Bearer ${token}`,
                  user: admin,
                });
              }
              res.json({
                success: true,
                token: `Bearer ${token}`,
                user: student,
              });
            }
          }
        );
      } else {
        return res.status(400).json("Email or Password was incorrect!");
      }
    });
  });
});

router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    return res.json({
      id: req.user.id,
      username: req.user.username,
      email: req.user.email,
    });
  }
);

module.exports = router;
