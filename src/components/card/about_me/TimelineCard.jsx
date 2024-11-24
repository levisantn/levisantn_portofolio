import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Grid2, Stack, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';

const TimelineCardHome = () => {
  const theme = useTheme();
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='5rem'
        paddingBottom='2.5rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          paddingLeft={'1rem'}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Typography
            variant='h2'
            sx={{
              fontWeight: '600',
              fontSize: '3.5rem',
              wordSpacing: '-0.5rem',
              fontFamily: 'var(--mono-font)',
              color: 'primary.light',
            }}
          >
            Education & Experiences
          </Typography>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        borderRadius='1rem'
        sx={{
          backgroundColor: 'background.default',
          height: 'grow',
        }}
      >
        <Grid2 display='flex' size={1} borderRadius='1rem'></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          sx={{
            justifyContent: 'center',
          }}
        >
          <Timeline position='alternate-reverse' sx={{ paddingTop: '2.5rem' }}>
            <TimelineItem>
              <TimelineSeparator>
                <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                  2024
                </Typography>
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-end',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    Tableau Business Intelligence Analyst Professional Certiﬁcate
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Coursera
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    Tableau software ・data analysis & management ・data visualization ・data presentation ・dashboards
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.light' }} />
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginLeft='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-start',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    Google Advanced Data Analytics Professional Certiﬁcate
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Coursera
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    data analysis and processing ・EDA ・statistical analysis ・regression models ・A/B testing
                    ・machine learning ・predictive modeling ・data visualization ・Tableau software
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                  2023
                </Typography>
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-end',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    Master&apos;s Degree in Data Science and Artificial Intelligence
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Paul Sabatier University - Toulouse
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    machine learning • deep learning • data processing • data visualization computer vision • database
                    management system • project management • reinforcement learning • decision making and planning
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.light' }} />
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginLeft='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-start',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                    GIS Developer - Analyst
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: '500' }}>
                    Operational methodology development for urban fabric morphological segmentation
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Cerema Occitanie - Year 5, intenrship - Toulouse
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    state-of-the-art • development of a data processing pipeline for raster and vector images •
                    implementation of computer vision algorithms • results communication • GIS • data processing •
                    satellite image processing • superpixels • Geopandas • QGIS • GDAL
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.light' }} />
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-end',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                    pipeline development and maintenance, data analysis
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: '500' }}>
                    Maintenance and improvement of an information extraction pipeline in the context of social media
                    crisis management.
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Computer Science Research Institute (IRIT) - Year 4, internship - Toulouse
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    data processing • data mining • API scraping • maintenance and addition of functionalities to the
                    web interface (dashboard) • deployment and management of the web interface • communication of
                    results • JavaScript • React
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.light' }} />
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginLeft='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-start',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                    Data processing and analysis, interpretation of ML models
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: '500' }}>
                    Study of the robustness of regression Machine Learning models, according to the relevance and
                    presence of input data (In the context of a PhD)
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Computer Science Research Institute (IRIT) - study project - Toulouse
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    data processing • data imputation • data analysis • implementation and comparison of Machine
                    Learning models • communication of results • linear regression • Random Forest • KNN • SVM • neural
                    networks • XGB
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                  2021
                </Typography>
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-end',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    Bachelor&apos;s degree in Computer Science, Year 3
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    Paul Sabatier University - Toulouse
                  </Typography>
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    Dual Degree in Mathematics and Computer Science (Years 1 and 2)
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    National University Institute Champollion - Albi
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    algebra • analysis • statistics • object-oriented programming • data structure and modeling •
                    algorithms • functional programming • project management • databases • software engineering •
                    computer security
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: 'primary.light' }} />
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginLeft='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-start',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                    development, data visualization
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: '500' }}>
                    Creation of a Home Assistant dashboard for the purpose of utilizing and analyzing data gathered from
                    multiple sensors installed across the University Paul Sabatier sites.
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    &quot;neoCampus data visualization and automation&quot; study project - Toulouse
                  </Typography>

                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    data analysis • data visualization • creation of an interactive dashboard • Grafana
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                  2017
                </Typography>
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='1rem'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-end',
                    transition: 'all 0.5s ease-out',
                    '&:hover': {
                      boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                      transform: 'scale(1.025)',
                      transition: 'all 0.25s ease-out',
                    },
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500' }}>
                    French Baccalaureate in Science with Mathematics spec.
                  </Typography>
                  <Typography
                    variant='h5'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                  >
                    High School of Lapérouse - Albi
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                  >
                    with honors
                  </Typography>
                </Stack>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Grid2>
        <Grid2 display='flex' size={1} borderRadius='1rem'></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default TimelineCardHome;
