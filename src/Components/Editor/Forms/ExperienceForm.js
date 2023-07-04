import {useState, useEffect} from 'react';
import {Form, Button, Accordion, Row, Col, FloatingLabel} from 'react-bootstrap';

import classes from "../Styles/PDFEditor.module.css";

const ExperienceForm = ({handleInputData, handlePDFLoading}) => {

  const [experiences, setExperiences] = useState({ set: [] });
  
   const handleAddExperience = () => {
    setExperiences(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
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

  useEffect(() => {
    handlePDFLoading(true);
    const timer = setTimeout(() => {
      handleInputData({
        experiences
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
    experiences,
    handleInputData,
    handlePDFLoading
  ]);

  return <Accordion.Item eventKey="2">
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
}

export default ExperienceForm;