import './Password_Reset.css';
import email_img from '../../assets/email.png'
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Password_Reset: React.FC = () => {
    
    const [email, setEmail] = useState('');
    
        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        };
    
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(email == 'example@gmail.com'){// Eventually check to see if email is in database
            console.log('message sent')
            alert('Email with recovery link sent.')
            //Send email to reset password
            console.log('message sent')
            emailjs.send('service_g7nvqdp', 'template_led525w')
            emailjs.sendForm('service_g7nvqdp', 'template_led525w', email, 'WUcjA5nA5O--8B0Vd')
                .then((result) => {
                console.log(result.text);
                
            }, (error) => {
            console.log(error.text);
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

            <form name = 'myForm' onSubmit = {handleSubmit}>
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