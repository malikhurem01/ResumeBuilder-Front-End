import React, { useState, useCallback } from 'react';
import ClassicTemplate from '../Templates/ClassicTemplate/ClassicTemplate';
import PDFRender from './PDFRender';

import classes from './PDFEditor.module.css';
import EditorForm from './EditorForm';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Button } from 'react-bootstrap';

const PDFEditor = () => {
  const [inputData, setInputData] = useState({});

  const [pdfDocument, setPdfDocument] = useState(<div></div>);

  const [isPDFLoading, setIsPDFLoading] = useState(false);

  const handleInputData = useCallback(data => {
    setInputData(data);
  }, []);

  const handlePDFLoading = useCallback(value => {
    setIsPDFLoading(value);
  }, []);

  const handleUpdateDocument = useCallback(document => {
    setPdfDocument(document);
  }, []);

  return (
    <div className={classes.container}>
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
      </div>
      <div className={classes.viewer}>
        <div className={classes.renderer}>
          {isPDFLoading && <div className={classes.overlay}>Rendering...</div>}
          <PDFRender>
            <ClassicTemplate
              handleUpdateDocument={handleUpdateDocument}
              data={inputData}
            />
          </PDFRender>
        </div>
      </div>
    </div>
  );
};

export default PDFEditor;
