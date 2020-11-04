const mongoose = require('mongoose');
const mongooseLocalPassport = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/headstartDB", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

const userSchema = new Schema({ 
  email: { type: String, unique:true },
  firstName: { type: String },
  lastName: { type: String },
  username: { type: String, unique:true },
  password: { type: String },
});


userSchema.plugin(mongooseLocalPassport); // hash and salt
userSchema.plugin(findOrCreate);

exports.User = new mongoose.model("Users", userSchema);






