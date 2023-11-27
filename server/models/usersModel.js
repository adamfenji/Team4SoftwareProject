const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const dailySchema = require("./dailyModel");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  daily: [dailySchema]
}, {
  versionKey: false
});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({
    _id: this._id,
  }, "jwtPrivateKey")
  return token;
};

module.exports = mongoose.model(`users`, userSchema);