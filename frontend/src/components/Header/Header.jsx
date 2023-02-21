import React from 'react'
import Button from '../Button/button.jsx';
import './Header.css'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/contact')
    }

    return(
        <div className='container'>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="/">
                    <img width={'140px'} src={logo} alt="" />
                </a>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Button onClick={handleClick} name="Say Hello"/>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Header;