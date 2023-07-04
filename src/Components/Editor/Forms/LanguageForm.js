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

const LanguageForm = ({ handleInputData, handlePDFLoading }) => {
  const [languages, setLanguages] = useState({ set: [] });

  const handleAddLanguage = () => {
    setLanguages(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
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

  const handleRemoveLanguage = ev => {
    setLanguages(prevState => {
      const UPDATED_STATE = { set: [...prevState.set] };
      UPDATED_STATE.set.splice(ev.target.id, 1);
      console.log(UPDATED_STATE);
      return UPDATED_STATE;
    });
  };

  useEffect(() => {
    handlePDFLoading(true);
    const timer = setTimeout(() => {
      handleInputData({
        languages
      });
    }, 800);

    const loadingTimer = setTimeout(() => {
      handlePDFLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timer);
    };
  }, [languages, handleInputData, handlePDFLoading]);

  return (
    <Accordion.Item eventKey="6">
      <Accordion.Header>Languages</Accordion.Header>
      <Accordion.Body className={classes.languagesBody}>
        {languages.set.map((e, i) => {
          return (
            <Accordion.Item key={i} eventKey={i}>
              <Accordion.Header>
                {e['languageInput' + i] ? e['languageInput' + i] : '[LANGUAGE]'}
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
                        <option value="2">Limited working proficiency</option>
                        <option value="3">
                          Minimum professional proficiency
                        </option>
                        <option value="4">Full professional proficiency</option>
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
  );
};

export default LanguageForm;
