import "./WelcomePage.css"
import { IoBalloon } from "react-icons/io5";

const Welcome = () => {
    return ( 
        <div className = 'welcomecontainer'>
            <div className = 'header'>
            <IoBalloon className="pfp"></IoBalloon>
            </div>
        
            <div className = 'welcomeheader'>
                <h1>Welcome to Activity Tracker!!</h1>
                <p>
                    This is a test, we will learn if I can create a new line.
                    This should display a second line.
                </p>
                <input type='text' />
            </div>

        </div>
    );
};

export default Welcome;