import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed
import './SignIn.css'; // Use the same CSS as the SignUpPage
import fun from "../../assets/image.png"


function SignInPage({ setIsSignedIn }) {
  const [userHandle, setUserHandle] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); 
  const navigate = useNavigate();

  function changeUserHandle(event) {
    setUserHandle(event.target.value);
  }

  function changeUserPassword(event) {
    setUserPassword(event.target.value);
  }

  async function checkCredentials() {
    try {
      const payload = { email: userHandle };
      const response = await axios.post('http://127.0.0.1:5000/sign-in', payload);

      if (response.status === 200) {
        setIsSignedIn(true);
        console.log('Login successful!');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setErrorMessage('Invalid email or password.');
    }
  }

  return (
    <div className="signup-main">
      <div className="signup-left">
        <div className="signup-left-content">
          <h1>Welcome Back!</h1>
          <p>Please enter your login details</p>
          <img src={fun} alt='Storm Logo' style={{ width: '300px', height: '300px' }} />
        </div>
      </div>

      <div className="signup-right">
        <div className="signup-container">
          <h2>Sign In</h2>
          <form onSubmit={(e) => { e.preventDefault(); checkCredentials(); }}>
            <div className="form-group mb-3">
              <input
                type="text"
                id="userHandle"
                className="form-control"
                placeholder="Enter your email"
                value={userHandle}
                onChange={changeUserHandle}
              />
            </div>

            <div className="form-group mb-3">
              <input
                type="password"
                id="userPassword"
                className="form-control"
                placeholder="Enter your password"
                value={userPassword}
                onChange={changeUserPassword}
              />
            </div>

            <button
              type="button"
              className="signup-submit"
              onClick={checkCredentials}
            >
              Submit
            </button>
          </form>

          <div className="text-center mt-3">
            Don't have an account? <a href="/sign-up">Sign up</a>
          </div>

          {errorMessage && (
            <div className="alert alert-danger mt-3" role="alert">
              {errorMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
