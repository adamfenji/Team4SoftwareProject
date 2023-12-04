const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const dailySchema = require("./dailyModel");
const userPhyTrackSchema = require("./userPhyTrack");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  daily: [dailySchema],
  phyTrack: {
    workoutGoals: [
      {
        goal: String,
      },
    ],
  },
}, {
  versionKey: false
});

userSchema.methods.generateAuthToken = function(){
  const token = jwt.sign({
    _id: this._id,
  }, "jwtPrivateKey");
  return token;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
