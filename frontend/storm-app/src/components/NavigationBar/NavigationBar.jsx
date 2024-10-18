import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function NavigationBar() {
    return(
        <div className='navBar'>
            <div className='navBarProfile'>
                <FontAwesomeIcon icon="fa-solid fa-user" />
            </div>
            <div className='navBarLogo'>
                <image src='../../assets/logo.webp' alt='Storm Logo'/>
            </div>
            <div className='navBarMenu'>
                <Hamburger />
            </div>
        </div>
    )
}

export default NavigationBar; 