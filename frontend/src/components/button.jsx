import React from "react";
import './styles.css'

const Button = ({name}) => {
    return(
        <div className="button-container">
            {name}
        </div>
    )
}

export default Button;