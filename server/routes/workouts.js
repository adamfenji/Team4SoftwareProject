// phyTrackRoutes.js

const express = require('express');
const router = express.Router();
const UserPhyTrack = require('../models/userPhyTrack');
const User = require('../models/usersModel');

// Endpoint to save workout goals
router.post('/', async (req, res) => {
  const { goal } = req.body;

  // Get the user ID from the authenticated token
  const userId = req.user._id;

  // Find the user and add the workout goal to their array
  await User.findByIdAndUpdate(
    userId,
    { $push: { 'phyTrack.workoutGoals': { goal } } },
    { new: true }
  );

  res.json({ success: true, workout: { goal } });
});

// Endpoint to get all workouts
router.get('/', async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId).select('phyTrack.workoutGoals');

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user.phyTrack.workoutGoals);
});

module.exports = router;

