import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact'>
      <div className='form-box'>
        <form method='POST' action="https://getform.io/f/a699a1b2-f225-434e-b317-1fbbde8e006c" className='cform1'>
          <div className='cdiv1'>
            <p className='cp1'>Contact</p>
            <p className='cp2'>Submit the form below or shoot me an email - melorcraft@gmail.com</p>
          </div>
          <input className='cinput1' type="text" placeholder='Name' name='name' />
          <input className='cinput2' type="email" placeholder='Email' name='email' />
          <textarea className='cinput3' name="message" rows="10" placeholder='Message'></textarea>
          <button className='cbtn1' type='submit'>Let's Collaborate</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
