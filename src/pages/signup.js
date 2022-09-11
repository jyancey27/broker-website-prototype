import React from 'react';
import {useState} from 'react';
import Axios from "axios";
  
const SignUp = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const firstNameChange = event => {
        setFirstName(event.target.value);
        console.log('value is:', event.target.value);
    };

    const lastNameChange = event => {
        setLastName(event.target.value);
        console.log('value is:', event.target.value);
    };

    const emailChange = event => {
        setEmail(event.target.value);
        console.log('value is:', event.target.value);
    };

    const postInfo = () => {
        const reqBody = {
        "firstName": firstName,
        "lastName": lastName,
        "email": email
        }

        Axios.post("http://localhost:3000/postInfo", reqBody).then(() => {
        console.log("Submitted")
        });
    }

  return (
    <div className='App'>
      <h1>Sign Up Here for More Information</h1>
        <table className='table'>
          <tbody>
            <tr className='tableRow'>
              <fieldset>
                <legend className='legend'><strong>Submit for contact here</strong></legend>
                <div align="left">
                  <div>
                      <label><strong>First Name:</strong>
                      <input type='text' id='firstName' name='firstName' onChange={firstNameChange} value={firstName}></input>
                      </label>
                    </div>
                  <div>
                      <label><strong>Last Name:</strong>
                      <input type='text' id='lastName' name='lastName' onChange={lastNameChange} value={lastName}></input>
                      </label>
                    </div>
                  <div className='requiredField'>
                    <label><strong>Email:</strong>
                    <input type='text' id='email' name='email' onChange={emailChange} value={email} required></input>
                    </label>
                  </div>
                </div>
                <button onClick={postInfo}><strong>Submit</strong></button>
              </fieldset>
            </tr>
          </tbody>
        </table>
      </div>
  );
};
  
export default SignUp;