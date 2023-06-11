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
import { Link } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleFormSubmit = async ev => {
    ev.preventDefault();
    const data = { email, password };
    await services
      .login(data)
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
    <PageWrapper route="/login">
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
                  <p className=" mb-5">Please enter your email and password!</p>
                  <div className="mb-3">
                    <Form>
                      <FloatingLabel
                        controlId="floatingInput"
                        label="Email"
                        className="mb-3"
                      >
                        <Form.Control
                          value={email}
                          onChange={ev => setEmail(ev.target.value)}
                          type="email"
                          placeholder="Enter email"
                        />
                      </FloatingLabel>

                      <FloatingLabel
                        controlId="floatingInput"
                        label="Password"
                        className="mb-3"
                      >
                        <Form.Control
                          value={password}
                          onChange={ev => setPassword(ev.target.value)}
                          type="password"
                          placeholder="Password"
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
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{' '}
                        <Link to={'/signup'} className="text-primary fw-bold">
                          Sign Up
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
