import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.scss";

export default function Contact(){
  const form = useRef();
  


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    form.current.parentElement.parentElement.style.display = 'none';

  };

  return (
  	<form ref={form} onSubmit={sendEmail}>
      <div>
        <label>Name</label>
        <input type="text" name="user_name" required/>
        <label>Email</label>
        <input type="email" name="user_email" required/>
        <label>Message</label>
        <textarea name="message" required/>
        <input id="sendButton" type="submit" value="Send" />
      </div>
	    
	</form>
  )
};
