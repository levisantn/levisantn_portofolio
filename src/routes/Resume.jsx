import { Grid2 } from '@mui/material';
import MyResumeCard from '../components/card/resume/MyResumeCard';
import ResumePdfViewerCard from '../components/card/resume/ResumePdfViewerCard';
import DownloadResumeCard from '../components/card/resume/DownloadResumeCard';

const Resume = () => {
  return (
    <Grid2 container direction='column'>
      <MyResumeCard />
      {/* -------------------------------- */}
      <ResumePdfViewerCard />
      {/* -------------------------------- */}
      <DownloadResumeCard />
    </Grid2>
  );
};

export default Resume;
