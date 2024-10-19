import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function SignUpForm() {

    return(
        <div className='sign-up-form'>
            <input type='text' placeholder='First Name' required/>
            <input type='text' placeholder='Last Name' required/>
            <input type='email' placeholder='Email' required/>
            <input type='number' placeholder='Phone number' required/>
            <input type='password' placeholder='Password' required/>
            <input type='password' placeholder='Confirm Password' required/>
            <button>Sign Up</button>
        </div>
        
    )
}

export default SignUpForm; 