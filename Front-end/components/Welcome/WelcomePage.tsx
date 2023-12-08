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

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (name === 'weight') {
          setWeight(value);
        } else if (name === 'height') {
          setHeight(value);
        }
    };

    return ( 
        <div className = 'welcomecontainer'>
            <div className = 'header'>
            <IoBalloon className="pfp"></IoBalloon>
            </div>
        
            <div className = 'welcomeheader'>
                <h1>Welcome to Activity Tracker!!</h1>
                <p>
                    This is a test, we will learn if I can create a new line. <br/>
                    This should display a second line.
                </p>
                <input type='text' />
            </div>

        </div>
    );
};

export default Welcome;