import React from 'react'
import { Modal, Box } from '@mui/material'
import 'bootstrap/dist/css/bootstrap.min.css'

function SignUpForm() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <div className='sign-up-form'>
            <input type='text' placeholder='First Name' required/>
            <input type='text' placeholder='Last Name' required/>
            <input type='date' placeholder='Date of Birth' required/>
            <input type='email' placeholder='Email' required/>
            <input type='number' placeholder='Phone number' required/>
            <label for="gender">Location</label>
            <input type='text' placeholder='Location' required/>
            <label for="gender">Gender</label>
            <select id="gender" name="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="nonbinary">Nonbinary</option>
                <option value="other">Other</option>
            </select>
            <input type='password' placeholder='Password' required/>
            <input type='password' placeholder='Confirm Password' required/>
            <button>Sign Up</button>
        </div>
        </Modal>
        
    )
}

export default SignUpForm; 