import { Grid2 } from '@mui/material';
import MyCVCard from '../components/card/cv/MyCVCard';
import CVPdfViewerCard from '../components/card/cv/CVPdfViewerCard';
import DownloadCVCard from '../components/card/cv/DownloadCVCard';

const CV = () => {
  return (
    <Grid2 container direction='column'>
      <MyCVCard />
      {/* -------------------------------- */}
      <CVPdfViewerCard />
      {/* -------------------------------- */}
      <DownloadCVCard />
    </Grid2>
  );
};

export default CV;
