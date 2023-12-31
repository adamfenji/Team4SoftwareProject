import { useState } from 'react';
import './LoginSignup.css';
// Does specific file address work in actual website?
import user_icon from '../../assets/person.png'
import email_icon from '../../assets/email.png'
import password_icon from '../../assets/password.png'
import { useNavigate } from 'react-router';
import { useRef } from 'react';
import axios from 'axios';

const LoginSignup = () => {

  const [action, setAction] = useState("Sign Up");
  const [AlertPassword, setAlertPassword] = useState(false);
  const [AlertEmail, setAlertEmail] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const nameRef = useRef<HTMLInputElement | null>(null);
  const usernameRef = useRef<HTMLInputElement | null>(null);
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleClick = async (event: any) => {
    event.preventDefault();

    const name = nameRef.current?.value;
    const username = usernameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (action === "Sign Up") {
      await axios.post('http://localhost:3000/users/register', {
        name,
        username,
        email,
        password
      })
        .then((result) => {
          console.log(result);
          navigate('/Team4SoftwareProject/dashboard');
        })
        .catch((error) => { console.log("Error posting data: " + error) });
    }
    else if (action === "Login") {
      await axios.post('http://localhost:3000/users/login', {
        email,
        password
      })
        .then((result) => {
          console.log(result);
          if (result.data === "Success") {
            navigate('/Team4SoftwareProject/dashboard');
          }
          else if (result.data === "Password incorrect"){setAlertPassword(true)}
          else if (result.data === "No user found"){setAlertEmail(true)}
        })
        .catch((error) => { console.log("Error posting data: " + error) });
    }
  }

  return (
    <div className="pageContainer">

      <form onSubmit={handleClick}>
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
              <input ref={nameRef} type="text" placeholder="Name" name='name' onChange={e => setValues({ ...values, name: e.target.value })} />
            </div>}

            <div className="input">
              <img src={email_icon} alt="" />
              <input ref={emailRef} type="email" placeholder="Email" name='email' onChange={e => setValues({ ...values, email: e.target.value })} onClick={()=>setAlertEmail(false)}/>
              {
                AlertEmail ? <p className='AlertLogIn'>No user found</p> : null
              }
            </div>
            <div className="input">
              <img src={password_icon} alt="" />
              <input ref={passwordRef} type="password" placeholder="Password" name='password' onChange={e => setValues({ ...values, password: e.target.value })} onClick={()=>setAlertPassword(false)}/>
              {/* Incorect password */}
              {
                AlertPassword ? <p className='AlertLogIn'>Password incorrect</p> : null
              }
            </div>
            <button type="submit">Confirm</button>

          </div>
          {action === "Sign Up" ? <div></div> : <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>}
        </div>
      </form>
    </div>
  )
};

export default LoginSignup;