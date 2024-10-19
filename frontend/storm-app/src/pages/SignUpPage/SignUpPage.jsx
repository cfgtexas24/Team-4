import { useState } from "react";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const BIRTHDAY_MONTH = "birthdayMonth";
const BIRTHDAY_DAY = "birthdayDay";
const BIRTHDAY_YEAR = "birthdayYear";
const LOCATION = "location";
const USER_HANDLE = "userHandle";
const USER_PASSWORD = "userPassword";

function SignUpPage() {
  // The useState to dynamically store the user's inputs for user signup.
  const [userInfo, setUserInfo] = useState({
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [BIRTHDAY_MONTH]: "",
    [BIRTHDAY_DAY]: "",
    [BIRTHDAY_YEAR]: "",
    [LOCATION]: "",
    [USER_HANDLE]: "",
    [USER_PASSWORD]: "",
  });

  /***
   * Changes the input of one of the input fields.
   * Uses the target ID to determine which useState should be changed.
   */
  function changeInput(event) {
    const id = event.target.id;

    switch (id) {
      case FIRST_NAME:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [FIRST_NAME]: event.target.value };
        });
        break;
      case LAST_NAME:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [LAST_NAME]: event.target.value };
        });
        break;
      case BIRTHDAY_MONTH:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [BIRTHDAY_MONTH]: event.target.value };
        });
        break;
      case BIRTHDAY_DAY:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [BIRTHDAY_DAY]: event.target.value };
        });
        break;
      case BIRTHDAY_YEAR:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [BIRTHDAY_YEAR]: event.target.value };
        });
        break;
      case LOCATION:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [LOCATION]: event.target.value };
        });
        break;
      case USER_HANDLE:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [USER_HANDLE]: event.target.value };
        });
        break;
      case USER_PASSWORD:
        setUserInfo((prvsUserInfo) => {
          return { ...prvsUserInfo, [USER_PASSWORD]: event.target.value };
        });
        break;
    }
  }

  /***
   * Attempts to sign up the user.
   * Checks that the user's credentials have not been used previously and that user handle is unique.
   */
  function handleSignUp() {
    // User information upon hitting submit.
    const firstName = userInfo[FIRST_NAME];
    const lastName = userInfo[LAST_NAME];
    const birthdayMonth = userInfo[BIRTHDAY_MONTH];
    const birthdayDay = Number(userInfo[BIRTHDAY_DAY]);
    const birthdayYear = Number(userInfo[BIRTHDAY_YEAR]);
    const userHandle = userInfo[USER_HANDLE];
    const userPassword = userInfo[USER_PASSWORD];

    // Validation check for unique credientials
    // TODO

    // Store user information to database
    // TODO
  }

  return (
    <>
      <p>First Name</p>
      <input
        id={FIRST_NAME}
        onChange={changeInput}
        value={userInfo[FIRST_NAME]}
      ></input>

      <p>Last Name</p>
      <input
        id={LAST_NAME}
        onChange={changeInput}
        value={userInfo[LAST_NAME]}
      ></input>

      <p>Birthday</p>

      <select
        id={BIRTHDAY_MONTH}
        onChange={changeInput}
        value={userInfo[BIRTHDAY_MONTH]}
      >
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>

      <input id="days"></input>
      <input id="years"></input>

      <p>User Handle</p>
      <input
        id={USER_HANDLE}
        onChange={changeInput}
        value={userInfo[USER_HANDLE]}
      ></input>

      <p>Password</p>
      <input
        id={USER_PASSWORD}
        onChange={changeInput}
        value={userInfo[USER_PASSWORD]}
      ></input>

      <button onClick={handleSignUp}>Submit</button>
    </>
  );
}

export default SignUpPage;
