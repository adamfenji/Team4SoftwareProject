
const mongoose = require('mongoose');

const userPhyTrackSchema = new mongoose.Schema({
  workoutGoals: [
    {
      goal: String,
    },
  ],
});


module.exports = mongoose.model('UserPhyTrack', userPhyTrackSchema);