import React from "react";
import './styles.css'
import { useNavigate } from 'react-router-dom';

const Button = ({name, img, link}) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if(link) {
            navigate(link)
        } else {
            console.log('123123')
            window.location.href = 'https://github.com/astoyanov98'
        }
    }

    return(
        <div className="button-container" onClick={handleClick}>
            {img && <img height='auto' width='30px' src={img}/>}
            {name}
        </div>
    )
}

export default Button;