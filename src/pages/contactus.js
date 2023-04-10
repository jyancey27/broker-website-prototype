
import React, {useState} from 'react';
import Axios from "axios";
  
const ContactUs = () => {

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    reason: '',
    preference: 'email'
  });

  const [isDisabled, setDisabled] = useState(false);


  const clearFields = () => {
    setUser({
      ...user,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      reason: ''
    });
  };



  const handleInputChange = event => {
    const { name, value } = event.target;
    setUser(prevState => ({ ...prevState, [name]: value }));
  };


  const postInfo = () => {
    setDisabled(isDisabled => !isDisabled);

    if (user.email !== '' && user.email.includes('@') && user.reason !== '') {
      const reqBody = {
        firstName: user.firstName,
        lastName: user.lastName,
        phoneNumber: user.phoneNumber,
        email: user.email,
        reason: user.reason,
        preference: user.preference,
      };

      Axios.post("http://localhost:3002/postInfo", reqBody).then(() => {
        alert('Thank you for your interest! We will get to you as soon as possible!');
        setDisabled(isDisabled => !isDisabled);
        clearFields();
      });
    }
    else{
      alert('You must enter an email address and a reason why to submit.');
      setDisabled(isDisabled => !isDisabled);
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
                <input type='text' id='firstName' name='firstName' onChange={handleInputChange} value={user.firstName} placeholder='First Name' maxLength='50'></input>
              </div>
            <div>
                <input type='text' id='lastName' name='lastName' onChange={handleInputChange} value={user.lastName} placeholder='Last Name' maxLength='50'></input>
              </div>
            <div>
              <input type='text' id='phoneNumber' name='phoneNumber' onChange={handleInputChange} value={user.phoneNumber} placeholder='Phone Number' maxLength='16'></input>
            </div>
            <div>
              <input type='text' id='email' name='email' onChange={handleInputChange} value={user.email} placeholder='Email Address' maxLength='100' required></input>
            </div>
            <div>
              <input type='text' id='reason' name='reason' onChange={handleInputChange} value={user.reason} placeholder='Reason Why' maxLength='250' required></input>
            </div>
            <div>
              <p>Contact Preference</p>
            </div>
            <div>
              <label>
                <input
                  type="radio"
                  name="preference"
                  value="email"
                  checked={user.preference === "email"}
                  onChange={handleInputChange}
                />
                Email
              </label>

              <label>
                <input
                  type="radio"
                  name="preference"
                  value="phone"
                  checked={user.preference === "phone"}
                  onChange={handleInputChange}
                />
                Phone
              </label>
            </div>
          </div> <br></br>
          <button className='button' onClick={postInfo} disabled={isDisabled} ><strong>Submit</strong></button>
          </form>
        </div> <br></br>
      
      <p>Phone Number: <strong>(208) 999-0000</strong></p>
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