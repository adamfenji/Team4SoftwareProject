import React from "react";

function PhysicalTracker(){
    return(
        <>

        {/* Page still in progress */}
        <form>
            <label>Activity type</label>
            <input type="text"/><br/>

            <label>Workout time</label>
            <input type="time"/><br/>
            <label>Active Calories</label>
            <input type="number"/><br/>
            <label>Total Calories</label>
            <input type="number"/><br/>
            <label>Average Heart Rate</label>
            <input type="number"/><br/>
        </form>
        </>
    );
}

export default PhysicalTracker;