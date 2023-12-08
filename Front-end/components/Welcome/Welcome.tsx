import SideBar from "../Dashboard/SideBar";
import WelcomePage from "./WelcomePage"

import "./Welcome.css";

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