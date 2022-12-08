import React from 'react'
import Axios from 'axios';
import { useState, useEffect } from 'react';
import './Popup.css'
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated}) => {

  const [setTimedPopup] = useState(false);
  // setting email on popup
  const [email, setEmail] = useState('');

  const emailChange = event => {
    setEmail(event.target.value);
  };

  useEffect(() => {
      if(status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
      setEmail('');
  };


  // posting email on popup to db and mailing list
  const postInfo = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({EMAIL: email});

    if (email !== '' && email.includes('@')) {

      const reqBody = {
      "firstName": 'Getting',
      "lastName": 'Updates',
      "phoneNumber": 'null',
      "email": email,
      "reason": "null",
      };

      Axios.post("http://localhost:3002/postInfo", reqBody).then(() => {
      });
    }
    setTimedPopup(false);
  };

  return (
    <div>
      <h3>{status === "success" ? "Success!" : "Join our email list for future updates and new listings."}</h3>

      {status === "sending" && (
        <div>sending...</div>
      )}

      {status === "error" && (
        <div dangerouslySetInnerHTML={{ __html: message }}/>
      )}

      {status === "success" && (
        <div dangerouslySetInnerHTML={{ __html: message }}/>
      )}

      {status !== "success" ? (
        <div>
          <input type='text' label='email' id='email' name='email' onChange={(e) => emailChange(e)} value={email} placeholder='Email Address' required></input> <br></br><br></br>
          <button onClick={(e) => postInfo(e)} label='subscribe' className='buttonHome' formvalues={[email]}>Submit</button>
        </div>
      ) : null}

    </div>
  );
};

function Popup(props) {

    const postUrl = `https://gmail.us8.list-manage.com/subscribe/post?u=ff94d7888c42c22f523e597d9&id=8293757ecf`;

  return (props.trigger) ? (
    <div className='popup'>
     <div className='popup-inner'>
     <MailchimpSubscribe url={postUrl}
                     render={({ subscribe, status, message }) => (
                      <CustomForm
                          status={status} 
                          message={message}
                          onValidated={formData => subscribe(formData)}
                      />
                  )} />
        <button className='close-btn' onClick={() => props.setTrigger(false)}>X</button>
        { props.children }
     </div>
    </div>
  ) : "";
}

export default Popup