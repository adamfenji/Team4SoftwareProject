import React, { FC } from 'react';
import "./MentalTracker.css";

const Mentaltracker: FC<{}> = () => {

  return(
    <div className='mtContainer'>
        <h2>Mental Tracker</h2>
        <div className='currentGoal'>
        <h3>Your Current Goal:</h3>
        </div>
          <div className='currentProgress'>
            <h3>Your Progress:</h3>
          </div>
    </div>
   

  ); 
};

export default Mentaltracker;