import React, { useRef } from 'react';
import { useState } from 'react';
import emailjs from 'emailjs-com';

export const Contact = () => {
  const form = useRef();
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleName = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmail = (e) => {
    setEmailValue(e.target.value);
  };
  const handleMessage = (e) => {
    setMessageValue(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (messageValue == '') {
      alert('No Message to Send');
      return;
    } else if (emailValue == '') {
      alert('Please Enter a Return Email');
      return;
    } else if (nameValue == '') {
      alert('Please Enter a Name or UserName');
      return;
    }
    emailjs
      .sendForm(
        'healthyLifestyle',
        'contact_healthyLifestyle',
        form.current,
        `${process.env.REACT_APP_UserID}`,
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Email Sent!');
          setNameValue('');
          setEmailValue('');
          setMessageValue('');
        },
        (error) => {
          alert('Oops, something went wrong');
          console.log(error.text);
        },
      );
  };
  return (
    <div>
      <h1>Contact Us</h1>
      <form onSubmit={sendEmail} ref={form}>
        <label>Name:</label>
        <input type="text" name="from_name" value={nameValue} onChange={handleName} />
        <br />
        <br />
        <label>Email:</label>
        <input type="email" name="user_email" value={emailValue} onChange={handleEmail} />
        <br />
        <br />
        <label>Message:</label>
        <textarea name="message" value={messageValue} onChange={handleMessage} />
        <input type="submit" name="Send" value="Send" />
      </form>
    </div>
  );
};

export default Contact;
