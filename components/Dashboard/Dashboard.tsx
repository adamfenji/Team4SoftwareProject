import SideBar from "./SideBar.tsx";
import ActivityCalendar from "./ActivityCalendar.tsx";

import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboardContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="contentDashboard">
                <ActivityCalendar />
            </div>

        </div>
    );
}

export default Dashboard;