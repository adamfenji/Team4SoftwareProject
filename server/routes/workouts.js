const express = require("express");
const router = express.Router();
const Workout = require("../models/userPhyTrack");
const User = require("../models/usersModel");

// Endpoint to save workout goals
router.post('/', async (req, res) => {
  const { type, goal } = req.body;

  // Get the user ID from the authenticated token
  const userId = req.user._id;

  // Create a new workout
  const workout = new Workout({ type, goal });

  // Find the user and add the workout goal to their array
  await User.findByIdAndUpdate(
    userId,
    { $push: { workoutGoals: workout } },
    { new: true }
  );

  res.json({ success: true, workout });
});

// Endpoint to get all workouts
router.get('/', async (req, res) => {
  const userId = req.user._id;
  const user = await User.findById(userId).populate('workoutGoals');

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  res.json(user.workoutGoals);
});

module.exports = router;
