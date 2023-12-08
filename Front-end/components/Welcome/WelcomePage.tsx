import axios from 'axios';
import "./WelcomePage.css"
import { IoBalloon } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Welcome = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const navigate = useNavigate();
    const handleSaveData = () => {
        const physiologicalData = {
            weight,
            height
        };
        console.log('Request URL:', 'http://localhost:3000/Team4SoftwareProject');
        axios
            .post('http://localhost:3000/Team4SoftwareProject', physiologicalData)
            .then(response => {
                
                console.log(response.data);
            })
            .catch ((error) => {
                console.log("Error saving data: ", error);
            });
    }

    const handleInputChange = (event: { target: { name: any; value: any; }; }) => {
        const { name, value } = event.target;
        if (name === 'weight') {
          setWeight(value);
        } else if (name === 'height') {
          setHeight(value);
        }
    };

    return ( 
        <div className = 'welcomecontainer'>
        
            <div className = 'welcomeheader'>
                <h1>Welcome to Activity Tracker!!</h1>
                <h2>Dashboard</h2>
                <p>
                    The dahsboard is where you'll be able to track your weekly and daily progress in any dietary, 
                    physical, and/or sleep goals set by yourself. This is updated to show your progress for the <br/>
                    current day and what you have or should improve for the future, if you failed to meet a past 
                    daily goal that you set out for yourself. It will also calculate the percentage of how much of <br/>
                    your daily goal was completed for whatever day is being presented in the pie charts for your 
                    weekly progress.
                </p>
                <h3>Physical Tracker</h3>
                <p>
                    This is where all of your physical goals can be tracked and recorded on a more detailed and 
                    concise level. We as the developers of Activity Tracker would like to know what you are actively <br/>
                    doing to improve one's self and would like to make any suggestions on this page. We make these 
                    suggestions so we can help you hit and celebrate those personal goals that you have taken <br/>
                    the steps to complete. We are in a bias stance and would like you to reach your goal so you can 
                    create necessary habits to where our Physical Tracker isn't needed anymore than it has to. <br/>
                    Our team takes pride in knowing that we were the start of your fitness journey and that we were 
                    able to triumph with you to the end.
                </p>
                <h4>Dietary Tracker</h4>
                <p>
                    This tracker is similar to the physical tracker to where you can see you calorie intake compared 
                    to the calories you have burned. Our developments will then calculate if this information is <br/>
                    putting you on the right track to complete the dietary or personal goal that you had entered into 
                    our system. Again, we use these calculations to help better you towards your goal and we <br/>
                    will recipe suggestions for any of our dietary tracker users. These recipes are simply designed and 
                    geared towards a healthy, balanced meal that is fun to make and even tastier to eat.
                </p>
                <h5>Mental Tracker</h5>
                <p>
                    This tracker is tied to your sleep practices and the amount of sleep that your are receiving on a 
                    nightly basis. We care that you get the right amount of sleep and aren't over duing it when <br/>
                    pursuing your overal fitness, dietary, or even personal goal for that matter. We know that sleep 
                    and stress levels are connected to overall health and we find it in your best intrest to use <br/>
                    this tracker to your advantage. Like the other two trackers before this, we do take your entered 
                    data on your hours of sleep and provide suggestions on how to prepare for bed, how to get <br/> 
                    a better night's rest, and many other suggestion for you to find out. The other component of this 
                    Mental Tracker, is the component of stress; which this may be immeasureable, but we'd like <br/>
                    to solve that problem with more suggestions on common ways to deal with stress. Our suggestions 
                    for this dilemma range from yoga to light novel reading to just unwinding to a good <br/>
                    game of some sort.
                </p>
                <p>
                    This is the bottom portion of the welcome page, feel free to enter in your height and weight 
                    so it can be taken into account for your own benefits and gain from the Activity Tracker.
                </p>
                <input type='text' placeholder='Height'/>
                <input type='text' placeholder='Weight'/>
            </div>

        </div>
    );
};

export default Welcome;