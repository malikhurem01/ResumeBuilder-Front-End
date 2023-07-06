import React, { useContext } from 'react';
import PDFRender from './PDFRender';

import classes from './Styles/PDFEditor.module.css';
import '../../Pages/Styles/LandingPage.module.css';
import EditorForm from './EditorForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

import loadingSvg from '../../Assets/loading.svg';

import { Link } from 'react-router-dom';
import EditorContext from '../../Store/editor-context-api';
const PDFEditor = () => {
  const {
    inputData,
    pdfDocument,
    isPDFLoading,
    handleInputData,
    handlePDFLoading,
    CapitalizedReferenceTemplateComponent
  } = useContext(EditorContext);

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
          fileName={`${inputData.firstName}_${inputData.lastName}_${inputData.title}`}
        >
          {({ blob, url, loading, error }) => (
            <Button variant="light">
              {loading ? 'Loading...' : 'Download PDF'}
            </Button>
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
            <CapitalizedReferenceTemplateComponent template="classic" />
          </PDFRender>
        </div>
        <Button variant="primary">Switch template</Button>
      </div>
    </div>
  );
};

export default PDFEditor;
