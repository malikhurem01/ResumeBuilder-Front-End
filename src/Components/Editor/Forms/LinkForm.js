import { useState, useEffect } from 'react';
import { Form, Accordion, FloatingLabel, Button } from 'react-bootstrap';

import classes from '../Styles/PDFEditor.module.css';

const LinkForm = ({ handleInputData, handlePDFLoading }) => {
  const [links, setLinks] = useState({ set: [] });

  const handleAddLink = () => {
    setLinks(prevState => {
      const UPDATED_STATE = { set: [...prevState.set, {}] };
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

  const handleRemoveLink = ev => {
    setLinks(prevState => {
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
        links
      });
    }, 800);

    const loadingTimer = setTimeout(() => {
      handlePDFLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timer);
    };
  }, [links, handleInputData, handlePDFLoading]);

  return (
    <Accordion.Item eventKey="4">
      <Accordion.Header>Links</Accordion.Header>
      <Accordion.Body className={classes.languagesBody}>
        {links?.set?.map((s, i) => {
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
          style={links?.set?.length > 0 ? { marginTop: 15 } : {}}
        >
          Add new
        </Button>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default LinkForm;
