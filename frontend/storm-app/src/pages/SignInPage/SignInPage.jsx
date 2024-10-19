import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import 'bootstrap/dist/css/bootstrap.min.css';

function SignInPage() {
  const [userHandle, setUserHandle] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  function changeUserHandle(event) {
    setUserHandle(event.target.value);
  }

  function changeUserPassword(event) {
    setUserPassword(event.target.value);
  }

  function checkCredentials() {
    // TODO: Add real authentication logic here
    console.log('Checking credentials...', userHandle, userPassword);

    // Navigate to the dashboard if credentials are valid
    navigate('/dashboard');
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card p-5" style={{ width: '400px' }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="userHandle">Username</label>
            <input
              type="text"
              id="userHandle"
              className="form-control"
              placeholder="Enter your username"
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
      </div>
    </div>
  );
}

export default SignInPage;
