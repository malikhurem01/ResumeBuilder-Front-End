import { useState, useEffect } from 'react';
import { Form, Button, Accordion, FloatingLabel } from 'react-bootstrap';
import classes from '../Styles/PDFEditor.module.css';

const SkillForm = ({ handleInputData, handlePDFLoading }) => {
  const [skills, setSkills] = useState({ set: [] });

  const handleAddSkill = () => {
    setSkills(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
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

  const handleRemoveSkill = ev => {
    setSkills(prevState => {
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
        skills
      });
    }, 800);

    const loadingTimer = setTimeout(() => {
      handlePDFLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timer);
    };
  }, [skills, handleInputData, handlePDFLoading]);

  return (
    <Accordion.Item eventKey="5">
      <Accordion.Header>Skills</Accordion.Header>
      <Accordion.Body className={classes.languagesBody}>
        {skills?.set?.map((s, i) => {
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
          style={skills?.set?.length > 0 ? { marginTop: 15 } : {}}
        >
          Add new
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default SkillForm;
