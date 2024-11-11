import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Import TextLayer styles
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import AnnotationLayer styles (optional)
import myResume from '../../../assets/docs/cv_Antonetti_Levis_2024_dark_fr.pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const PdfViewer = () => {
  return (
    <>
      <Document file={myResume}>
        <Page pageNumber={1} width={200} height='auto' />
      </Document>
    </>
  );
};

export default PdfViewer;
