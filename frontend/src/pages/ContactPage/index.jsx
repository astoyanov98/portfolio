import React, { useRef, useState } from "react";
import Header from "../../components/Header/Header";
import Avatar from '../../images/avatar.svg'
import './ContactPage.css'
import emailjs from '@emailjs/browser';
import Button from "../../components/Button/button";
import EmailSent from "../../components/EmailSent/EmailSent";

const ContactPage = () => {
    const form = useRef();
    const [isSent, setIsSent] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_61xqyx7', 'template_8q24qqp', form.current, '2akiFvvmnerPCUKut')
            .then((result) => {
                console.log(result.text);
                setIsSent(true)
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div>
            <Header />
            {!isSent?
            <><div className="containerLine">
                <img height='auto' width='100px' src={Avatar} alt="" />
                <hr className="line" />
            </div>
            <div className="mt-5 mb-5">
                <h1>Thanks for taking the time to reach out.<br/> How can I help you today?</h1>
            </div>

            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row justify-content-center">
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input className="form-control" type="text" name="user_name" required />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-control" type="email" name="user_email" required />
                            </div>
                        </div>
                    </div> 
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center mt-3">
                        <div className="col-md-4">
                            <Button type='submit' name='Submit'/>
                        </div>
                    </div>
                </form>
            </div>
            </>
            :
            <EmailSent />}
        </div>
    )
}

export default ContactPage;