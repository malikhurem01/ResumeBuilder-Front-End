import React from 'react';

import classes from './Styles/LandingPage.module.css';

import imgShape from '../Assets/img/shape.png';
import logo from '../Assets/img/logo.png';
import imgPerson from '../Assets/img/person.png';
import testimonialImg from '../Assets/img/avatar.png';
import { Link } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';

const LandingPage = () => {
  return (
    <React.Fragment>
      <PageWrapper>
        <div className={classes.showcaseArea}>
          <div className={classes.container}>
            <div className={classes.left}>
              <div className={classes.bigTitle}>
                <h1>Level up your career</h1>
                <h1>with Resumate.</h1>
              </div>
              <p className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus eius distinctio odit, magni magnam qui ex perferendis
                vitae!
              </p>
              <div className={classes.cta}>
                <Link to="/editor" className={classes.btns}>
                  Create your Resume
                </Link>
              </div>
            </div>

            <div className={classes.right}>
              <img
                src={imgPerson}
                alt="Person Image"
                className={classes.person}
              />
            </div>
          </div>
        </div>
      </PageWrapper>
      <div className={classes.testimonialSection}>
        <div className={classes.container}>
          <h2>Happy Customers</h2>
          <div className={classes.testimonialContainer}>
            <div className={classes.testimonialCard}>
              <img
                src={testimonialImg}
                alt="Customer 1"
                className={classes.customerImage}
              />
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, dolore. Consectetur adipisicing elit. Consectetur
                adipisicing elit.
              </p>
            </div>
            <div className={classes.testimonialCard}>
              <img
                src={testimonialImg}
                alt="Customer 2"
                className={classes.customerImage}
              />
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, dolore. Consectetur adipisicing elit. Consectetur
                adipisicing elit.
              </p>
            </div>
            <div className={classes.testimonialCard}>
              <img
                src={testimonialImg}
                alt="Customer 3"
                className={classes.customerImage}
              />
              <h3>John Doe</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias, dolore. Consectetur adipisicing elit. Consectetur
                adipisicing elit.
              </p>
            </div>
          </div>
        </div>
      </div>
      <footer className={classes.footer}>
        <div className={classes.container}>
          <div className={classes.row}>
            <div className={classes.footerCol}>
              <h4>Our company</h4>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">our services</a>
                </li>
                <li>
                  <a href="#">privacy policy</a>
                </li>
                <li>
                  <a href="#">affiliate program</a>
                </li>
              </ul>
            </div>
            <div className={classes.footerCol}>
              <h4>support</h4>
              <ul>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">terms of service</a>
                </li>
                <li>
                  <a href="#">privacy</a>
                </li>
                <li>
                  <a href="#">payment options</a>
                </li>
              </ul>
            </div>
            <div className={classes.footerCol}>
              <h4>subscribe to our newsletter</h4>
              <form className={classes.newsletterForm}>
                <input type="email" placeholder="Enter your email" required />
                <button type="submit">Subscribe</button>
              </form>
            </div>
            <div className={classes.footerCol}>
              <h4>follow us</h4>
              <div className={classes.socialLinks}>
                <a href="#">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default LandingPage;
