import React from "react";
import './styles.css'

const Button = ({name, img}) => {
    return(
        <div className="button-container">
            {img && <img height='auto' width='30px' src={img}/>}
            {name}
        </div>
    )
}

export default Button;