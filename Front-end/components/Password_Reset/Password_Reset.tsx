import './Password_Reset.css';
import email_img from '../../assets/email.png'
import password_img from '../../assets/password.png'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router';

const Password_Reset: React.FC = () => {

    const navigate = useNavigate();
    const [email, setEmail] = useState('');
        const [page, setPage] = useState("Recovery");
        const [usercode, setUsercode] = useState('');
        const [code , setCode] = useState(Math.floor(Math.random() * (999999 - 1) + 1));
        const [newpass1, setNewpass1] = useState('');
        const [newpass2, setNewpass2] = useState('');


        const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setEmail(e.target.value);
        };
        const handleUsercodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setUsercode(e.target.value);
        };
        const handleNewpass1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewpass1(e.target.value);
        };
        const handleNewpass2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
            setNewpass2(e.target.value);
        };

        const handleCodeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if(usercode == code.toString()){
                alert("The entered code is correct.")
                setPage('New');
            }
            else{
                alert("The entered code is incorrect, please try again.")
            }
        }
        const handleNewSubmit = (e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            if(newpass1 == newpass2){
                //change password
                alert("Your password has been changed.")
                navigate('/Team4SoftwareProject/');
            }
            else{
                alert("Passwords do not match, try again.")
            }
        }
        const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(true){// Eventually check to see if email is in database
        
            //Send email to reset password  
            emailjs.send('service_g7nvqdp', 'template_led525w', {
                email: email,
                code: code,
            }, 'WUcjA5nA5O--8B0Vd') 
                .then((result) => {
                console.log(result.text);
                alert('Email with recovery link sent.')        
            }, (error) => { 
            console.log(error.text);
            alert('Error.') 
            }
            );
            setPage('Reset');
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
            

            {page === "Recovery" ?
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
            :page === "Reset" ?
            <form id = 'myForm1' onSubmit = {handleCodeSubmit}> 
                <div className="inputs">
                    <div className="input">
                        <img src={password_img} alt="" />
                        <input type="number" placeholder="6-digit Verification Code" name='usercode' value={usercode} onChange={handleUsercodeChange}/>
                    </div>
                </div>

                <div className="submit-container1">
                <div>
                    <button type="submit" className="submit1">Submit Code</button>
                </div>
                </div>
            </form>
            :
            <form id = 'myForm2' onSubmit = {handleNewSubmit}>
                <div className="inputs">
                    <div className="input">
                        <img src={password_img} alt="" />
                        <input type="password" placeholder="Type your new password" name='newpass1' value={newpass1} onChange={handleNewpass1Change}/>
                    </div>
                    <div className="input">
                        <img src={password_img} alt="" />
                        <input type="password" placeholder="Re-type your new password" name='newpass2' value={newpass2} onChange={handleNewpass2Change}/>
                    </div>
                </div>

                <div className="submit-container1">
                <div>
                    <button type="submit" className="submit1">Submit Code</button>
                </div>
                </div>
            </form>
            }
          
        </div>

    </div>
  )
};

export default Password_Reset;