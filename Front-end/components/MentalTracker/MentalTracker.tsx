// MentalTracker.js
import React, { FC } from 'react';
import "./MentalTracker.css";
import WidgetGoals from "../Dashboard/WidgetGoals"

interface MentalTrackerProps {
  // Add sleep as a prop
}

const Mentaltracker: FC<MentalTrackerProps> = () => {
  // Assuming you have a way to get the sleep data, maybe from an API or another state
  const sleepData = 8; // Replace with actual sleep data

  return (
    <div className='mtContainer'>
      <h2>Mental Tracker</h2>
      <div className='currentGoal'>
        <h3>Your Current Goal:</h3>
        {/* Pass sleep data to Mentaltracker */}
        <WidgetGoals goalType="sleep" />
      </div>
      <div className='meditations'>
        <h3>Meditations:</h3>
        <form action="https://youtu.be/Bl8YfvXBL3E?si=RNl6-byuATWPS8RX">
        <input type="submit" name="Guided Sleep Meditation" value="Guided Sleep Meditation"/>
        </form>
      </div>
    </div>
  );
};

export default Mentaltracker;
