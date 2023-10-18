import { useState } from 'react';
import './LoginSignup.css'
// Does specific file address work in actual website?
import user_icon from '/public/Images/LoginSignup/person.png' 
import email_icon from '/public/Images/LoginSignup/email.png'
import password_icon from '/public/Images/LoginSignup/password.png'
const LoginSignup = () => {

  const [action,setAction] = useState("Sign Up");

  return (
    <div className = 'container'>
      <div className = "submit-container">
      <div className = {action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className = "or">or</div>
      <div className = {action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
      <div className = 'header'>
        <div className = "text">{action}</div>
        <div className = "underline"></div>
      </div>
      
      <div className = "inputs">
        {action==="Login"?<div></div>:<div className="input">
        <img src={user_icon} alt=""/>
        <input type="text" placeholder="Name"/>
      </div>}
      
      <div className="input">
        <img src={email_icon} alt=""/>
        <input type="email" placeholder="Email"/>
      </div>
      <div className="input">
        <img src={password_icon} alt=""/>
        <input type="password" placeholder="Password"/>
      </div>
      </div>
      {action==="Sign Up"?<div></div>:<div className = "forgot-password">Forgot Password? <span>Click Here!</span></div>}
      
      
    </div>
  )
};

export default LoginSignup