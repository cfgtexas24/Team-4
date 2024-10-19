import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationMenuList.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NavigationMenuList({isOpen, setIsOpen, isSignedIn}) {
    const [showSignIn, setShowSignIn] = useState(false);
    const navigate = useNavigate();

    const handleLandingPageClick = () => {
        navigate('/');
        setIsOpen(false);
    }

    const handleSignInClick = () => {
        setShowSignIn(true);
    };

    const handleMentorChatClick = () => {
        navigate('/chat');
        setIsOpen(false);
    };

    const handleCommunitiesClick = () => {
        navigate('/community');
        setIsOpen(false)
    }




    return(
        <>
            <ul className={`menuList ${isOpen ? 'visible' : ''}`}>
                <li className="nav-item" onClick={handleLandingPageClick}>Home</li>
                <li className="nav-item">Resources</li>
                {isSignedIn
                    ? <>
                        <li className="nav-item" onClick={handleMentorChatClick}>Mentor Chat</li>
                        <li className="nav-item" onClick={handleCommunitiesClick}>Communities</li>
                        <li className="nav-item">Courses</li>
                        <li className="nav-item">Sign Out</li>
                    </>
                    : <li className="nav-item" onClick={handleSignInClick}>Sign In</li>
                }
            </ul>
            {showSignIn && <SignUpForm />}
        </>
    )
}

export default NavigationMenuList; 