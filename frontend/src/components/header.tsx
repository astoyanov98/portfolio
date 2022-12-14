import React from 'react'
import Button from './button.tsx';
import './styles.css'
import logo from '../images/logo.png'

const Header = () => {
    return(
        <div className='container'>
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand logo" href="#">
                    <img width={'140px'} src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">asd</span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Button name="Say Hello"/>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;