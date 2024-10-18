import { Squash as Hamburger } from 'hamburger-react'

function NavigationBar() {
    return(
        <div className='navBar'>
            <div className='navBarProfile'>
                
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