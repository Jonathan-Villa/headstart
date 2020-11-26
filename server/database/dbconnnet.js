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



const dbURL = process.env.DATEBASE_URL;
const User = new mongoose.model("users", userSchema);

module.exports = {
  dbURL,
  User,
};
