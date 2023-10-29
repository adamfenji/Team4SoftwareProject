import SideBar from "../Dashboard/SideBar";
import ProfilePage from "./ProfilePage"

import "./Profile.css";

function Profile() {
    return (
        <div className="profileContainer">
            <div className="sidebarDashboard">
                <SideBar />
            </div>
            <div className="profileDashboard">
                <ProfilePage />
            </div>

        </div>

    );
}
export default Profile;