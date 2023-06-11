import { useState } from 'react';
import {
  Col,
  Button,
  Row,
  Container,
  Card,
  Form,
  FloatingLabel
} from 'react-bootstrap';
import services from '../Services/authService';
import { Link, useNavigate } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';

export default function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleFormSubmit = async ev => {
    ev.preventDefault();

    const data = {
      firstName,
      lastName,
      email,
      password
    };

    await services
      .register(data)
      .then(res => {
        localStorage.setItem('user_jwt', JSON.stringify(res.data.data.token));
        window.location.replace('/');
      })
      .catch(err => {
        console.log(err);
        setError(true);
      });
  };
  return (
    <PageWrapper route="/signup">
      <Container>
        <Row
          className="vh-100 d-flex justify-content-center"
          style={{ marginTop: 100 }}
        >
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">Resumate</h2>
                  <p className=" mb-5">Please provide your sign-up data!</p>
                  <div className="mb-3">
                    <Form>
                      <Row>
                        <Col>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="First name"
                            className="mb-3"
                          >
                            <Form.Control
                              onChange={ev => setFirstName(ev.target.value)}
                              value={firstName}
                              type="text"
                              placeholder="John"
                            />
                          </FloatingLabel>
                        </Col>
                        <Col>
                          <FloatingLabel
                            controlId="floatingInput"
                            label="Last name"
                            className="mb-3"
                          >
                            <Form.Control
                              onChange={ev => setLastName(ev.target.value)}
                              value={lastName}
                              type="text"
                              placeholder="Doe"
                            />
                          </FloatingLabel>
                        </Col>
                      </Row>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                      >
                        <Form.Control
                          onChange={ev => setEmail(ev.target.value)}
                          value={email}
                          type="email"
                          placeholder="john.doe@email.net"
                        />
                      </FloatingLabel>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          onChange={ev => setPassword(ev.target.value)}
                          value={password}
                          type="password"
                          placeholder="123456"
                        />
                      </FloatingLabel>

                      {error && (
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          <p style={{ color: 'red', fontSize: '20px' }}>
                            Please, try again.
                          </p>
                        </Form.Group>
                      )}
                      <div className="d-grid">
                        <Button
                          onClick={handleFormSubmit}
                          variant="primary"
                          type="submit"
                        >
                          Sign up
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Already have an account?{' '}
                        <Link to={'/login'} className="text-primary fw-bold">
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </PageWrapper>
  );
}
