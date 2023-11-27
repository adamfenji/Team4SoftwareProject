const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  type: String,
  goal: String,
});

const Workout = mongoose.model('Workout', workoutSchema);

module.exports = Workout;