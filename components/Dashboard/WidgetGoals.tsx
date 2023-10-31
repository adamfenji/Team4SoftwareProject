import { BiSolidBed } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAppleWhole, FaPersonRunning } from "react-icons/fa6";

import "./WidgetGoals.css";

function WidgetGoals() {
    return (
        <div className="widgetContainer">
            <div className="cardContainer" id="sleepCard">
                <span className="addAction"><AiOutlinePlus/></span>
                <div className="sectionHeader">
                    <BiSolidBed className="sectionLogo" />
                    <h3>Sleep</h3>
                </div>
                <div className="sectionContent">
                    <span>8/8 Hours</span>
                </div>
            </div>

            <div className="cardContainer" id="dietCard">
                <span className="addAction"><AiOutlinePlus/></span>
                <div className="sectionHeader">
                    <FaAppleWhole className="sectionLogo" />
                    <h3>Diet</h3>
                </div>
                <div className="sectionContent">
                    <span>2000/2000 Calories</span>
                </div>
            </div>

            <div className="cardContainer" id="exerciseCard">
                <span className="addAction"><AiOutlinePlus/></span>
                <div className="sectionHeader">
                    <FaPersonRunning className="sectionLogo" />
                    <h3>Exercise</h3>
                </div>
                <div className="sectionContent">
                    <span>1/1 Hours</span>
                </div>
            </div>
        </div>
    );
}

export default WidgetGoals;