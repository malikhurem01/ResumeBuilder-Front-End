import classes from '../Pages/Styles/LandingPage.module.css';
import { Link } from 'react-router-dom';
import imgShape from '../Assets/img/shape.png';
import logo from '../Assets/img/logo.png';
import { useContext } from 'react';
import AuthContext from '../Store/auth-context-api';
import React from 'react';
import { Dropdown } from 'react-bootstrap';
import services from '../Services/authService';

const PageWrapper = ({ children, route }) => {
  const ctx = useContext(AuthContext);

  const handleLogOut = () => {
    services.logOut();
  };

  return (
    <div className={`${classes.bigWrapper} ${classes.light}`}>
      <img src={imgShape} alt="" className={classes.shape} />

      <header>
        <div className={classes.container}>
          <div className={classes.logo}>
            <img src={logo} alt="Logo" />
            <h3>Resumate is your new career buddy!</h3>
          </div>

          <div className={classes.links}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <a href="#">Features</a>
              </li>

              {ctx.userDataState ? (
                <React.Fragment>
                  {route === '/editor' ? (
                    ''
                  ) : (
                    <li>
                      <Link to="/editor" className={classes.btns}>
                        Resume Editor
                      </Link>
                    </li>
                  )}
                  <Dropdown>
                    <Dropdown.Toggle
                      className={classes.dropdownBasic}
                      variant="primary"
                      id="dropdown-basic"
                    >
                      {`Welcome ${ctx.userDataState.firstName}!`}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Account</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        My resumes
                      </Dropdown.Item>
                      <Dropdown.Item onClick={handleLogOut}>
                        Log out
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {route === '/signup' ? (
                    ''
                  ) : (
                    <li>
                      <Link to="/signup" className={classes.btns}>
                        Register
                      </Link>
                    </li>
                  )}
                  {route === '/login' ? (
                    ''
                  ) : (
                    <li>
                      <Link to="/login" className={classes.btns}>
                        Login
                      </Link>
                    </li>
                  )}
                </React.Fragment>
              )}
            </ul>
          </div>

          <div className={classes.overlays}></div>

          <div className={classes.navbarMenu}>
            <div className={classes.bar}></div>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
};

export default PageWrapper;
