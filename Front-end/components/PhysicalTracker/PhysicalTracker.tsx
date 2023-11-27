import React, { FC, useState } from 'react';
import axios from 'axios';
import './PhysicalTracker.css';

interface WorkoutGoal {
  goal: string;
}

const PhysicalTracker: FC<{}> = () => {
  const [workoutGoals, setWorkoutGoals] = useState<string>('');
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);

  const handleGoalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWorkoutGoals(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send workout goal to the server
    axios.post('http://localhost:3000/api/workouts', { goal: workoutGoals })
      .then(response => {
        setWorkoutGoals('');
      })
      .catch(error => console.error('Error submitting workout goal:', error));
  };

  const handleWorkoutSelection = (workoutType: string) => {
    setSelectedWorkout(workoutType);
    // You can navigate to the website associated with the workout type here
    // Example: window.location.href = `https://example.com/${workoutType}`;
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
        <div>
          <p>Select a workout type:</p>
          <button onClick={() => handleWorkoutSelection('Aerobic')}>Aerobic</button>
          <button onClick={() => handleWorkoutSelection('Pilates')}>Pilates</button>
          <button onClick={() => handleWorkoutSelection('Yoga')}>Yoga</button>
          <button onClick={() => handleWorkoutSelection('pilates')}>Pilates</button>
          {/* Add more buttons for other workout types */}
        </div>
        {selectedWorkout && (
          <div>
            <p>Selected Workout: {selectedWorkout}</p>
            {/* You can add additional content or link to a website here */}
          </div>
        )}
      </div>
    </div>
  );
};

export default PhysicalTracker;
