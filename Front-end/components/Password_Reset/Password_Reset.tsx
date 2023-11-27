import './Password_Reset.css';
import email_img from '../../assets/email.png'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Password_Reset: React.FC = () => {
    
    const [email, setEmail] = useState('');
    const jwt = require('jsonwebtoken');
        const id = 'rofl';
        const pass = 'haha';
        const JWT_SECRET = 'lol';
        const secret: string = JWT_SECRET + pass;
        const payload = {
            email,
            id
        }
        const token: string = jwt.sign(payload, secret, {expiresIn: '15m'});    
        const link: string = 'http://localhost:3000/password_reset/' + id + token;  
        console.log(link);

        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        };
        
        const myForm = '#myForm';
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(true){// Eventually check to see if email is in database
        
            //Send email to reset password  
            
            emailjs.sendForm('service_g7nvqdp', 'template_led525w', myForm, 'WUcjA5nA5O--8B0Vd') 
                .then((result) => {
                console.log(result.text);
                alert('Email with recovery link sent.')        
            }, (error) => { 
            console.log(error.text);
            alert('Error.') 
            }
            );
        }
        else{
            alert('Given email was not found.')
        }
        // Add logic to handle password recovery (e.g., sending a recovery email)
        console.log(`Initiating password recovery for ${email}`);
        // Reset the form
        setEmail('');
      };

  return (
    
    <div className="pageContainer">
        <div className='logincontainer'>
          
          <div className='header1'>
                <div className="text">Reset Password</div>
                <div className="underline"></div>
          </div>

            <form id = 'myForm' onSubmit = {handleSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={email_img} alt="" />
                        <input type="email" placeholder="Email" name='email' value={email} onChange={handleEmailChange}/>
                    </div>
                </div>
          
                <div className="submit-container1">
                <div>
                    <button type="submit" className="submit1">Send Code</button>
                </div>
                </div>
            </form>
          
        </div>

    </div>
  )
};

export default Password_Reset;