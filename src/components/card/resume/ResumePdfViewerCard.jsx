import { Grid2 } from '@mui/material';
import { Document, Page, pdfjs } from 'react-pdf';
import { useTheme } from '@emotion/react';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import myResumeDark from '../../../assets/docs/cv_Antonetti_Levis_2025_dark_en_portfolio.pdf';
import myResumeLight from '../../../assets/docs/cv_Antonetti_Levis_2025_light_en_portfolio.pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/legacy/build/pdf.worker.min.js', import.meta.url).toString();
pdfjs.GlobalWorkerOptions.isEvalSupported = false;

const ResumePdfViewerCard = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';
  return (
    <Grid2 container size={12}>
      <Grid2 size={'grow'} />
      <Grid2
        display={{ xs: 'none', lg: 'flex' }}
        size={'auto'}
        direction='column'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '141.25rem',
          boxShadow: `0px 0px 50px -25px  ${theme.palette.primary.main}`,
        }}
      >
        <Document file={isDarkMode ? myResumeDark : myResumeLight}>
          <Page pageNumber={1} width={1000} height={1200} />
        </Document>
      </Grid2>
      {/* -------------------- */}
      <Grid2
        display={{ xs: 'none', sm: 'none', md: 'flex', lg: 'none' }}
        size={'auto'}
        direction='column'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '113.2rem',
          boxShadow: `0px 0px 50px -25px  ${theme.palette.primary.main}`,
        }}
      >
        <Document file={isDarkMode ? myResumeDark : myResumeLight}>
          <Page pageNumber={1} width={800} height={1000} />
        </Document>
      </Grid2>
      {/* -------------------- */}
      <Grid2
        display={{ xs: 'none', sm: 'flex', md: 'none', lg: 'none' }}
        size={'auto'}
        direction='column'
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '77.5rem',
          boxShadow: `0px 0px 50px -25px  ${theme.palette.primary.main}`,
        }}
      >
        <Document file={isDarkMode ? myResumeDark : myResumeLight}>
          <Page pageNumber={1} width={550} height={750} />
        </Document>
      </Grid2>
      {/* -------------------- */}
      <Grid2
        display={{ xs: 'flex', sm: 'none', md: 'none', lg: 'none' }}
        size={'auto'}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '46rem',
          boxShadow: `0px 0px 50px -25px  ${theme.palette.primary.main}`,
        }}
      >
        <Document file={isDarkMode ? myResumeDark : myResumeLight}>
          <Page pageNumber={1} width={325} height={425} />
        </Document>
      </Grid2>
      <Grid2 size={'grow'} />
    </Grid2>
  );
};

export default ResumePdfViewerCard;
