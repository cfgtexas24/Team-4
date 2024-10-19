import { useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./SignUpPage.css";
import Logo from "../../assets/logo.webp"
import fun from "../../assets/image.png"

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

  const navigate = useNavigate(); // Initialize the hook

  function changeInput(event) {
    const { id, type, checked, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [id]: type === "checkbox" ? checked : value,
    }));
  }

  async function handleSignUp() {
    const {
      firstName, lastName, birthdayMonth, birthdayDay,
      birthdayYear, userHandle, userPassword, needHousing,
      wantMentor, verificationCode
    } = userInfo;

    const payload = {
      name: `${firstName} ${lastName}`,
      location: "N/A",
      gender: "N/A",
      age: `${birthdayMonth} ${birthdayDay}, ${birthdayYear}`,
      phone: userHandle,
      email: userHandle,
      housing_request: needHousing,
      mentor_request: wantMentor,
      verification_code: verificationCode,
      password: userPassword,
    };

    try {
      const response = await axios.post("http://127.0.0.1:5000/sign-up", payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("Sign up successful:", response.data);
      
      // Redirect to /sign-in after successful sign-up
      navigate("/sign-in");
    } catch (error) {
      console.error("Error during sign up:", error.response ? error.response.data : error.message);
    }
  }

  return (
    <div className="signup-main">
      <div className="signup-left">
        <div className="signup-left-content">
        <h1></h1>
        <p></p>
        <h2></h2>
        <p></p>
        <h3></h3>
          <h1>Welcome to SignUp</h1>
          <p>Please fill in your details</p>
          <img src={fun} alt='Storm Logo' style={{ width: '300px', height: '300px' }} />
        </div>
        
      </div>
      <div className="signup-right">
        <Container className="signup-container">
          <div className="signup-logo">
          </div>
          <h2>Create Your Account</h2>
          <Form onSubmit={(e) => { e.preventDefault(); handleSignUp(); }}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId={FIRST_NAME}>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    value={userInfo[FIRST_NAME]}
                    onChange={changeInput}
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId={LAST_NAME}>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    value={userInfo[LAST_NAME]}
                    onChange={changeInput}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="birthday">
              <Row>
                <Col md={4}>
                  <Form.Select
                    id={BIRTHDAY_MONTH}
                    value={userInfo[BIRTHDAY_MONTH]}
                    onChange={changeInput}
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
                    placeholder="Day"
                    value={userInfo[BIRTHDAY_DAY]}
                    onChange={changeInput}
                    min="1"
                    max="31"
                  />
                </Col>
                <Col md={4}>
                  <Form.Control
                    type="number"
                    id={BIRTHDAY_YEAR}
                    placeholder="Year"
                    value={userInfo[BIRTHDAY_YEAR]}
                    onChange={changeInput}
                    min="1900"
                    max={new Date().getFullYear()}
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group className="mb-3" controlId={PHONE_NUMBER}>
              <Form.Control
                type="text"
                placeholder="Phone Number"
                value={userInfo[PHONE_NUMBER]}
                onChange={changeInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId={USER_HANDLE}>
              <Form.Control
                type="text"
                placeholder="Email"
                value={userInfo[USER_HANDLE]}
                onChange={changeInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId={USER_PASSWORD}>
              <Form.Control
                type="password"
                placeholder="Password"
                value={userInfo[USER_PASSWORD]}
                onChange={changeInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId={NEED_HOUSING}>
              <Form.Check
                type="checkbox"
                label="I need housing"
                checked={userInfo[NEED_HOUSING]}
                onChange={changeInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId={WANT_MENTOR}>
              <Form.Check
                type="checkbox"
                label="I want a mentor"
                checked={userInfo[WANT_MENTOR]}
                onChange={changeInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId={VERIFICATION_CODE}>
              <Form.Control
                type="text"
                placeholder="Verification Code"
                value={userInfo[VERIFICATION_CODE]}
                onChange={changeInput}
              />
            </Form.Group>

            <Button type="submit" className="signup-submit">
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    </div>
  );
}

export default SignUpPage;
