import { useState } from 'react';
import '../styles/LoginSignup.css'
// Does specific file address work in actual website?
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'
//import React from 'react';
//import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios'

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");
  const[values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  // const handleSubmit = (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   axios.post('http://localhost:3000/Team4SoftwareProject', values)
  //   .then(res => console.log(res))
  //   .then(err => console.log(err))
  // }

    function handleClick() {
      axios.post('http://localhost:3000/Team4SoftwareProject', values)
      .then(res => console.log(res))
      .then(err => console.log(err))
      alert('You created an account');
    }
  

  return (
    <div className="pageContainer">
      
      <form>
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
            <input type="text" placeholder="Name" name ='name' onChange={e => setValues({...values, name: e.target.value})} />
          </div>}

          <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" placeholder="Email" name ='email' onChange={e => setValues({...values, email: e.target.value})}/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" placeholder="Password" name ='password' onChange={e => setValues({...values, password: e.target.value})}/>
          </div>
          <button onClick={handleClick}>Confirm</button>

        </div> 
        {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
      </div>
      </form>
    </div>
  )
};

export default LoginSignup