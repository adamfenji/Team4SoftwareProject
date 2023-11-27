const mongoose = require("mongoose");

const dailySchema = new mongoose.Schema({
    date: String,
    diet: Number,
    sleep: Number,
    exercise: Number
}, {
    versionKey: false
});

module.exports = dailySchema;