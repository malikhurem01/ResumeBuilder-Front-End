import { useState, useEffect } from 'react';

import {
  Form,
  FloatingLabel,
  Row,
  Col,
  Accordion,
  Button
} from 'react-bootstrap';

import classes from '../Styles/PDFEditor.module.css';

const EducationForm = ({ handleInputData, handlePDFLoading }) => {
  const [education, setEducation] = useState({ set: [] });

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

  useEffect(() => {
    handlePDFLoading(true);
    const timer = setTimeout(() => {
      handleInputData({
        education
      });
    }, 800);

    const loadingTimer = setTimeout(() => {
      handlePDFLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timer);
    };
  }, [education, handleInputData, handlePDFLoading]);

  return (
    <Accordion.Item eventKey="3">
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
                          value={education.set[i]['institutionNameInput' + i]}
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
                            education.set[i]['presentWorkSwitch' + i] === 'on'
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
                      education.set[i]['startingDateInput' + i] ? false : true
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
  );
};

export default EducationForm;
