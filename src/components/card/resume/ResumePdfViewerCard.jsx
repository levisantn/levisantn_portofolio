import { Grid2 } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css'; // Import TextLayer styles
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'; // Import AnnotationLayer styles (optional)
import myResume from '../../../assets/docs/cv_Antonetti_Levis_2024_dark_fr.pdf';
import { useTheme } from '@emotion/react';

pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

const ResumePdfViewerCard = () => {
  const theme = useTheme();
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='2.5rem'
        paddingBottom='3.75rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2 display='flex' size={'grow'} borderRadius={1}></Grid2>

        <Grid2
          display='flex'
          size={'auto'}
          direction='column'
          borderRadius={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: '141.25rem',
            boxShadow: `0px 0px 50px -15px  ${theme.palette.primary.main}`,
          }}
        >
          <Document file={myResume}>
            <Page pageNumber={1} width={1000} height={1200} />
          </Document>
        </Grid2>
        <Grid2 display='flex' size={'grow'} borderRadius={1}></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default ResumePdfViewerCard;
