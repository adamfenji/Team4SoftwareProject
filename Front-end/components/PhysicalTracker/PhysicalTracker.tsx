import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import './PhysicalTracker.css';

interface Workout {
  _id: string;
  type: string;
  goal: string;
}

const PhysicalTracker: FC<{}> = () => {
  const [workoutGoals, setWorkoutGoals] = useState('');
  const [workouts, setWorkouts] = useState<Workout[]>([]);

  useEffect(() => {
    // Fetch workouts from the server when the component mounts
    axios.get('http://localhost:3000/api/workouts')
      .then(response => setWorkouts(response.data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  const handleGoalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWorkoutGoals(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send workout goal to the server
    axios.post('http://localhost:3000/api/workouts', { type: 'YourWorkoutType', goal: workoutGoals })
      .then(response => {
        setWorkouts([...workouts, response.data.workout]);
        setWorkoutGoals('');
      })
      .catch(error => console.error('Error submitting workout goal:', error));
  };

  return (
    <div className='ptContainer'>
      <div className='setGoal'>
        <h2>Workout Target</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor='goal'>Enter Your Workout Goals:</label>
          <textarea
            id='goal'
            name='goal'
            rows={4}
            cols={50}
            placeholder='E.g., Run 5 miles, Do 50 push-ups, etc.'
            value={workoutGoals}
            onChange={handleGoalChange}
          />
          <br />
          <input type='submit' value='Set Goals' />
        </form>
      </div>

      <div className='workouts'>
        <h2>Workouts</h2>
        {/* Display workouts */}
        {workouts.map(workout => (
          <div key={workout._id}>
            <p>Type: {workout.type}</p>
            <p>Goal: {workout.goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhysicalTracker;
