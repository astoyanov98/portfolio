import React from "react";
import avatar from '../images/avatar.svg'
import devices from '../images/hero-devices.svg'
import './styles.css'

const Home = () => {
    return(
        <div className="text-center">
            <div className="p-3 position">Frontend Developer</div>
            <div className="pb-4 sub-position">I design and code beautifully simple things, and I love what I do.</div>
            <img src={avatar} alt="" />
            <div className="pt-5">
                <img width={'50%'} src={devices} alt="" />
            </div>
        </div>
    )
} 

export default Home;