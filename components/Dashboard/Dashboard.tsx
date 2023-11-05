import SideBar from "./SideBar.tsx";
import ActivityCalendar from "./ActivityCalendar.tsx";
import WidgetGoals from "./WidgetGoals.tsx";
import 'animate.css';

import "./Dashboard.css";

function Dashboard() {
    return (
        <div className="dashboardContainer">
            <div className="sidebarDashboard animate__animated animate__slideInLeft animate__delay-1s">
                <SideBar />
            </div>
            <div className="contentDashboard">
                <ActivityCalendar />
                <WidgetGoals/>
                <div className="chartContainer">
                    {/* <h3>ChartContainer</h3> */}
                </div>
            </div>

        </div>
        
    );
}

export default Dashboard;