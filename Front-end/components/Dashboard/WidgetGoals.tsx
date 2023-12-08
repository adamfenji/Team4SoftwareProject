import { useEffect, useState, useRef } from "react";
import { BiSolidBed } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { FaAppleWhole, FaPersonRunning } from "react-icons/fa6";
import axios from "axios";

import "./WidgetGoals.css";
import 'animate.css';

interface WidgetGoalsProps {
    goalType: string; // 'sleep', 'diet', or 'exercise'
  }

function WidgetGoals({ goalType }: WidgetGoalsProps) {

    const [isSleepFront, setSleepFront] = useState(true);
    const [isDietFront, setDietFront] = useState(true);
    const [isExerciseFront, setExerciseFront] = useState(true);
    const [token, setToken] = useState("");

    const [sleep, setSleep] = useState<number>(0);
    const [diet, setDiet] = useState<number>(0);
    const [exercise, setExercise] = useState<number>(0);

    const sleepRef = useRef<HTMLInputElement | null>(null);
    const dietRef = useRef<HTMLInputElement | null>(null);
    const exerciseRef = useRef<HTMLInputElement | null>(null);
    

    // Fetch token from localStorage on component mount
    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleSubmit = async (event: React.FormEvent, cardType: string) => {
        event.preventDefault();

        // Get values from refs or default to 0
        const sleepValue = sleepRef.current?.value ? parseInt(sleepRef.current.value) : 0;
        const dietValue = dietRef.current?.value ? parseInt(dietRef.current.value) : 0;
        const exerciseValue = exerciseRef.current?.value ? parseInt(exerciseRef.current.value) : 0;

        const sleepValuePrevious = sleepRef.current?.value ? parseInt(sleepRef.current.value) : 0;
        const dietValuePrevious = dietRef.current?.value ? parseInt(dietRef.current.value) : 0;
        const exerciseValuePrevious = exerciseRef.current?.value ? parseInt(exerciseRef.current.value) : 0;

        // Update state with the entered values
        let reqData = {};
        if (cardType === 'diet') {
            reqData = { diet: dietValuePrevious};
            reqData = { diet: dietValue };
            setDiet(diet + dietValuePrevious);
        }
        if (cardType === 'sleep') {
            reqData = { sleep: sleepValuePrevious };
            reqData = { sleep: sleepValue };
            setSleep(sleep + sleepValuePrevious);
        }
        if (cardType === 'exercise') {
            reqData = { exercise: exerciseValuePrevious };
            reqData = { exercise: exerciseValue };
            setExercise(exercise + exerciseValuePrevious);
        }

        try {
            await axios.put(`http://localhost:3000/api/daily/11-27-2023`, reqData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });

   
        } catch (error) {
            console.error("Error posting data:", error);
        }
        flipCard(cardType);
    }

    const flipCard = (cardType: string) => {
        switch (cardType) {
            case 'sleep':
                setSleepFront((prevState) => !prevState);
                break;
            case 'diet':
                setDietFront((prevState) => !prevState);
                break;
            case 'exercise':
                setExerciseFront((prevState) => !prevState);
                break;
            default:
                break;
        }
    };

    return (
        <div className="widgetContainer">
            {goalType === 'sleep' && (
            <div className="cardContainer animate__animated animate__bounceInRight" id="sleepCard">
                <span className="addAction" onClick={() => flipCard('sleep')}><AiOutlinePlus /></span>
                {isSleepFront ? (
                    <>
                        <div className="sectionHeader">
                            <BiSolidBed className="sectionLogo" />
                            <h3>Sleep</h3>
                        </div>
                        <div className="sectionContent">
                            <span>{sleep}/8 Hours</span>
                        </div>
                    </>
                ) : (
                    <form onSubmit={(event) => handleSubmit(event, 'sleep')} className="formContainer">
                        <label>How many hours did you sleep?</label>
                        <div>
                            <input type="number" placeholder="" ref={sleepRef} /> Hours
                        </div>
                        <button type="submit" name="Submit" value="submit">Submit</button>
                   
                    </form>
                )}
            </div>
            )}

            {goalType === 'diet' && (
            <div className="cardContainer animate__animated animate__bounceInRight" id="dietCard">
                <span className="addAction" onClick={() => flipCard('diet')}><AiOutlinePlus /></span>
                {isDietFront ? (
                    <>
                        <div className="sectionHeader">
                            <FaAppleWhole className="sectionLogo" />
                            <h3>Diet</h3>
                        </div>
                        <div className="sectionContent">
                            <span>{diet}/2000 Calories</span>
                        </div>
                    </>
                ) : (
                    <form onSubmit={(event) => handleSubmit(event, 'diet')} className="formContainer">
                        <label>How many calories did you consume?</label>
                        <div>
                            <input type="number" placeholder="" ref={dietRef} /> Calories
                        </div>
                        <button type="submit" name="Submit" value="submit">Submit</button>
                    </form>
                )}
            </div>
            )}

            {goalType === 'exercise' && (
            <div className="cardContainer animate__animated animate__bounceInRight" id="exerciseCard">
                <span className="addAction" onClick={() => flipCard('exercise')}><AiOutlinePlus /></span>
                {isExerciseFront ? (
                    <>
                        <div className="sectionHeader">
                            <FaPersonRunning className="sectionLogo" />
                            <h3>Exercise</h3>
                        </div>
                        <div className="sectionContent">
                            <span>{exercise}/5 Hours</span>
                        </div>
                    </>
                ) : (
                    <form onSubmit={(event) => handleSubmit(event, 'exercise')} className="formContainer">
                        <label>How many hours did you exercise?</label>
                        <div>
                            <input type="number" placeholder="" ref={exerciseRef} /> Hours
                        </div>
                        <button type="submit" name="Submit" value="submit">Submit</button>
                    </form>
                )}
            </div>
            )}
        </div>
    );
}

export default WidgetGoals;