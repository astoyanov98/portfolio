import React from 'react';
import Tick from '../../images/tick.PNG'
import './EmailSent.css'

const EmailSent = () => {
  return (
    <div className="container mt-5 emailSentContainer">
        <img width='200px' src={Tick} alt="" />
        <h1 className='mt-5'>AWESOME!</h1>
        <h3>Email sent successfully</h3>
    </div>
  );
};

export default EmailSent;