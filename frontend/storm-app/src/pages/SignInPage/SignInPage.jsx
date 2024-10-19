import { useState, useEffect } from "react";

function SignInPage() {
  // The useState to dynamically store the user's inputs for user authentication.
  const [userHandle, setUserHandle] = useState("");
  const [userPassword, setUserPassword] = useState("");

  /***
   * Handles changes the the user's input for the user handle.
   */
  function changeUserHandle(event) {
    setUserHandle(event.target.value);
  }

  /***
   * Handles changes the the user's input for the user password.
   */
  function changeUserPassword(event) {
    setUserPassword(event.target.value);
  }

  /***
   * Validates the entered credentials.
   */
  function checkCredentials() {
    // TODO
  }

  return (
    <>
      <div>
        <input
          id="userHandle"
          onChange={changeUserHandle}
          value={userHandle}
        ></input>
        <input
          id="userPassword"
          onChange={changeUserPassword}
          value={userPassword}
        ></input>
        <button onClick={checkCredentials}>Submit</button>
      </div>
    </>
  );
}

export default SignInPage;
