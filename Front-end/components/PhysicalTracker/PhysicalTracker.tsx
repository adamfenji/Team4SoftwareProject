import React, { FC, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import Chart, { TooltipItem, ChartOptions } from 'chart.js/auto'; 
import './PhysicalTracker.css';



interface WorkoutGoal {
  goal: string;
}

interface ActivityData {
  [date: string]: number;
}

const PhysicalTracker: FC<{}> = () => {
  const [workoutGoals, setWorkoutGoals] = useState<string>('');
  const [selectedWorkout, setSelectedWorkout] = useState<string | null>(null);
  const [selectedBodyPart, setSelectedBodyPart] = useState<string | null>(null);
  const [activityData, setActivityData] = useState<ActivityData>({});
  const [inputDate, setInputDate] = useState<string>('');
  const [inputMinutes, setInputMinutes] = useState<number | ''>('');

  const chartRef = useRef<Chart | null>(null);

  const handleGoalChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setWorkoutGoals(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Send workout goal to the server
    axios
      .post('http://localhost:3000/api/workouts', { goal: workoutGoals })
      .then((response) => {
        setWorkoutGoals('');
      })
      .catch((error) => console.error('Error submitting workout goal:', error));
  };

  const handleWorkoutSelection = (workoutType: string) => {
    setSelectedWorkout(workoutType);
    // Reset body part selection when a new workout type is selected
    setSelectedBodyPart(null);
  };

  const handleBodyPartSelection = (bodyPart: string) => {
    setSelectedBodyPart(bodyPart);
  };

  const handleAddActivity = () => {
    if (inputDate && inputMinutes !== '') {
      setActivityData({
        ...activityData,
        [inputDate]: inputMinutes as number,
      });
      setInputDate('');
      setInputMinutes('');
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'date') {
      setInputDate(value);
    } else if (name === 'minutes') {
      setInputMinutes(Number(value) || '');
    }
  };

  useEffect(() => {
    // Destroy the previous Chart instance
    if (chartRef.current) {
      chartRef.current.destroy();
    }
  
    // Sort dates
    const sortedDates = Object.keys(activityData).sort((a, b) => new Date(a).getTime() - new Date(b).getTime());
  
    // Create the new Chart instance with updated data
    const newChart = new Chart('physicalActivityChart', {
      type: 'line',
      data: {
        labels: sortedDates,
        datasets: [
          {
            label: 'Minutes of Physical Activity',
            borderColor: 'rgba(75,192,192,1)',
            backgroundColor: 'rgba(75,192,192,0.4)',
            data: sortedDates.map(date => activityData[date]),
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  
    // Save the newChart reference for future cleanup
    chartRef.current = newChart;
  }, [activityData]);
  
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

          {/* Buttons for Strength */}
          {selectedWorkout === 'Strength' && (
            <div className='BodyPartSelection'>
              <h3>Select a specific area for Strength training:</h3>
              <div className='bodyPartButtons'>
                <button onClick={() => {
                  handleBodyPartSelection('Full Body');
                  window.location.href = 'https://www.youtube.com/watch?v=XxuRSjER3Qk';
                }}>
                  Full Body
                </button>

                <button onClick={() => {
                  handleBodyPartSelection('Abs');
                  window.location.href = '#';
                }}>
                  Abs
                </button>

                <button onClick={() => {
                  handleBodyPartSelection('Arms');
                  window.location.href = '#';
                }}>
                  Arms
                </button>

                <button onClick={() => {
                  handleBodyPartSelection('Legs');
                  window.location.href = '#';
                }}>
                  Legs
                </button>
              </div>

              {selectedBodyPart && (
                <div className='selectedBodyPart'>
                  <p>Selected Body Part: {selectedBodyPart}</p>
                </div>
              )}
            </div>
          )}

          {/* Buttons for Pilates */}
          {selectedWorkout === 'Pilates' && (
            <div className='pilatesBodyPartSelection'>
              <h3>Select a specific area for Pilates training:</h3>
              <div className='bodyPartButtons'>
                <button onClick={() => {
                  handleBodyPartSelection('Full Body');
                  window.location.href = '#';
                }}>
                  Full Body
                </button>
                <button onClick={() => {
                  handleBodyPartSelection('Core');
                  window.location.href = '#';
                }}>
                  Core
                </button>

                <button onClick={() => {
                  handleBodyPartSelection('Lower Body');
                  window.location.href = '#';
                }}>
                  Lower Body
                </button>

                <button onClick={() => {
                  handleBodyPartSelection('Arms');
                  window.location.href = '#';
                }}>
                  Arms
                </button>

              </div>

              {selectedBodyPart && (
                <div className='selectedBodyPart'>
                  <p>Selected Area: {selectedBodyPart}</p>
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

      <div className='progress'>
        <h2>Progress</h2>
        <div className='Graph'>
        <canvas id='physicalActivityChart' />
          <div className='activityInput'>
            <h3>Enter Activity:</h3>
            <label htmlFor='date'>Date:</label>
            <input
              type='date'
              id='date'
              name='date'
              value={inputDate}
              onChange={handleInputChange}
            />
            <label htmlFor='minutes'>Minutes:</label>
            <input
              type='number'
              id='minutes'
              name='minutes'
              value={inputMinutes}
              onChange={handleInputChange}
            />
            <button onClick={handleAddActivity}>Add Activity</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhysicalTracker;
