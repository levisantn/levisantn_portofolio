import { Grid2 } from '@mui/material';
import DownloadResumeCard from '../components/card/resume/DownloadResumeCard';
import ResumePdfViewerCard from '../components/card/resume/ResumePdfViewerCard';

const Resume = () => {
  return (
    <Grid2 container direction='column'>
      <DownloadResumeCard />
      {/* -------------------------------- */}
      <ResumePdfViewerCard />
    </Grid2>
  );
};

export default Resume;
