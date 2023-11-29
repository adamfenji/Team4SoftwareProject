import SideBar from "../Dashboard/SideBar";
import WidgetGoals from "../Dashboard/WidgetGoals";
import MentalTracker from "./MentalTracker"
import React from "react";
import "./MentalTrackerPage.css";
import "../Dashboard/SideBar.css"
import "../Dashboard/WidgetGoals.css";

function MentalTrackerPage() {
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
export default MentalTrackerPage;