const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const passport = require("passport");
const { admin, student } = require("./roleAuthorization");
const { User, TimeSheet } = require("../Database/dbconnnet");


router.post("/signup",  (req, res) => {
  const { firstName, lastName, email, username, title, password } = req.body;
   User.findOne({ email: email }).then(async (user) => {
    // check to see if email is already in use
    console.log(user);
    if (user) {
      res.status(400).send({
        type: "error",
        email: user.email,
        message: "Email is already registered",
      });
    } else {
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        username,
        title,
        password,
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
  const { email, password } = req.body;


  User.findOne({ email: email }).then((user) => {
    // "findOne" queries the DB to find email
    
    if (!user){
      res
        .status(400)
        .json({ error: "error", message: "Email is not registered" });
    }

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
              return res.json(
                "Wrong password. Try again or click Forgot password to reset it"
              );
            } else {
              if (payLoad.role === "admin") {
                return res.json({
                  success: true,
                  token: `Bearer ${token}`,
                  user: admin,
                  id: user.id
                });
              }
              return res.json({
                success: true,
                token: `Bearer ${token}`,
                user: student,
                id: user.id
              });
            }
          }
        );
      } else {
        return res.status(400).json({message:"Incorrect Password!"});
      }
    });
  })
});

router.post("/quicklog", async (req, res) => {
  const { id } = req.body;
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
    const timeSheetData = await TimeSheet.find({})
 

    res.status(200).json(timeSheetData)
});

module.exports = router;
