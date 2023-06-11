import { PDFViewer } from '@react-pdf/renderer';

const PDFRender = ({ children }) => {
  return (
    <PDFViewer showToolbar={false} height={775} width={550}>
      {children}
    </PDFViewer>
  );
};

export default PDFRender;
