import React, { useState, useCallback } from 'react';
import ClassicTemplate from '../../Templates/ClassicTemplate/ClassicTemplate';
import PDFRender from './PDFRender';

import classes from './Styles/PDFEditor.module.css';
import '../../Pages/Styles/LandingPage.module.css';
import EditorForm from './EditorForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

import loadingSvg from '../../Assets/loading.svg';

import { Link } from 'react-router-dom';
const PDFEditor = () => {
  const [inputData, setInputData] = useState({
    firstName: null,
    lastName: null,
    email: null,
    title: null,
    country: null,
    address: null,
    phoneNumber: null,
    city: null,
    dateOfBirth: null,
    zipCode: null,
    profileImage: null,
    experiences: null,
    education: null,
    links: null,
    profile: null,
    skills: null,
    languages: null
  });

  const [pdfDocument, setPdfDocument] = useState(<div></div>);

  const [isPDFLoading, setIsPDFLoading] = useState(false);

  const handleInputData = useCallback(data => {
    var overrideExistingProperties = function (theTarget, theSource) {
      for (var property in theSource)
        if (
          theSource.hasOwnProperty(property) &&
          theTarget.hasOwnProperty(property)
        )
          theTarget[property] = theSource[property];
    };

    setInputData(prevData => {
      overrideExistingProperties(prevData, data);
      return prevData;
    });
  }, []);

  const handlePDFLoading = useCallback(value => {
    setIsPDFLoading(value);
  }, []);

  const handleUpdateDocument = useCallback(document => {
    setPdfDocument(document);
  }, []);

  return (
    <div className={classes.editorContainer}>
      <div className={classes.formsContainer}>
        <EditorForm
          handleInputData={handleInputData}
          handlePDFLoading={handlePDFLoading}
        />
        <PDFDownloadLink
          style={{ marginTop: '20px' }}
          document={pdfDocument}
          fileName="somename.pdf"
        >
          {({ blob, url, loading, error }) => (
            <Button variant="light">Download PDF</Button>
          )}
        </PDFDownloadLink>
        <Button style={{ marginTop: '10px', width: '140px' }} variant="primary">
          <Link to="/" style={{ color: '#fff' }}>
            Go back
          </Link>
        </Button>
      </div>
      <div className={classes.viewer}>
        <div className={classes.renderer}>
          {isPDFLoading && (
            <div className={classes.overlayPDF}>
              <img src={loadingSvg} alt="Loading logo..." />
              Rendering...
            </div>
          )}
          <PDFRender>
            <ClassicTemplate
              handleUpdateDocument={handleUpdateDocument}
              data={inputData}
            />
          </PDFRender>
        </div>
        <Button variant="primary">Select template</Button>
      </div>
    </div>
  );
};

export default PDFEditor;
