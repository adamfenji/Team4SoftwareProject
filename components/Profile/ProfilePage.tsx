import "./ProfilePage.css"
import { CgProfile } from "react-icons/cg";

const Profile = () => {
    return (
        <div className = 'container'>
            <div className = "pic">
            <li>
            <img src={CgProfile} alt=""/>
            </li>
            </div>
        </div>
    );
};

export default Profile; 