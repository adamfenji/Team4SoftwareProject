import SideBar from "../Dashboard/SideBar";
import "./SideBar.css";
import PhysicalTracker from "./PhysicalTracker"
import React from "react";

function Profile() {
    return (
        <div className="profileContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="profileDashboard">
                <PhysicalTracker />
            </div>

        </div>

    );
}
export default Profile;