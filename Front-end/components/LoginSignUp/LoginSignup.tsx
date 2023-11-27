import { useState, useRef } from 'react';
import './LoginSignup.css';
import { useNavigate } from 'react-router';
import axios from 'axios';

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const [alertPassword, setAlertPassword] = useState(false);
  const [alertEmail] = useState(false);

  const nameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleClick = async (event: React.FormEvent) => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    try {
      if (action === "Sign Up") {
        const response = await axios.post('http://localhost:3000/api/authentification/register', {
          name,
          email,
          password
        });

        const token = response.headers['authorization'];
        localStorage.setItem('token', token);

        navigate('/Team4SoftwareProject/dashboard');
      } else if (action === "Login") {
        const response = await axios.post('http://localhost:3000/api/authentification/login', {
          email,
          password
        });

        const token = response.data;

        if (token) {
          localStorage.setItem('token', token);
          navigate('/Team4SoftwareProject/dashboard');
        } else {
          setAlertPassword(true);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle specific errors and display appropriate messages
    }
  };

  return (
    <div className="pageContainer">
      <form onSubmit={handleClick}>
        <div className='logincontainer'>
          <div className="submit-container">
            <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => setAction("Sign Up")}>Sign Up</div>
            <div className="or">or</div>
            <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => setAction("Login")}>Login</div>
          </div>
          <div className='header'>
            <div className="text">{action}</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            {action === "Login" ? null : (
              <div className="input">
                <img src={"../../assets/person.png"} alt="" />
                <input ref={nameRef} type="text" placeholder="Name" name='name' />
              </div>
            )}
            <div className="input">
              <img src={'../../assets/email.png'} alt="" />
              <input ref={emailRef} type="email" placeholder="Email" name='email' />
              {alertEmail && <p className='AlertLogIn'>No user found</p>}
            </div>
            <div className="input">
              <img src={'../../assets/password.png'} alt="" />
              <input ref={passwordRef} type="password" placeholder="Password" name='password' />
              {alertPassword && <p className='AlertLogIn'>Password incorrect</p>}
            </div>
            <button type="submit">Confirm</button>
          </div>
          {action === "Sign Up" ? <div></div> : <div className="forgot-password"onClick={() => window.location.href = "/Team4SoftwareProject/password_reset"}>Forgot Password? <span>Click Here!</span></div>}
          
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
