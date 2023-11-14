//This is used to create a model of a collection.

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    email: String,
    password: String
  }, {
    versionKey: false
  });

module.exports = mongoose.model(`users`, userSchema);