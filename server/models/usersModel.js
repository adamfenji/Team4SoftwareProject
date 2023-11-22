//This is used to create a model of a collection.
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String
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