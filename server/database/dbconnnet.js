const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require('dotenv').config();

const userSchema = new Schema({
  email: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  title: { type: String, required: true },
  password: { type: String },
});


const userSchema = new Schema({
  email: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  title: { type: String, required: true },
  password: { type: String },
});

const timeSheetSchema = new Schema({
  date: { type: Date, unique: true, required = true },
  firstName: { type: String },
  lastName: { type: String, required = true},
  weeklyDatePeriod: { type: String, unique: true, required: true},
  approvedBy: { type: String, required: true },
  Grant: { type: String, required: true },
});

const dbURL = process.env.DATEBASE_URL;
const User = new mongoose.model("users", userSchema);
const Timesheet = new mongoose.model("timeSheet", timeSheetSchema)

module.exports = {
  dbURL,
  User,
  TimeSheet
};
