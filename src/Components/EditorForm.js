import { useState, useEffect, useRef } from 'react';

import {
  Form,
  FloatingLabel,
  Row,
  Col,
  Accordion,
  Button
} from 'react-bootstrap';

import uploadImageLogo from '../Assets/cameraIcon.png';

import classes from './PDFEditor.module.css';

const EditorForm = ({ handleInputData, handlePDFLoading }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [title, setTitle] = useState('');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [profile, setProfile] = useState('');
  const [email, setEmail] = useState('');

  const [experiences, setExperiences] = useState({ set: [] });
  const [education, setEducation] = useState({ set: [] });
  const [languages, setLanguages] = useState({ set: [] });
  const [skills, setSkills] = useState({ set: [] });
  const [links, setLinks] = useState({ set: [] });

  const imageUploadInput = useRef();

  const [profileImage, setProfileImage] = useState({
    hasProfileImage: false,
    image: uploadImageLogo
  });

  const handleFirstNameInput = ev => {
    setFirstName(ev.target.value);
  };

  const handleLastNameInput = ev => {
    setLastName(ev.target.value);
  };

  const handleAddExperience = () => {
    setExperiences(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
      return UPDATED_STATE;
    });
  };

  const handleAddLanguage = () => {
    setLanguages(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
      console.log(UPDATED_STATE);
      return UPDATED_STATE;
    });
  };

  const handleModifyExperience = ev => {
    let value, field, position;
    value = ev.target.value;
    field = ev.target.getAttribute('id');

    if (ev.target.id.includes('presentWorkSwitch')) {
      position = ev.target.getAttribute('experienceid');

      if (ev.target.value === 'on') ev.target.value = 'off';
      else ev.target.value = 'on';
    } else {
      position = ev.target.parentNode.getAttribute('experienceid');
    }
    setExperiences(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set[position][field] = value;
      UPDATED_STATE.set[position].id = position;
      return UPDATED_STATE;
    });
  };

  const handleRemoveExperience = ev => {
    setExperiences(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set.splice(ev.target.id, 1);
      return UPDATED_STATE;
    });
  };
  //
  const handleAddEducation = () => {
    setEducation(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
      return UPDATED_STATE;
    });
  };
  const handleModifyEducation = ev => {
    let value, field, position;
    value = ev.target.value;
    field = ev.target.getAttribute('id');

    if (ev.target.id.includes('presentWorkSwitch')) {
      position = ev.target.getAttribute('educationid');

      if (ev.target.value === 'on') ev.target.value = 'off';
      else ev.target.value = 'on';
    } else {
      position = ev.target.parentNode.getAttribute('educationid');
    }
    setEducation(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set[position][field] = value;
      UPDATED_STATE.set[position].id = position;
      return UPDATED_STATE;
    });
  };

  const handleRemoveEducation = ev => {
    setEducation(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set.splice(ev.target.id, 1);
      return UPDATED_STATE;
    });
  };
  //

  const handleRemoveLanguage = ev => {
    setLanguages(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set.splice(ev.target.id, 1);
      console.log(UPDATED_STATE);
      return UPDATED_STATE;
    });
  };

  const handleModifyLanguage = ev => {
    let value, field, position;
    value = ev.target.value;
    field = ev.target.getAttribute('id');
    if (ev.target.id.includes('proficiency')) {
      position = ev.target.getAttribute('languageid');
    } else {
      position = ev.target.parentNode.getAttribute('languageid');
    }
    setLanguages(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set[position][field] = value;
      UPDATED_STATE.set[position].id = position;
      return UPDATED_STATE;
    });
  };

  const handleModifySkill = ev => {
    let value, field, position;
    value = ev.target.value;
    field = ev.target.getAttribute('id');
    if (ev.target.id.includes('proficiency')) {
      position = ev.target.getAttribute('skillid');
    } else {
      position = ev.target.parentNode.getAttribute('skillid');
    }
    setSkills(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set[position][field] = value;
      UPDATED_STATE.set[position].id = position;
      return UPDATED_STATE;
    });
  };

  const handleAddSkill = () => {
    setSkills(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
      return UPDATED_STATE;
    });
  };
  const handleRemoveSkill = ev => {
    setSkills(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set.splice(ev.target.id, 1);
      console.log(UPDATED_STATE);
      return UPDATED_STATE;
    });
  };

  const handleAddLink = () => {
    setLinks(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
      return UPDATED_STATE;
    });
  };

  const handleRemoveLink = ev => {
    setLinks(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set.splice(ev.target.id, 1);
      console.log(UPDATED_STATE);
      return UPDATED_STATE;
    });
  };

  const handleModifyLink = ev => {
    let value, field, position;
    value = ev.target.value;
    field = ev.target.getAttribute('id');
    position = ev.target.parentNode.getAttribute('linkid');
    setLinks(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set[position][field] = value;
      UPDATED_STATE.set[position].id = position;
      return UPDATED_STATE;
    });
  };

  useEffect(() => {
    handlePDFLoading(true);
    const timer = setTimeout(() => {
      handleInputData({
        firstName,
        lastName,
        title,
        address,
        country,
        phoneNumber,
        dateOfBirth,
        profile,
        email,
        city,
        zipCode,
        experiences,
        languages,
        skills,
        links,
        education,
        profileImage
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
    firstName,
    lastName,
    title,
    address,
    country,
    phoneNumber,
    dateOfBirth,
    profile,
    email,
    city,
    zipCode,
    experiences,
    languages,
    skills,
    links,
    education,
    profileImage,
    handleInputData,
    handlePDFLoading
  ]);

  const handleUploadImage = ev => {
    URL.revokeObjectURL(profileImage.src);
    const image = URL.createObjectURL(ev.target.files[0]);
    setProfileImage({ hasProfileImage: true, image: image });
  };

  return (
    <Form className={classes.forms}>
      <Accordion defaultActiveKey="0" alwaysOpen={true}>
        <Accordion.Item eventKey="0">
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
                    onChange={handleFirstNameInput}
                    type="text"
                    placeholder="John"
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel controlId="lastNameInput" label="Last name">
                  <Form.Control
                    value={lastName}
                    onChange={handleLastNameInput}
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
                onChange={ev => setTitle(ev.target.value)}
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
                    onChange={ev => setAddress(ev.target.value)}
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
                    onChange={ev => setCity(ev.target.value)}
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
                    onChange={ev => setCountry(ev.target.value)}
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
                    onChange={ev => setZipCode(ev.target.value)}
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
                    onChange={ev => setPhoneNumber(ev.target.value)}
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
                    onChange={ev => setEmail(ev.target.value)}
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
                onChange={ev => setDateOfBirth(ev.target.value)}
                type="date"
                placeholder="e.g Business Analyst"
              />
            </FloatingLabel>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Describe your profile</Accordion.Header>
          <Accordion.Body>
            <FloatingLabel
              controlId="profileInput"
              label="Profile"
              className="mb-3"
            >
              <Form.Control
                onChange={ev => setProfile(ev.target.value)}
                as="textarea"
                rows={3}
              />
              <Form.Text muted>
                Shortly describe your profile. Best profiles are one to two
                sentences long.
              </Form.Text>
            </FloatingLabel>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Experiences</Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="1" alwaysOpen={true}>
              {experiences.set.map((e, i) => {
                return (
                  <Accordion.Item key={i} eventKey={i}>
                    <Accordion.Header>
                      {e['jobTitleInput' + i]
                        ? e['jobTitleInput' + i]
                        : 'Ready.. Set.. Go..'}
                    </Accordion.Header>
                    <Accordion.Body>
                      <Row>
                        <Col>
                          <FloatingLabel
                            experienceid={i}
                            controlId={`jobTitleInput${i}`}
                            label="Job title"
                            className="mb-3"
                          >
                            <Form.Control
                              value={experiences.set[i]['jobTitleInput' + i]}
                              onChange={handleModifyExperience}
                              type="text"
                              placeholder="Software Engineer"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          <FloatingLabel
                            experienceid={i}
                            controlId={`hoursInput${i}`}
                            label="Working hours"
                            className="mb-3"
                          >
                            <Form.Control
                              value={experiences.set[i]['hoursInput' + i]}
                              onChange={handleModifyExperience}
                              type="text"
                              placeholder="Full-time"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          {' '}
                          <FloatingLabel
                            experienceid={i}
                            controlId={`companyNameInput${i}`}
                            label="Company name"
                            className="mb-3"
                          >
                            <Form.Control
                              value={experiences.set[i]['companyNameInput' + i]}
                              onChange={handleModifyExperience}
                              type="text"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          {' '}
                          <FloatingLabel
                            experienceid={i}
                            controlId={`locationInput${i}`}
                            label="Location"
                            className="mb-3"
                          >
                            <Form.Control
                              value={experiences.set[i]['locationInput' + i]}
                              onChange={handleModifyExperience}
                              type="text"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FloatingLabel
                            experienceid={i}
                            controlId={`startingDateInput${i}`}
                            label="Starting date"
                            className="mb-3"
                          >
                            <Form.Control
                              value={
                                experiences.set[i]['startingDateInput' + i]
                              }
                              onChange={handleModifyExperience}
                              type="date"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          <FloatingLabel
                            experienceid={i}
                            controlId={`endingDateInput${i}`}
                            label="Ending date"
                            className="mb-3"
                          >
                            <Form.Control
                              value={experiences.set[i]['endingDateInput' + i]}
                              disabled={
                                experiences.set[i]['presentWorkSwitch' + i] ===
                                'on'
                                  ? true
                                  : false
                              }
                              onChange={handleModifyExperience}
                              type="date"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Form.Check
                        disabled={
                          experiences.set[i]['startingDateInput' + i]
                            ? false
                            : true
                        }
                        style={{ marginBottom: 15 }}
                        experienceid={i}
                        id={`presentWorkSwitch${i}`}
                        onChange={handleModifyExperience}
                        type="switch"
                        label="I am still working here"
                      ></Form.Check>
                      <FloatingLabel
                        experienceid={i}
                        controlId={`jobDescriptionInput${i}`}
                        label="Job description"
                        className="mb-3"
                      >
                        <Form.Control
                          value={experiences.set[i]['jobDescriptionInput' + i]}
                          onChange={handleModifyExperience}
                          as="textarea"
                          rows={3}
                        />
                        <Form.Text muted>
                          Shortly give your job description. Best job
                          descriptions are straight to point without giving much
                          details.
                        </Form.Text>
                      </FloatingLabel>
                      <Button
                        id={i}
                        className={classes.removeButton}
                        onClick={handleRemoveExperience}
                        variant="outline-danger"
                        style={{ marginTop: 15 }}
                      >
                        Remove
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
            <Button
              onClick={handleAddExperience}
              className={classes.addButton}
              variant="outline-primary"
              style={experiences.set.length > 0 ? { marginTop: 15 } : {}}
            >
              Add new
            </Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Education</Accordion.Header>
          <Accordion.Body>
            <Accordion defaultActiveKey="3">
              {education.set.map((e, i) => {
                return (
                  <Accordion.Item key={i} eventKey={i}>
                    <Accordion.Header>
                      {e['educationTitleInput' + i]
                        ? e['educationTitleInput' + i]
                        : 'Ready.. Set.. Go..'}
                    </Accordion.Header>
                    <Accordion.Body>
                      <FloatingLabel
                        educationid={i}
                        controlId={`educationTitleInput${i}`}
                        label="Education title"
                        className="mb-3"
                      >
                        <Form.Control
                          value={education.set[i]['educationTitleInput' + i]}
                          onChange={handleModifyEducation}
                          type="text"
                          placeholder="Software engineering student"
                        />
                      </FloatingLabel>

                      <Row>
                        <Col>
                          {' '}
                          <FloatingLabel
                            educationid={i}
                            controlId={`institutionNameInput${i}`}
                            label="Institution name"
                            className="mb-3"
                          >
                            <Form.Control
                              value={
                                education.set[i]['institutionNameInput' + i]
                              }
                              onChange={handleModifyEducation}
                              type="text"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          {' '}
                          <FloatingLabel
                            educationid={i}
                            controlId={`locationInput${i}`}
                            label="Location"
                            className="mb-3"
                          >
                            <Form.Control
                              value={education.set[i]['locationInput' + i]}
                              onChange={handleModifyEducation}
                              type="text"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FloatingLabel
                            educationid={i}
                            controlId={`startingDateInput${i}`}
                            label="Starting date"
                            className="mb-3"
                          >
                            <Form.Control
                              value={education.set[i]['startingDateInput' + i]}
                              onChange={handleModifyEducation}
                              type="date"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          <FloatingLabel
                            educationid={i}
                            controlId={`endingDateInput${i}`}
                            label="Ending date"
                            className="mb-3"
                          >
                            <Form.Control
                              value={education.set[i]['endingDateInput' + i]}
                              disabled={
                                education.set[i]['presentWorkSwitch' + i] ===
                                'on'
                                  ? true
                                  : false
                              }
                              onChange={handleModifyEducation}
                              type="date"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <Form.Check
                        disabled={
                          education.set[i]['startingDateInput' + i]
                            ? false
                            : true
                        }
                        style={{ marginBottom: 15 }}
                        educationid={i}
                        id={`presentWorkSwitch${i}`}
                        onChange={handleModifyEducation}
                        type="switch"
                        label="I am still studying here"
                      ></Form.Check>
                      <FloatingLabel
                        educationid={i}
                        controlId={`institutionDescriptionInput${i}`}
                        label="Job description"
                        className="mb-3"
                      >
                        <Form.Control
                          value={
                            education.set[i]['institutionDescriptionInput' + i]
                          }
                          onChange={handleModifyEducation}
                          as="textarea"
                          rows={3}
                        />
                        <Form.Text muted>
                          Shortly give description about your education.
                        </Form.Text>
                      </FloatingLabel>
                      <Button
                        id={i}
                        className={classes.removeButton}
                        onClick={handleRemoveEducation}
                        variant="outline-danger"
                        style={{ marginTop: 15 }}
                      >
                        Remove
                      </Button>
                    </Accordion.Body>
                  </Accordion.Item>
                );
              })}
            </Accordion>
            <Button
              onClick={handleAddEducation}
              className={classes.addButton}
              variant="outline-primary"
              style={education.set.length > 0 ? { marginTop: 15 } : {}}
            >
              Add new
            </Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Links</Accordion.Header>
          <Accordion.Body className={classes.languagesBody}>
            {links.set.map((s, i) => {
              return (
                <Accordion.Item key={i} eventKey={i}>
                  <Accordion.Header>
                    {s['linkNameInput' + i] ? s['linkNameInput' + i] : '[LINK]'}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={classes.languageItem}>
                      <FloatingLabel
                        linkid={i}
                        controlId={`linkNameInput${i}`}
                        label="Social Network"
                        className="mb-3"
                      >
                        <Form.Control
                          value={links.set[i]['linkNameInput' + i]}
                          onChange={handleModifyLink}
                          type="text"
                          placeholder="e.g Business Analyst"
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        linkid={i}
                        controlId={`linkInput${i}`}
                        label="Link to your profile"
                        className="mb-3"
                      >
                        <Form.Control
                          value={links.set[i]['linkInput' + i]}
                          onChange={handleModifyLink}
                          type="text"
                          placeholder="e.g Business Analyst"
                        />
                      </FloatingLabel>

                      <Button
                        id={i}
                        className={classes.removeButton}
                        onClick={handleRemoveLink}
                        variant="outline-danger"
                        style={{ marginTop: 15 }}
                      >
                        Remove
                      </Button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
            <Button
              onClick={handleAddLink}
              variant="outline-primary"
              className={classes.addButton}
              style={links.set.length > 0 ? { marginTop: 15 } : {}}
            >
              Add new
            </Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Skills</Accordion.Header>
          <Accordion.Body className={classes.languagesBody}>
            {skills.set.map((s, i) => {
              return (
                <Accordion.Item key={i} eventKey={i}>
                  <Accordion.Header>
                    {s['skillInput' + i] ? s['skillInput' + i] : '[SKILL]'}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={classes.languageItem}>
                      <FloatingLabel
                        skillid={i}
                        controlId={`skillInput${i}`}
                        label="Skill"
                        className="mb-3"
                      >
                        <Form.Control
                          value={skills.set[i]['skillInput' + i]}
                          onChange={handleModifySkill}
                          type="text"
                          placeholder="e.g Business Analyst"
                        />
                      </FloatingLabel>

                      <Form.Select
                        id={`proficiencyInput${i}`}
                        onChange={handleModifySkill}
                        skillid={i}
                        aria-label="Default select example"
                      >
                        <option>Level</option>
                        <option value="1">Novice</option>
                        <option value="2">Advanced Beginner</option>
                        <option value="3">Competent</option>
                        <option value="4">Proficient</option>
                        <option value="5">Expert</option>
                      </Form.Select>

                      <Button
                        id={i}
                        className={classes.removeButton}
                        onClick={handleRemoveSkill}
                        variant="outline-danger"
                        style={{ marginTop: 15 }}
                      >
                        Remove
                      </Button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
            <Button
              onClick={handleAddSkill}
              variant="outline-primary"
              className={classes.addButton}
              style={skills.set.length > 0 ? { marginTop: 15 } : {}}
            >
              Add new
            </Button>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Languages</Accordion.Header>
          <Accordion.Body className={classes.languagesBody}>
            {languages.set.map((e, i) => {
              return (
                <Accordion.Item key={i} eventKey={i}>
                  <Accordion.Header>
                    {e['languageInput' + i]
                      ? e['languageInput' + i]
                      : '[LANGUAGE]'}
                  </Accordion.Header>
                  <Accordion.Body>
                    <div className={classes.languageItem}>
                      <Row>
                        <Col>
                          <FloatingLabel
                            languageid={i}
                            controlId={`languageInput${i}`}
                            label="Language"
                            className="mb-3"
                          >
                            <Form.Control
                              value={languages.set[i]['languageInput' + i]}
                              onChange={handleModifyLanguage}
                              type="text"
                              placeholder="e.g Business Analyst"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          <Form.Select
                            id={`proficiencyInput${i}`}
                            onChange={handleModifyLanguage}
                            languageid={i}
                            aria-label="Default select example"
                          >
                            <option>Level</option>
                            <option value="1">Elementary proficiency</option>
                            <option value="2">
                              Limited working proficiency
                            </option>
                            <option value="3">
                              Minimum professional proficiency
                            </option>
                            <option value="4">
                              Full professional proficiency
                            </option>
                            <option value="5">
                              Native or Bilingual proficiency
                            </option>
                          </Form.Select>
                        </Col>
                      </Row>
                      <Button
                        id={i}
                        className={classes.removeButton}
                        onClick={handleRemoveLanguage}
                        variant="outline-danger"
                        style={{ marginTop: 15 }}
                      >
                        Remove
                      </Button>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
            <Button
              onClick={handleAddLanguage}
              variant="outline-primary"
              className={classes.addButton}
              style={languages.set.length > 0 ? { marginTop: 15 } : {}}
            >
              Add new
            </Button>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Form>
  );
};

export default EditorForm;
