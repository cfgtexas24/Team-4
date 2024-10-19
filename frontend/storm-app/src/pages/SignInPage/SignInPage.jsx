import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed
import 'bootstrap/dist/css/bootstrap.min.css';

function SignInPage() {
  const [userHandle, setUserHandle] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const navigate = useNavigate();

  function changeUserHandle(event) {
    setUserHandle(event.target.value);
  }

  function changeUserPassword(event) {
    setUserPassword(event.target.value);
  }

  async function checkCredentials() {
    try {
      const payload = {
        email: userHandle,
      };

      // Send login request to backend
      const response = await axios.post('http://127.0.0.1:5000/sign-in', payload);

      if (response.status === 200) {
        console.log('Login successful!');
        navigate('/dashboard'); // Redirect to dashboard
      }
    } catch (error) {
      console.error('Login failed:', error.response ? error.response.data : error.message);
      setErrorMessage('Invalid email or password.'); // Set error message
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-5" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="userHandle">Email</label>
            <input
              type="text"
              id="userHandle"
              className="form-control"
              placeholder="Enter your email"
              value={userHandle}
              onChange={changeUserHandle}
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="userPassword">Password</label>
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
            className="btn btn-primary btn-block"
            onClick={checkCredentials}
          >
            Submit
          </button>
        </form>

        {errorMessage && (
          <div className="alert alert-danger mt-3" role="alert">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  );
}

export default SignInPage;