import { LuLayoutDashboard } from "react-icons/lu";
import { FiSettings } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { BiLogOutCircle, BiBody } from "react-icons/bi";
import { FaAppleAlt, FaBrain } from "react-icons/fa";
import { CgMoreVertical, CgProfile } from "react-icons/cg";

import "./SideBar.css";

import { useState } from "react";

function SideBar() {

    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="sidebar animate__animated animate__slideInLeft animate__delay-1s">
            {expanded ? (
                <>
                    <CgMoreVertical
                        className="actionButton"
                        onClick={() => setExpanded(false)}
                    />

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
                            <LuLayoutDashboard className="icon"
                                onClick={() => window.location.href = "/Team4SoftwareProject/dashboard"}>/
                            </LuLayoutDashboard>
                            <a href="#"
                                onClick={() => window.location.href = "/Team4SoftwareProject/dashboard"}>Dashboard</a>
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

                        <h4>Account</h4>
                        <li>
                            <CgProfile className="icon"
                                onClick={() => window.location.href = "/Team4SoftwareProject/profile"}>/
                            </CgProfile>
                            <a href="#"
                                onClick={() => window.location.href = "/Team4SoftwareProject/profile"}>Profile
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
                </>
            ) : (
                <>
                    <CgMoreVertical
                        className="actionButton"
                        onClick={() => setExpanded(true)}
                    /><br />

                    {/* div containing the logo and name of the web application */}
                    <div className="logo-extanded">
                        <img src="..\assets\logo-sample.jpg" alt="logo" />
                    </div>

                    {/* ul containg the sections of the web application.
                    -h4 are the main sections
                    -li are the tabs under that section
            */}
                    <ul className="links-extanded">
                        <li>
                            <a href="#"
                                onClick={() => window.location.href = "/Team4SoftwareProject/dashboard"}>
                                    <LuLayoutDashboard className="icon"
                                onClick={() => window.location.href = "/Team4SoftwareProject/dashboard"}>/
                            </LuLayoutDashboard>
                                </a>
                        </li>
                        <li>

                            <a href="#"><BiBody className="icon" /></a>
                        </li>
                        <li>

                            <a href="#"><FaAppleAlt className="icon" /></a>
                        </li>
                        <li>

                            <a href="#"><FaBrain className="icon" /></a>
                        </li>
                        <li>

                            <a href="#"><ImStatsDots className="icon" /></a>
                        </li>
                        <li>
                            <a href="#"
                                onClick={() => window.location.href = "/Team4SoftwareProject/profile"}>
                                    <CgProfile className="icon"
                                onClick={() => window.location.href = "/Team4SoftwareProject/profile"}>
                            </CgProfile>
                            </a>
                        </li>
                        <li>
                            <a href="#"><FiSettings className="icon" /></a>
                        </li>
                        <li>
                            <a href="#"
                                onClick={() => window.location.href = "/Team4SoftwareProject"}>
                                    <BiLogOutCircle className="icon"
                                onClick={() => window.location.href = "/Team4SoftwareProject"}>
                            </BiLogOutCircle>
                            </a>
                        </li>
                    </ul>

                </>
            )}
        </aside>
    );
}

export default SideBar;