const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const { User } = require("../database/dbconnnet");

router.post("/signup", (req, res) => {
  console.log(req.body);

  User.findOne({ email: req.body.email }).then((user) => {
    // check to see if email is already in use
    if (user) {
      res.status(400).json({ email: "Email is already registered" });
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

  console.log(req.body);

  User.findOne({ email: email }).then((user) => {
    // "findOne" queries the DB to find email
    if (!user) {
      // return 404 if not found
      return res.status(404).json();
    }

    bcrypt.compare(password, user.password).then((isUserMatch) => {
      // validates password
      if (isUserMatch) {
        const payLoad = {
          id: user.id,
          username: user.username,
        };

        // user is validated // token expires in 1 hr
        jwt.sign(
          payLoad,
          "secretIDHeadStart",
          { expiresIn: 3600 },
          (err, token) => {
            if (err) {
              console.log(err);
            } else {
              res.json({ success: true, token: `Bearer ${token}` });
            }
          }
        );
      } else {
        return res.status(400).json();
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
