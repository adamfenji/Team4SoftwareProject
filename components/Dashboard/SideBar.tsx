import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { BiLogOutCircle, BiBody } from "react-icons/bi";
import { FaAppleAlt, FaBrain } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


import "./SideBar.css";

function SideBar() {
    return (
        <aside className="sidebar">

            {/* div containing the logo and name of the web application */}
            <div className="logo">
                <img src="..\assets\logo-sample.jpg" alt="logo" />
                <h2>ActivityTracker</h2>
            </div>

            {/* ul containg the sections of the web application.
                    -h4 are the main sections
                    -li are the tabs under that section
            */}
            <ul className="links">
                <h4>Main Menu</h4>
                <li>
                    <LuLayoutDashboard className="icon" />
                    <a href="#">Dashboard</a>
                </li>

                <h4>Trackers</h4>
                <li>
                    <BiBody className="icon" />
                    <a href="#">Physical Tracker</a>
                </li>
                <li>
                    <FaAppleAlt className="icon" />
                    <a href="#">Dietary Tracker</a>
                </li>
                <li>
                    <FaBrain className="icon" />
                    <a href="#">Mental Tracker</a>
                </li>

                <h4>Suggestions</h4>
                <li>
                    <ImStatsDots className="icon" />
                    <a href="#">Analytics</a>
                </li>


                <h4>Settings</h4>
                <li>
                    <CgProfile className="icon" 
                    onClick={() => window.location.href = "/Team4SoftwareProject/Profile"}>/
                    </CgProfile>

                    <a href="#"
                    onClick={() => window.location.href = "/Team4SoftwareProject/Profile"}>Profile
                    </a>
                </li>
                <li>
                    <FiSettings className="icon" />
                    <a href="#">Settings</a>
                </li>
                <h4>Account</h4>
                <li>        
                    <BiLogOutCircle className="icon" 
                    onClick={() => window.location.href = "/Team4SoftwareProject"}>/
                    </BiLogOutCircle>
                    <a href="#"
                     onClick={() => window.location.href = "/Team4SoftwareProject"}>Logout
                    </a>
                </li>
            </ul>
            
        </aside>
    );
}

export default SideBar;