import SideBar from "../Dashboard/SideBar";
import MentalTracker from "./MentalTracker"
import React from "react";
import "./MentalTrackerPage.css";
import "./Dashboard/SideBar.css"

function Profile() {
    return (
        <div className="mentalTrackerContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="mentalTracker">
                <MentalTracker />
            </div>

        </div>

    );
}
export default Profile;