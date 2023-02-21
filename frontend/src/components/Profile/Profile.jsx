import React from "react";
import avatar from '../../images/avatar.svg'
import devices from '../../images/hero-devices.svg'
import './Profile.css'

const Profile = () => {
    return(
        <div className="text-center">
            <div className="p-3 header">Frontend Developer</div>
            <div className="pb-4 sub-header">I design and code beautifully simple things, and I love what I do.</div>
            <div className="container">
            <div className="row justify-content-center">
                <div className="col-10 col-md-6">
                    <img width={'40%'} src={avatar} alt="" />
                </div>
            </div>
            <div className="row justify-content-center pt-5">
                <div className="col-10">
                    <img width={'100%'} src={devices} alt="" />
                </div>
            </div>
            </div>


        </div>
    )
} 

export default Profile;