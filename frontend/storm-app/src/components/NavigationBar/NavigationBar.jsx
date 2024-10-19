import React from 'react'
import { Squash as Hamburger } from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from "../../assets/logo.webp"
import 'bootstrap/dist/css/bootstrap.min.css'

function NavigationBar() {
    return(
        <div className='navBar d-flex flex-row'>
            <div className='navBarProfile'>
                <FontAwesomeIcon icon="fa-solid fa-user" />
            </div>
            <div className='navBarLogo'>
                <img src={Logo} alt='Storm Logo'/>
            </div>
            <div className='navBarMenu'>
                <Hamburger />
            </div>
        </div>
    )
}

export default NavigationBar; 