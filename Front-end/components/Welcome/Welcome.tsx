import SideBar from "../Dashboard/SideBar";
import WelcomePage from "./WelcomePage"
import React from "react";
import "./Welcome.css";


function Welcome () {
    return (
        <div className="welcomeContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
        </div>
    );
}

export default Welcome;