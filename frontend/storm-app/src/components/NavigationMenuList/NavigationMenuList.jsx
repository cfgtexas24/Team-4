import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './NavigationMenuList.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function NavigationMenuList({isOpen, setIsOpen, isSignedIn, setIsSignedIn}) {
    const navigate = useNavigate();

    const handleLandingPageClick = () => {
        navigate('/');
        setIsOpen(false);
    }

    const handleResourcesClick = () => {
        window.location.href = 'https://www.stormcohs.org/resources';
        setIsOpen(false);
    }
    
    const handleDashboardClick = () => {
        navigate('/dashboard');
        setIsOpen(false);
    }

    const handleSignInClick = () => {
        navigate('/sign-in');
        setIsOpen(false);
        
    };

    const handleMentorChatClick = () => {
        navigate('/chat');
        setIsOpen(false);
    };

    const handleCoursesClick = () => {
        navigate('/courses')
        setIsOpen(false);
    };


    const handleSignOutClick = () => {
        navigate('/');
        setIsOpen(false)
        setIsSignedIn(false);
    }

    const handleCommunitiesClick = () => {
        navigate('/community');
        setIsOpen(false);
    };

    const handleConnectWithCommunitiesClick = () => {
        navigate('/map');
        setIsOpen(false);
    };


    return(
        <>
            <ul className={`menuList ${isOpen ? 'visible' : ''}`}>
                <li className="nav-item" onClick={handleLandingPageClick}>Home</li>
                <a className="link nav-item" href="https://www.stormcohs.org/resources" target="_blank" rel="noopener noreferrer">Resources</a>

                {isSignedIn
                    ? <>
                        <li className="nav-item" onClick={handleDashboardClick}>Dashboard</li>
                        <li className="nav-item" onClick={handleMentorChatClick}>Mentor Chat</li>
                        <li className="nav-item" onClick={handleCommunitiesClick}>Communities</li>
                        <li className="nav-item" onClick={handleCoursesClick}>Courses</li>
                        <li className="nav-item" onClick={handleConnectWithCommunitiesClick}>Connect with Communities</li> 
                        <li className="nav-item" onClick={handleSignOutClick}>Sign Out</li>

                    </>
                    : <li className="nav-item" onClick={handleSignInClick}>Sign In</li>
                }
            </ul>
        </>
    )
}

export default NavigationMenuList; 