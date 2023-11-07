//This is used to create a model of a collection.

const mongoose = require("mongoose");

const testingCOllectionSchema = new mongoose.Schema({
    _id: String,
    name: String,
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model(`users`, testingCOllectionSchema);