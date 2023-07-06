import { PDFViewer } from '@react-pdf/renderer';

const PDFRender = ({ children }) => {
  return (
    <PDFViewer showToolbar={false} height={777} width={555}>
      {children}
    </PDFViewer>
  );
};

export default PDFRender;
