import SideBar from "./SideBar.tsx";
import ActivityCalendar from "./ActivityCalendar.tsx";
import WidgetGoals from "./WidgetGoals.tsx";

import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboardContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="contentDashboard">
                <ActivityCalendar />
                <WidgetGoals/>
                <div className="chartContainer">
                    <h3>ChartContainer</h3>
                </div>
            </div>

        </div>
        
    );
}

export default Dashboard;