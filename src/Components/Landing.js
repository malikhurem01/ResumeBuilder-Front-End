import React from 'react';

import classes from './Landing.module.css';
import { Button } from 'react-bootstrap';

export default function Landing() {
  return (
    <React.Fragment>
      <section className={classes.section}>
        <header className={classes.header}>
          <h1>Resumate</h1>
          <nav>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Product</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
          <div className={classes.headerButtonContainer}>
            <Button className={classes.button} variant="outline-dark">
              Log in
            </Button>
            <Button className={classes.button} variant="dark">
              Sign up
            </Button>
          </div>
        </header>
        <div className={classes.landingIntroductionContainer}>
          <div className={classes.landingImage}></div>
          <div className={classes.landingIntroduction}>
            <h1>
              Unlock the
              <br /> power of
              <br /> standing out!
            </h1>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
