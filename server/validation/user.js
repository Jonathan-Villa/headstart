const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { admin, student } = require("./roleAuthorization");
const { User, TimeSheet } = require("../Database/dbconnnet");

router.post("/signup", async (req, res) => {
  const { firstName, lastName, email, username, title, password } = req.body;

  const newUser = await User.findOne({
    $or: [{ email: email }, { username: username }],
  }).then(async (user) => {
    let errors = {};

    if (user) {
      errors.type = "error";
      if (user.email === email) {
        errors.email = email;
        errors.message = "Email is already registered!";
      }
      if (user.username === username) {
        errors.username = username;
        errors.message += "Username is already registered!";
      }
      return res.status(400).json(errors);
    }
    return await User.create({
      firstName,
      lastName,
      email,
      username,
      title,
      password,
    });
  });

  if (newUser) {
    return await bcrypt.genSalt(10, (err, salt) => {
      // salt, hash the password
      if (err) {
        return err;
      }
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) {
          return err;
        }
        newUser.password = hash;
        return newUser.save().then((user) => {
          res.json(user);
        });
      });
    });
  }else{
    res.status(400).json({error:"error", message:"An error has occured with registering!"})
  }
});

router.post("/login", async (req, res) => {
  // request the body from the post request
  const { email, password } = req.body;

  const user = await User.findOne({ email: email }).then((user) => {
    if (!user) {
      return res
        .status(400)
        .json({ error: "error", message: "Email is not registered" });
    }
    return user;
  });

  const payLoad = await bcrypt
    .compare(password, user.password)
    .then((isUserMatch) => {
      // return if password does not match email
      if (!isUserMatch) {
        return res.status(400).json({
          type: "error password",
          message: "Incorrect password entered!",
        });
      }
      return {
        id: user.id,
        username: user.username,
        role: user.title,
      };
    });

  if (payLoad) {
    await jwt.sign(
      payLoad,
      "secretIDHeadStart",
      { expiresIn: 3600 },
      (err, token) => {
        if (err) {
          return res.status(400).json({
            error: "error",
            message: "error has occured with issuing a token",
          });
        }
        if (payLoad.role === "admin") {
          return res.json({
            success: true,
            token: `Bearer ${token}`,
            user: admin,
            id: user.id,
          });
        }
        return res.json({
          success: true,
          token: `Bearer ${token}`,
          user: student,
          id: user.id,
        });
      }
    );
  }
});

router.post("/quicklog", async (req, res) => {
  const { id } = req.body;
  console.log(req.body)
  const {
    grant,
    date,
    site,
    workPerformed,
    timeIn,
    timeOut,
    preceptorSignature,
    dateOfSign,
  } = req.body;

  const user = await User.findById(id);

  const timeSheet = await TimeSheet.create({
    grant,
    date,
    site,
    workPerformed,
    timeIn,
    timeOut,
    preceptorSignature,
    dateOfSign,
    user,
  });
  await timeSheet.save();

  return User.findByIdAndUpdate(id).then((user) => {
    if (user) {
      user.timesheet.push(timeSheet);
      user.save();
      res.status(200).json(user.timesheet);
    }
  });
});

router.get("/timesheet", async (req, res) => {
  const timeSheetData = await TimeSheet.find({});
  res.status(200).json(timeSheetData);
});

router.get("/request-user-logs", async (req, res) => {
  const userLogs = await TimeSheet.find({});

  res.status(200).json(userLogs);
});

module.exports = router;
