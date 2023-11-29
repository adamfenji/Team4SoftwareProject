import SideBar from "./SideBar.tsx";
import ActivityCalendar from "./ActivityCalendar.tsx";
import WidgetGoals from "./WidgetGoals.tsx";
import 'animate.css';
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboardContainer">
      <div className="sidebarDashboard">
        <SideBar />
      </div>
      <div className="contentDashboard">
        <ActivityCalendar />
        <div className="widgetContainer">
          <WidgetGoals goalType="sleep" />
          <WidgetGoals goalType="diet" />
          <WidgetGoals goalType= "exercise" />
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
