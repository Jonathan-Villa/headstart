const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");

const { User } = require("../database/dbconnnet");

router.post("/signup", (req, res) => {
  console.log(req.body);
  // check if any fields are empty

  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({ email: "Email is already registered" });
    } else {
      const newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
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
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      return res.status(404).json();
    }

    bcrypt.compare(password, user.password).then((isUserMatch) => {
      if (isUserMatch) {
        const payLoad = {
          id: user.id,
          username: user.username,
        };
        jwt.sign(
          payLoad,
          "secretIDHeadStart",
          { expiresIn: 2400 },
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
  "/me",
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
