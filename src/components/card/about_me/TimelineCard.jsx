import Timeline from '@mui/lab/Timeline';
import { Grid2, Typography } from '@mui/material';
import TimelineEducationCard from './TimelineEducationCard';
import TimelineExperienceCard from './TimelineExperienceCard';

const TimelineCardHome = () => {
  return (
    <Grid2 container size={12}>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        paddingTop={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
        paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
      >
        <Grid2 display='flex' size={'grow'} justifyContent='center'>
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
          >
            Education & Experiences
          </Typography>
        </Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2 container size={12}>
        <Grid2 size={0.5} />
        <Grid2 size={'grow'}>
          <Timeline position='alternate-reverse' sx={{ paddingTop: '2.5rem' }}>
            <TimelineEducationCard
              year={'2024'}
              title={'Tableau Business Intelligence Analyst Professional Certificate'}
              subtitle={'Coursera'}
              description={
                'Tableau software ・data analysis & management ・data visualization ・data presentation ・dashboards'
              }
            />
            {/* -------------------------------- */}
            <TimelineEducationCard
              year={''}
              title={'Google Advanced Data Analytics Professional Certificate'}
              subtitle={'Coursera'}
              description={
                'data analysis and processing ・EDA ・statistical analysis ・regression models ・A/B testing・machine learning ・predictive modeling ・data visualization ・Tableau software'
              }
              alignItems='flex-start'
            />
            {/* -------------------------------- */}
            <TimelineEducationCard
              year={'2023'}
              title={"Master's Degree in Data Science and Artificial Intelligence"}
              subtitle={'Paul Sabatier University - Toulouse'}
              description={
                'machine learning • deep learning • data processing • data visualization • computer vision • database management system • project management • reinforcement learning • decision making and planning'
              }
            />
            {/* -------------------------------- */}
            <TimelineExperienceCard
              year={''}
              title={'GIS Developer - Analyst'}
              subject={'Operational methodology development for urban fabric morphological segmentation'}
              subtitle={'Cerema Occitanie - Year 5, internship - Toulouse'}
              description={
                'state-of-the-art • development of a data processing pipeline for raster and vector images • implementation of computer vision algorithms • results communication • GIS • data processing • satellite image processing • superpixels • Geopandas • QGIS • GDAL'
              }
              alignItems='flex-start'
            />
            {/* -------------------------------- */}
            <TimelineExperienceCard
              year={''}
              title={'Pipeline development and maintenance, data analysis'}
              subject={
                'Maintenance and improvement of an information extraction pipeline in the context of social media crisis management.'
              }
              subtitle={'Computer Science Research Institute (IRIT) - Year 4, internship - Toulouse'}
              description={
                'data processing • data mining • API scraping • maintenance and addition of functionalities to the web interface (dashboard) • deployment and management of the web interface • communication of results • JavaScript • React'
              }
            />
            {/* -------------------------------- */}
            <TimelineExperienceCard
              year={''}
              title={'Data processing and analysis, interpretation of ML models'}
              subject={
                'Study of the robustness of regression Machine Learning models, according to the relevance and presence of input data (In the context of a PhD)'
              }
              subtitle={'Computer Science Research Institute (IRIT) - study project - Toulouse'}
              description={
                'data processing • data imputation • data analysis • implementation and comparison of Machine Learning models • communication of results • linear regression • Random Forest • KNN • SVM • neural networks • XGB'
              }
              alignItems='flex-start'
            />
            {/* -------------------------------- */}
            <TimelineEducationCard
              year={'2021'}
              title={"Bachelor's degree in Computer Science, Year 3"}
              subtitle={'Paul Sabatier University - Toulouse'}
              title2={'Dual Degree in Mathematics and Computer Science (Years 1 and 2)'}
              subtitle2={'National University Institute Champollion - Albi'}
              description={
                'algebra • analysis • statistics • object-oriented programming • data structure and modeling • algorithms • functional programming • project management • databases • software engineering • computer security'
              }
            />
            {/* -------------------------------- */}
            <TimelineExperienceCard
              year={''}
              title={'Development, data visualization'}
              subject={
                'Creation of a Home Assistant dashboard for the purpose of utilizing and analyzing data gathered from multiple sensors installed across the University Paul Sabatier sites.'
              }
              subtitle={'"neoCampus data visualization and automation" study project - Toulouse'}
              description={'data analysis • data visualization • creation of an interactive dashboard • Grafana'}
              alignItems='flex-start'
            />
            {/* -------------------------------- */}
            <TimelineEducationCard
              year={'2017'}
              title={'French Baccalaureate in Science with Mathematics spec.'}
              subtitle={'High School of Lapérouse - Albi'}
              description={'with honors'}
            />
          </Timeline>
        </Grid2>
        <Grid2 size={0.5} />
      </Grid2>
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default TimelineCardHome;
