import { useState } from 'react';
import '../styles/LoginSignup.css'
// Does specific file address work in actual website?
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
import Button from "./Button"

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");

  return (
    <div className="pageContainer">
      <div className='logincontainer'>
        <div className="submit-container">
          <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Sign Up</div>
          <div className="or">or</div>
          <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</div>
        </div>
        <div className='header'>
          <div className="text">{action}</div>
          <div className="underline"></div>
        </div>

        <div className="inputs">
          {action === "Login" ? <div></div> : <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" />
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" />
          </div>
        </div>
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}

        <Button
          margin="auto"
          border="none"
          backgroundColor="#4c00b4"
          height="75px"
          onClick={() => window.location.href = "/Team4SoftwareProject/dashboard"}
          width="100px"
          alignItems="center"
          borderRadius="50px"
          children="Confirm"
          color="white"
        />

      </div>
    </div>
  )
};

export default LoginSignup