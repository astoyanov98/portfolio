import React from "react";
import './Button.css'

const Button = ({name, img, type, onClick}) => {

    const handleClick = (e) => {
        e.preventDefault();
        onClick();
    };

    return(
        <button 
            className="button-container" 
            onClick={type !== 'submit' ? handleClick : undefined}
            type={type === 'submit' ? 'submit' : 'button'}>
                {img && <img height='auto' width='30px' src={img}/>}
                {name}
        </button>
    )
}

export default Button;