const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const dailySchema = require("./dailyModel");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
<<<<<<< HEAD
  daily: [dailySchema]
=======
  workoutGoals: [userPhyTrack],
>>>>>>> 2ef612528a5548ccf35da01bef6d6b360f25c9a5
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