import React, { useState, useCallback } from 'react';
import Components from '../Templates/template-config';

const EditorContext = React.createContext({
  supportsImage: null,
  pdfDocument: null,
  isPDFLoading: null,
  inputData: null,
  setTemplateSupportsImage: () => {},
  CapitalizedReferenceTemplateComponent: () => {},
  handlePDFLoading: () => {},
  handleInputData: () => {},
  handleUpdateDocument: () => {}
});

export default EditorContext;

export const EditorContextProvider = ({ children }) => {
  const [supportsImage, setSupportsImage] = useState();

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

  const setTemplateSupportsImage = bool => {
    setSupportsImage(bool);
  };

  const handleUpdateDocument = useCallback(document => {
    setPdfDocument(document);
  }, []);

  const CapitalizedReferenceTemplateComponent = useCallback(
    ({ template }) => {
      const Component = Components[template].templateComponent;
      const { supportsImage } = Components[template].configuration;

      setTemplateSupportsImage(supportsImage);

      return (
        <Component
          data={inputData}
          handleUpdateDocument={handleUpdateDocument}
          isPDFLoading={isPDFLoading}
        />
      );
    },
    [inputData, handleUpdateDocument, isPDFLoading]
  );

  return (
    <EditorContext.Provider
      value={{
        supportsImage,
        pdfDocument,
        isPDFLoading,
        inputData,
        setTemplateSupportsImage,
        CapitalizedReferenceTemplateComponent,
        handlePDFLoading,
        handleInputData,
        handleUpdateDocument
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
