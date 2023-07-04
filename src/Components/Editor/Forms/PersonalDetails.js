import { useState, useRef, useEffect } from "react";
import { Form, Accordion, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import classes from "../Styles/PDFEditor.module.css";

import uploadImageLogo from '../../../Assets/cameraIcon.png';


const PersonalDetails = ({handleInputData, handlePDFLoading}) => {
    /************************ User data state *****************************/
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [email, setEmail] = useState('');

  const handleSetFirstName = ev => {
    setFirstName(ev.target.value);
  }
  const handleSetLastName = ev => {
    setLastName(ev.target.value);
  }
  const handleSetTitle = ev =>{
    setTitle(ev.target.value);
  }
  const handleSetCity = ev => {
    setCity(ev.target.value);
  }
  const handleSetZipCode = ev => {
    setZipCode(ev.target.value);
  }
  const handleSetAddress = ev => {
    setAddress(ev.target.value);
  }
  const handleSetCountry = ev => {
    setCountry(ev.target.value);
  }
  const handleSetPhoneNumber = ev => {
    setPhoneNumber(ev.target.value);
  }
  const handleSetDateOfBirth = ev => {
    setDateOfBirth(ev.target.value);
  }
  const handleSetEmail = ev => {
    setEmail(ev.target.value);
  }

  const imageUploadInput = useRef();

  const [profileImage, setProfileImage] = useState({
    hasProfileImage: false,
    image: uploadImageLogo
  });

  const handleUploadImage = ev => {
    URL.revokeObjectURL(profileImage.src);
    const image = URL.createObjectURL(ev.target.files[0]);
    setProfileImage({ hasProfileImage: true, image: image });
  };

  useEffect(() => {
    handlePDFLoading(true);
    const timer = setTimeout(() => {
      handleInputData({
        profileImage, firstName, lastName, title, city, zipCode, country, phoneNumber, email, address, dateOfBirth
      });
    }, 800);

    const loadingTimer = setTimeout(() => {
      handlePDFLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timer);
    };
  }, [
    
    profileImage, firstName, lastName, title, city, zipCode, country, phoneNumber, email, address, dateOfBirth,
    handleInputData,
    handlePDFLoading
  ]);

    return <Accordion.Item eventKey="0">
    <Accordion.Header>Personal Details</Accordion.Header>
    <Accordion.Body>
      <div
        className={`${classes.imageUploadContainer} ${
          profileImage.hasProfileImage ? classes.imageBorder : ''
        }`}
      >
        <img src={profileImage.image} alt="upload logo icon" />
        <input
          id="fileInput"
          onChange={handleUploadImage}
          ref={imageUploadInput}
          type="file"
          style={{ display: 'none' }}
        />
        <Button
          variant="primary"
          onClick={() => imageUploadInput.current.click()}
        >
          Upload image
        </Button>
        {profileImage.hasProfileImage && (
          <Button
            style={{ marginTop: '15px' }}
            variant="danger"
            onClick={() => {
              setProfileImage({
                hasProfileImage: false,
                image: uploadImageLogo
              });
              imageUploadInput.current.value = '';
            }}
          >
            Remove image
          </Button>
        )}
      </div>
      <Row>
        <Col>
          <FloatingLabel
            controlId="firstNameInput"
            label="First name"
            className="mb-3"
          >
            <Form.Control
              value={firstName}
              onChange={handleSetFirstName}
              type="text"
              placeholder="John"
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel controlId="lastNameInput" label="Last name">
            <Form.Control
              value={lastName}
              onChange={handleSetLastName}
              type="text"
              placeholder="Doe"
            />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        controlId="titleInput"
        label="Title"
        className="mb-3"
      >
        <Form.Control
          value={title}
          onChange={handleSetTitle}
          type="text"
          placeholder="e.g Business Analyst"
        />
        <Form.Text muted>
          Introduce yourself in a one-liner. Example: Social Marketing
          Specialist
        </Form.Text>
      </FloatingLabel>
      <Row>
        <Col>
          <FloatingLabel
            controlId="addressInput"
            label="Full Address"
            className="mb-3"
          >
            <Form.Control
              value={address}
              onChange={handleSetAddress}
              type="text"
              placeholder="e.g Business Analyst"
            />
            <Form.Text muted>Include your house number.</Form.Text>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="cityInput"
            label="City"
            className="mb-3"
          >
            <Form.Control
              value={city}
              onChange={handleSetCity}
              type="text"
              placeholder="e.g Business Analyst"
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel
            controlId="countryInput"
            label="Country"
            className="mb-3"
          >
            <Form.Control
              value={country}
              onChange={handleSetCountry}
              type="text"
              placeholder="e.g Business Analyst"
            />
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="zipCodeInput"
            label="ZIP Code"
            className="mb-3"
          >
            <Form.Control
              value={zipCode}
              onChange={handleSetZipCode}
              type="number"
              placeholder="e.g Business Analyst"
            />
          </FloatingLabel>
        </Col>
      </Row>
      <Row>
        <Col>
          <FloatingLabel
            controlId="phoneNumberInput"
            label="Phone number"
            className="mb-3"
          >
            <Form.Control
              value={phoneNumber}
              onChange={handleSetPhoneNumber}
              type="number"
              placeholder="e.g Business Analyst"
            />
            <Form.Text id="phone" muted>
              Make sure to put your country code.
            </Form.Text>
          </FloatingLabel>
        </Col>
        <Col>
          <FloatingLabel
            controlId="emailAddressInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              value={email}
              onChange={handleSetEmail}
              type="email"
              placeholder="e.g Business Analyst"
            />
          </FloatingLabel>
        </Col>
      </Row>
      <FloatingLabel
        controlId="dateOfBirthInput"
        label="Date of birth"
        className="mb-3"
      >
        <Form.Control
          value={dateOfBirth}
          onChange={handleSetDateOfBirth}
          type="date"
          placeholder="e.g Business Analyst"
        />
      </FloatingLabel>
    </Accordion.Body>
  </Accordion.Item>
}

export default PersonalDetails;