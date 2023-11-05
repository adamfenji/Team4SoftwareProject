import { useState } from "react";
import { BiSolidBed } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAppleWhole, FaPersonRunning } from "react-icons/fa6";

import "./WidgetGoals.css";
import 'animate.css';

function WidgetGoals() {
    const [isSleepFront, setSleepFront] = useState(true);
    const [isDietFront, setDietFront] = useState(true);
    const [isExerciseFront, setExerciseFront] = useState(true);

    const flipSleepCard = () => {
        setSleepFront(!isSleepFront);
    };

    const flipDietCard = () => {
        setDietFront(!isDietFront);
    };

    const flipExerciseCard = () => {
        setExerciseFront(!isExerciseFront);
    };

    return (
        <div className="widgetContainer">
            <div className="cardContainer animate__animated animate__bounceInRight" id="sleepCard">
                <span className="addAction" onClick={flipSleepCard}><AiOutlinePlus /></span>
                {isSleepFront ? (
                    <>
                        <div className="sectionHeader">
                            <BiSolidBed className="sectionLogo" />
                            <h3>Sleep</h3>
                        </div>
                        <div className="sectionContent">
                            <span>8/8 Hours</span>
                        </div>
                    </>
                ) : (
                    <form className="formContainer">
                        <label>How many hours did you sleep?</label>
                        <div>
                            <input type="number" placeholder="" /> Hours
                        </div>
                    </form>
                )}
            </div>

            <div className="cardContainer animate__animated animate__bounceInRight" id="dietCard">
                <span className="addAction" onClick={flipDietCard}><AiOutlinePlus /></span>
                {isDietFront ? (
                    <>
                        <div className="sectionHeader">
                            <FaAppleWhole className="sectionLogo" />
                            <h3>Diet</h3>
                        </div>
                        <div className="sectionContent">
                            <span>2000/2000 Calories</span>
                        </div>
                    </>
                ) : (
                    <form className="formContainer">
                        <label>How many calories did you consume?</label>
                        <div>
                            <input type="number" placeholder="" /> Calories
                        </div>
                    </form>
                )}
            </div>

            <div className="cardContainer animate__animated animate__bounceInRight" id="exerciseCard">
                <span className="addAction" onClick={flipExerciseCard}><AiOutlinePlus /></span>
                {isExerciseFront ? (
                    <>
                        <div className="sectionHeader">
                            <FaPersonRunning className="sectionLogo" />
                            <h3>Exercise</h3>
                        </div>
                        <div className="sectionContent">
                            <span>1/1 Hours</span>
                        </div>
                    </>
                ) : (
                    <form className="formContainer">
                        <label>How many hours did you exercise?</label>
                        <div>
                            <input type="number" placeholder="" /> Hours
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default WidgetGoals;
