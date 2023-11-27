
const mongoose = require('mongoose');

const userPhyTrack = new mongoose.Schema({
  workoutGoals: [
    {
      goal: String,
    },
  ],
});

const UserPhyTrack = mongoose.model('UserPhyTrack', userPhyTrack);

module.exports = UserPhyTrack;