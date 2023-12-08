// routes/workouts.js

const express = require('express');
const router = express.Router();
const UserPhyTrack = require('../models/userPhyTrack');
const User = require('../models/usersModel');
const auth = require('../middleware/authorization');

// Endpoint to save workout goals
// Endpoint to save workout goals
router.post('/', auth, async (req, res) => {
  try {
    console.log('POST /api/workouts');
    const { goal } = req.body;
    const userId = req.user._id;

    console.log('User ID:', userId);
    // Find the user
    const user = await User.findById(userId);

    console.log('Found User:', user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }


    // Add the workout goal to the array
    user.phyTrack.workoutGoals.push({ goal });
    await user.save();

    console.log('Saved User:', user);

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
    const user = await User.findById(userId);

    console.log('User:', user);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const workoutGoals = user.phyTrack ? user.phyTrack.workoutGoals : [];
    
    res.json(workoutGoals);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router;


