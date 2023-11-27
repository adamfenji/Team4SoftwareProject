import React, { FC, useState } from 'react';
import axios from 'axios';
import './PhysicalTracker.css';

interface WorkoutGoal {
  goal: string;
}

const PhysicalTracker: FC<{}> = () => {
  const [workoutGoals, setWorkoutGoals] = useState<string>('');
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);

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
    // Reset body part selection when a new workout type is selected
    setSelectedBodyPart(null);
  };

  const handleBodyPartSelection = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
    // Fetch exercises based on the selected body part (you can implement this logic)
    // Example: axios.get(`http://localhost:3000/api/exercises?bodyPart=${bodyPart}`)
    //   .then(response => {
    //     // Handle the response and update the UI with exercises
    //   })
    //   .catch(error => console.error('Error fetching exercises:', error));
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

      <br />

      <div className='workouts'>
        <h2>Workouts</h2>
        <div className="WorkoutsType">
          <div>
            <div className='workoutTitle'>
              <h3>Select a workout type:</h3>
            </div>
            <div className='workoutTypeButtons'>
              <button onClick={() => handleWorkoutSelection('Pilates')}>Pilates</button>
              <button onClick={() => handleWorkoutSelection('Yoga')}>Yoga</button>
              <button onClick={() => handleWorkoutSelection('Mobility')}>Mobility</button>
              <button onClick={() => handleWorkoutSelection('Stretch')}>Stretch</button>
              <button onClick={() => handleWorkoutSelection('Dance')}>Dance</button>

              <button onClick={() => handleWorkoutSelection('Strength')}>Strength</button>
              <button onClick={() => handleWorkoutSelection('Cardio')}>Cardio</button>
              <button onClick={() => handleWorkoutSelection('HIIT')}>HIIT</button>
              <button onClick={() => handleWorkoutSelection('Running')}>Running</button>
              <button onClick={() => handleWorkoutSelection('No-Equipment')}>No-Equipment</button>

              <button onClick={() => handleWorkoutSelection('Self-Defense')}>Self-Defense</button>

            </div>
          </div>

          {selectedWorkout === 'Strength' && (
            <div className='strengthBodyPartSelection'>
              <h3>Select a specific area for Strength training:</h3>
              <div className='bodyPartButtons'>
                <button onClick={() => {
                  handleBodyPartSelection('Upper Body');
                  window.location.href = 'https://www.youtube.com/watch?v=XxuRSjER3Qk';
                }}>
                  Full Body
                </button>
                <button onClick={() => handleBodyPartSelection('Lower Body')}>Lower Body</button>

              </div>

              {selectedBodyPart && (
                <div className='selectedBodyPart'>
                  <p>Selected Body Part: {selectedBodyPart}</p>
                </div>
              )}
            </div>
          )}
        </div>
        {selectedWorkout && (
          <div className='selectedWorkout'>
            <p>Selected Workout: {selectedWorkout}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PhysicalTracker;
