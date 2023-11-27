import SideBar from "../Dashboard/SideBar";
import WelcomePage from "./WelcomePage"

import "./Welcome.css";
import React from 'react';

function Welcome () {
    return (
        <div className="welcomeContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="welcomeDashboard">
                <WelcomePage />
            </div>
        </div>
    );
}

export default Welcome;