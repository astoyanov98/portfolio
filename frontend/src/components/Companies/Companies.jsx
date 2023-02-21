import React from "react";
import IOLogo from '../../images/IO.jpg'
import wedouLogo from '../../images/wedouLogo.svg'

const Companies = () => {
    return(
        <div>
            <div className="m-5 p-5">
                <hr />
            </div>
            <h2 className="m-5">
                I'm proud to have collaborated with some<br />awesome companies:
            </h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-4 col-md-2">
                        <img src={IOLogo} alt="" />
                    </div>
                    <div  className="col-4 col-md-2">
                        <img src={wedouLogo} alt="" />
                    </div>
                </div>
            </div>

        </div>
        
    )
}

export default Companies;