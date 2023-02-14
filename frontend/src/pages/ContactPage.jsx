import React, { useRef } from "react";
import Header from "../components/header";
import Avatar from '../images/avatar.svg'
import '../components/styles.css'
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        

        emailjs.sendForm('service_61xqyx7', 'template_8q24qqp', form.current, '2akiFvvmnerPCUKut')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return(
        <div>
            <Header />
            <div className="containerLine">
                <img height='auto' width='100px' src={Avatar} alt="" />
                <hr className="line" />
            </div>
            <div style={{paddingTop:'50px'}}>
                <h1>Thanks for taking the time to reach out.<br/> How can I help you today?</h1>
            </div>

            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    )
}

export default ContactPage;