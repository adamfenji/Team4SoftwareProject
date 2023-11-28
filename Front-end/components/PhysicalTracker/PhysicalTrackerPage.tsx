import SideBar from "../Dashboard/SideBar";
import PhysicalTracker from "./PhysicalTracker"
import React from "react";
import "./PhysicalTrackerPage.css";
import "../Dashboard/SideBar.css"

function PhysicalTrackerPage() {
    return (
        <div className="physicalTrackerContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="physicalTracker">
                <PhysicalTracker />
            </div>

        </div>

    );
}
export default PhysicalTrackerPage;