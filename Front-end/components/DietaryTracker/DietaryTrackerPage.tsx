import SideBar from "../Dashboard/SideBar";
import DietaryTracker from "./DietaryTracker"
import React from "react";
import "./DietaryTrackerPage.css";
import "./Dashboard/SideBar.css"

function Profile() {
    return (
        <div className="dietaryTrackerContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="dietaryTracker">
                <DietaryTracker />
            </div>

        </div>

    );
}
export default Profile;