import "./ProfilePage.css"
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <div className = 'profilecontainer'>
            <div className = 'header'>
            <CgProfile className="pfp"></CgProfile>
            </div>
            
            <div className = 'profileheader'>
                <h1>Profile</h1>
            </div>
            
        </div>
    );
};

export default Profile; 