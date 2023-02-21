import React from "react";
import './About.css'
import frontendImg from '../../images/frontend.png'

const About = () => {
    return(
        <>
            <div className="containerCustom">
                <h1>Hi, I’m Alex. Nice to meet you.</h1>
                <section>
                    I have a passion in programming since very little and I started studying it 
                    extensively in Software University in Sofia. I have acquired a lot of knowledge, 
                    working for a year as a full-stack developer. 
                    I believe that knowing how things work on both sides would make me a better developer. 
                    I am motivated and strive to improve myself by learning new concepts everyday and improving the ones I already know,
                    by doing fullstack projects, which you can see on my github account.
                </section>
            </div>
            <div className="container containerSpecialities">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-4 box">
                        <img height='auto' width='50px' src={frontendImg} alt="" />
                        <h1>Backend Knowledge</h1>
                        <section>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</section>
                        <p>Languages i speak:</p>
                        <section>Java, Javascript</section>
                        <p>Libraries and databases i use:</p>
                        <section>Express, MongoDB, PostgreSQL, MySQL</section>
                    </div>
                    <div className="col-12 col-lg-4 box">
                        <img height='auto' width='50px' src={frontendImg} alt="" />
                        <h1>Frontend Developer</h1>
                        <section>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</section>
                        <p>Languages i speak:</p>
                        <section>HTML, CSS, Javascript</section>
                        <p>Libraries i use:</p>
                        <section>React, Redux, Angular, Typescript, SASS, Bootstrap</section>
                    </div>
                    <div className="col-12 col-lg-4 box">
                        <img height='auto' width='50px' src={frontendImg} alt="" />
                        <h1>Soft skills</h1>
                        <section>A natural problem solver, I am able to approach challenges with creativity and determination. With a positive attitude and a passion for continuous learning, I am confident in my ability to make a meaningful impact in any work environment.</section>
                        <p>Some of the soft skills:</p>
                        <section>adaptive, quick learner, proactive, team-work</section>
                    </div>
                </div>
            </div>
           
        </>
        
    )
}

export default About;