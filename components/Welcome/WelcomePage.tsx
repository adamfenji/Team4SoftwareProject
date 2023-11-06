import React from 'react';
import "./WelcomePage.css"
import { IoBalloon } from "react-icons/io5";

const Welcome = () => {
    return ( 
        <div className = 'welcomecontainer'>
            <div className = 'header'>
            <IoBalloon className="pfp"></IoBalloon>
            </div>
        
            <div className = 'welcomeheader'>
                <h1>Welcome!!</h1>
            </div>

        
        </div>
    );
};

export default Welcome;