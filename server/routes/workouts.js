// routes/workouts.js

const express = require('express');
const router = express.Router();
const UserPhyTrack = require('../models/userPhyTrack');
const User = require('../models/usersModel');
const auth = require('../middleware/authorization');

// Endpoint to save workout goals
router.post('/', auth, async (req, res) => {
  try {
    const { goal } = req.body;
    const userId = req.user._id;

    // Find the user and add the workout goal to their array
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Assuming 'phyTrack.workoutGoals' is the correct path in your User model
    user.phyTrack.workoutGoals.push({ goal });
    await user.save();

    res.json({ success: true, workout: { goal } });
  } catch (error) {
    console.error('Error saving workout goal:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get all workouts
router.get('/', auth, async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select('phyTrack.workoutGoals');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(user.phyTrack.workoutGoals);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


