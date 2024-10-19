import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./SignUpPage.css";

const FIRST_NAME = "firstName";
const LAST_NAME = "lastName";
const BIRTHDAY_MONTH = "birthdayMonth";
const BIRTHDAY_DAY = "birthdayDay";
const BIRTHDAY_YEAR = "birthdayYear";
const PHONE_NUMBER = "phoneNumber";
const USER_HANDLE = "userHandle";
const USER_PASSWORD = "userPassword";
const NEED_HOUSING = "needHousing";
const WANT_MENTOR = "wantMentor";
const VERIFICATION_CODE = "verificationCode";

function SignUpPage() {
  const [userInfo, setUserInfo] = useState({
    [FIRST_NAME]: "",
    [LAST_NAME]: "",
    [BIRTHDAY_MONTH]: "",
    [BIRTHDAY_DAY]: "",
    [BIRTHDAY_YEAR]: "",
    [PHONE_NUMBER]: "",
    [USER_HANDLE]: "",
    [USER_PASSWORD]: "",
    [NEED_HOUSING]: false,
    [WANT_MENTOR]: false,
    [VERIFICATION_CODE]: "",
  });

  function changeInput(event) {
    const { id, type, checked, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSignUp() {
    const {
      firstName,
      lastName,
      birthdayMonth,
      birthdayDay,
      birthdayYear,
      userHandle,
      userPassword,
      needHousing,
      wantMentor,
      verificationCode,
    } = userInfo;

    // Construct the payload to match what your Flask API expects
    const payload = {
      name: `${firstName} ${lastName}`,
      location: "N/A", // Adjust this if you have a location field
      gender: "N/A", // Adjust if you collect gender info
      age: `${birthdayMonth} ${birthdayDay}, ${birthdayYear}`,
      phone: userHandle, // Change if this is meant for phone or email
      email: userHandle, // Adjust as needed
      housing_request: needHousing,
      mentor_request: wantMentor,
      verification_code: verificationCode,
      password: userPassword,
    };

    try {
    const response = await axios.post("http://127.0.0.1:5000/sign-up", payload, {
        headers: {
            'Content-Type': 'application/json',
        }
      });
      console.log("Sign up successful:", response.data);
    } catch (error) {
      console.error("Error during sign up:", error.response ? error.response.data : error.message);
    }

  }

  return (
    <Container className="sign-up-form">
      <h2 className="text-center">Sign Up</h2>
      <Form>
        {/* Form fields remain unchanged */}
        <Row>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                id={FIRST_NAME}
                onChange={changeInput}
                value={userInfo[FIRST_NAME]}
                placeholder="Enter your first name"
              />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                id={LAST_NAME}
                onChange={changeInput}
                value={userInfo[LAST_NAME]}
                placeholder="Enter your last name"
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3">
          <Form.Label>Birthday</Form.Label>
          <Row>
            <Col md={4}>
              <Form.Select
                id={BIRTHDAY_MONTH}
                onChange={changeInput}
                value={userInfo[BIRTHDAY_MONTH]}
              >
                <option value="">Month</option>
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
              </Form.Select>
            </Col>
            <Col md={4}>
              <Form.Control
                type="number"
                id={BIRTHDAY_DAY}
                onChange={changeInput}
                value={userInfo[BIRTHDAY_DAY]}
                placeholder="Day"
                min="1"
                max="31"
              />
            </Col>
            <Col md={4}>
              <Form.Control
                type="number"
                id={BIRTHDAY_YEAR}
                onChange={changeInput}
                value={userInfo[BIRTHDAY_YEAR]}
                placeholder="Year"
                min="1900"
                max={new Date().getFullYear()}
              />
            </Col>
          </Row>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            id={PHONE_NUMBER}
            onChange={changeInput}
            value={userInfo[PHONE_NUMBER]}
            placeholder="Enter phone number"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="text"
            id={USER_HANDLE}
            onChange={changeInput}
            value={userInfo[USER_HANDLE]}
            placeholder="Enter email address"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            id={USER_PASSWORD}
            onChange={changeInput}
            value={userInfo[USER_PASSWORD]}
            placeholder="Enter a secure password"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id={NEED_HOUSING}
            label="I need housing"
            onChange={changeInput}
            checked={userInfo[NEED_HOUSING]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            id={WANT_MENTOR}
            label="I want a mentor"
            onChange={changeInput}
            checked={userInfo[WANT_MENTOR]}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Verification Code</Form.Label>
          <Form.Control
            type="text"
            id={VERIFICATION_CODE}
            onChange={changeInput}
            value={userInfo[VERIFICATION_CODE]}
            placeholder="Enter your verification code"
          />
        </Form.Group>

        <div className="d-grid gap-2">
          <Button variant="primary" onClick={handleSignUp}>
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default SignUpPage;
