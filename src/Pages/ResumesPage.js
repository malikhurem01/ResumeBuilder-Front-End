import React from 'react';
import PageWrapper from '../Components/PageWrapper';

import templatePhoto from '../Assets/templatePhoto.PNG';

import classes from './Styles/ResumesPage.module.css';
import { Button } from 'react-bootstrap';

const ResumesPage = () => {
  return (
    <PageWrapper>
      <div className={classes.historyContainer}>
        <div className={classes.templateContainer}>
          <h4>Choose a template</h4>
          <div className={classes.templates}>
            <img src={templatePhoto} alt="classic template" />
          </div>
          <Button className={classes.btnSelect} variant="primary">
            Select this template
          </Button>
        </div>
        <div className={classes.myResumesContainer}>
          <div className={classes.verticalLine}></div>
          <h4>My Resumes</h4>
          <div className={classes.resumeCardsContainer}>
            <div className={classes.resumeCard}>
              <div className={classes.cardImg}>
                <img src={templatePhoto} alt="templatePhoto" />
              </div>
              <div className={classes.cardTools}>
                <div className={classes.cardOptions}>
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
                <div className={classes.cardInfo}>
                  <p>
                    Date Created: <br /> 25.2.2023{' '}
                  </p>
                  <p>
                    Date Updated: <br /> 25.7.2023
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.resumeCard}>
              <div className={classes.cardImg}>
                <img src={templatePhoto} alt="templatePhoto" />
              </div>
              <div className={classes.cardTools}>
                <div className={classes.cardOptions}>
                  <Button variant="success">Edit</Button>
                  <Button variant="danger">Delete</Button>
                </div>
                <div className={classes.cardInfo}>
                  <p>
                    Date Created: <br /> 25.2.2023{' '}
                  </p>
                  <p>
                    Date Updated: <br /> 25.7.2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default ResumesPage;
