// DietaryTracker.js
import React, { FC } from 'react';
import "./DietaryTracker.css";
import WidgetGoals from "../Dashboard/WidgetGoals"

interface DietaryTrackerProps {
  // Add sleep as a prop
}

const Dietarytracker: FC<DietaryTrackerProps> = () => {
  // Assuming you have a way to get the sleep data, maybe from an API or another state
  const dietData = 8; // Replace with actual sleep data

  return (
    <div className='dtContainer'>
      <h2>Dietary Tracker</h2>
      <div className='currentGoal'>
        <h3>Your Current Goal:</h3>
        {/* Pass sleep data to Mentaltracker */}
        <WidgetGoals goalType="diet" />
      </div>
      <div className='mealPrepping'>
        <h3>Meal Prepping Videos:</h3>
        <form action="https://youtu.be/AYXfaVD5o40?si=JptY1clO-CTAY0RV">
        <input type="submit" name="Cheap and Healthy Meal Prepping" value="Cheap and Healthy Meal Prepping"/>
        </form>

      </div>
    </div>
  );
};

export default Dietarytracker;