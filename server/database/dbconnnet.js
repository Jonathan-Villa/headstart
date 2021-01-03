const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv").config();

const userSchema = new Schema({
  email: { type: String, unique: true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique: true },
  title: { type: String, required: true },
  password: { type: String },
  timesheet: [{type: mongoose.Schema.Types.ObjectId, ref: 'timesheet'}]
});

const timesheetSchema = new Schema({
  grant: { type: String, required: true },
  date: { type: String },
  site: { type: String, required: true },
  workPerformed: { type: String, required: true },
  timeIn: { type: String, required: true },
  timeOut: { type: String, required: true },
  preceptorSignature: { type: String, required: true },
  dateOfSign: { type: String, required: true },
  user:{type: mongoose.Schema.Types.ObjectId, ref: 'users'}
});



const dbURL = process.env.DATEBASE_URL;
const User = new mongoose.model(process.env.DB_USER_COLLECTION, userSchema);
const TimeSheet = new mongoose.model(process.env.DB_TIMESHEET_COLLECTION, timesheetSchema);

module.exports = {
  dbURL,
  User,
  TimeSheet,
};
