import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import Logo from "../../assets/logo.webp"
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationBar.css'
import { useState } from 'react'
import SignUpForm from '../SignUpForm/SignUpForm'

function NavigationBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);


    const handleMenuToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleSignInClick = () => {
        setShowSignIn(true);
    };

    return(
        <div className='nav-container'>
            <div className='navBar d-flex flex-row justify-content-between align-items-center p-2'>
                <div className={`navBarProfile ${isOpen ? 'expanded' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 448 512"><path fill="currentColor" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg>
                </div>
                <div className='navBarLogo'>
                    <img src={Logo} alt='Storm Logo'/>
                </div>
                <div className={`navBarMenu ${isOpen ? 'expanded' : ''}`}>
                    <Hamburger toggle={handleMenuToggle} toggled={isOpen} />
                </div>
            </div>
            <div className={`menuBackground ${isOpen ? 'expanded' : ''}`}/>
                <ul className={`menuList ${isOpen ? 'visible' : ''}`}>
                    <li className="nav-item">Home</li>
                    <li className="nav-item">Resources</li>
                    <li className="nav-item" onClick={handleSignInClick}>Sign In</li>
                </ul>
            <div/>
            {showSignIn && <SignUpForm />}
        </div>
        
    )
}

export default NavigationBar; 