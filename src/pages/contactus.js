
import React from 'react';
import {useState} from 'react';
import Axios from "axios";
  
const ContactUs = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [preference, setPreference] = useState('email');
  const [isDisabled, setDisabled] = useState(false);
  const [checkedPhoneNumber, setCheckedPhoneNumber] = useState(false);
  const [checkedEmail, setCheckedEmail] = useState(true);



  const clearFields = () => {
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setEmail('');
    setReason('');
    setCheckedPhoneNumber(false);
    setCheckedEmail(true);
  };


  const firstNameChange = event => {
      setFirstName(event.target.value);
  };

  const lastNameChange = event => {
      setLastName(event.target.value);
  };

  const phoneNumberChange = event => {
    setPhoneNumber(event.target.value);
  };

  const emailChange = event => {
      setEmail(event.target.value);
  };

  const reasonChange = event => {
    setReason(event.target.value);
  };

  const preferenceChange = event => {
    if (event.target.value === 'email') {
      setCheckedEmail(true);
      setCheckedPhoneNumber(false);
      setPreference(event.target.value);
    } else {
      setCheckedPhoneNumber(true);
      setCheckedEmail(false);
      setPreference(event.target.value);
    };
  };



  const postInfo = () => {
    setDisabled(true);

    if (email !== '' && email.includes('@') && reason !== '') {

      const reqBody = {
      "firstName": firstName,
      "lastName": lastName,
      "phoneNumber": phoneNumber,
      "email": email,
      "reason": reason,
      "preference": preference,
      };

      Axios.post("http://localhost:3002/postInfo", reqBody).then(() => {
        alert('Thank you for your interest! We will get to you as soon as possible!');
        setDisabled(false);
        clearFields();
      });
    }
    else{
      alert('You must enter an email address and a reason why to submit.');
      setDisabled(false);
    };
  }

  return (
    <div className='App'>
      <h1>Contact Us</h1>

      <div className='fieldset' id='registration-form'>
          <legend style={{ fontSize: '25px' }}>Sign up here to get in contact with one of our agents!</legend>
          <form>
          <div align="center">
            <div>
                <input type='text' id='firstName' name='firstName' onChange={firstNameChange} value={firstName} placeholder='First Name' maxLength='50'></input>
              </div>
            <div>
                <input type='text' id='lastName' name='lastName' onChange={lastNameChange} value={lastName} placeholder='Last Name' maxLength='50'></input>
              </div>
            <div>
              <input type='text' id='phoneNumber' name='phoneNumber' onChange={phoneNumberChange} value={phoneNumber} placeholder='Phone Number' maxLength='16'></input>
            </div>
            <div>
              <input type='text' id='email' name='email' onChange={emailChange} value={email} placeholder='Email Address' data-required='true' maxLength='100' required></input>
            </div>
            <div>
              <input type='text' id='reason' name='reason' onChange={reasonChange} value={reason} placeholder='Reason Why' maxLength='250' required></input>
            </div>
            <div>
              <p>Contact Preference</p>
            </div>
            <div>
              <input type='radio' id='emailPreference' name='emailPreference' onChange={preferenceChange} value='email' checked={checkedEmail}></input>
              <label>Email</label>
              <input type='radio' id='phoneNumberPreference' name='phoneNumberPreference' onChange={preferenceChange} value='phone number' checked={checkedPhoneNumber}></input>
              <label>Phone</label> 
            </div>
          </div> <br></br>
          <button className='button' onClick={postInfo} disabled={isDisabled} ><strong>Submit</strong></button>
          </form>
        </div> <br></br>
      
      <p>Phone Number: <strong>(208) 995-5454</strong></p>
      <p>Email: <strong>AbegglenRealtyLLC@gmail.com</strong></p>
      <p>Location: <strong>1234 Main St, Boise, ID</strong></p> <br></br>
      <p><strong>Hours Available</strong></p>
      <small>--------------------------------------</small>
      <p>M-F: 8 AM - 5 PM</p>
      <p>Saturday: 9 AM - 4 PM</p> <br></br><br></br><br></br><br></br><br></br>

    </div>
  );
};
  
export default ContactUs;