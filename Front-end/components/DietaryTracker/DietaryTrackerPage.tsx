import SideBar from "../Dashboard/SideBar";
import WidgetGoals from "../Dashboard/WidgetGoals";
import DietaryTracker from "./DietaryTracker"
import React from "react";
import "./DietaryTrackerPage.css";
import "../Dashboard/SideBar.css"
import "../Dashboard/WidgetGoals.css";

function DietaryTrackerPage() {
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
export default DietaryTrackerPage;