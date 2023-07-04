import { useState, useEffect } from 'react';
import { Form, Accordion, FloatingLabel } from 'react-bootstrap';

const ProfileForm = ({ handleInputData, handlePDFLoading }) => {
  const [profile, setProfile] = useState('');

  const handleSetProfile = ev => {
    setProfile(ev.target.value);
  };

  useEffect(() => {
    handlePDFLoading(true);
    const timer = setTimeout(() => {
      handleInputData({
        profile
      });
    }, 800);

    const loadingTimer = setTimeout(() => {
      handlePDFLoading(false);
    }, 1200);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(timer);
    };
  }, [profile, handleInputData, handlePDFLoading]);

  return (
    <Accordion.Item eventKey="1">
      <Accordion.Header>Describe your profile</Accordion.Header>
      <Accordion.Body>
        <FloatingLabel
          controlId="profileInput"
          label="Profile"
          className="mb-3"
        >
          <Form.Control onChange={handleSetProfile} as="textarea" rows={3} />
          <Form.Text muted>
            Shortly describe your profile. Best profiles are one to two
            sentences long.
          </Form.Text>
        </FloatingLabel>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default ProfileForm;
