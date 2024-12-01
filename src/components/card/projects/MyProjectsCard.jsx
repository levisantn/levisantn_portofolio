import { Grid2, Stack, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';
import imgPortofolio from '../../../assets/imgs/projects/portofolio_website_cover.png';
import imgUserChurnPrediction from '../../../assets/imgs/projects/user_churn_prediction_waze.png';
import imgEmployeeRetentionPrediction from '../../../assets/imgs/projects/employee_retention_prediction.png';
import imgTokyo2020 from '../../../assets/imgs/projects/tokyo_2020.png';
import imgRapportStageCerema from '../../../assets/imgs/projects/rapport_de_stage_Cerema_cover.png';

const MyProjectsCard = () => {
  return (
    <Grid2 container size={12}>
      <Grid2
        container
        paddingTop='3.75rem'
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
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack
            direction='column'
            spacing='1rem'
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
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
              My Projects
            </Typography>
            <Typography
              variant='h5'
              sx={{ textAlign: 'center', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
            >
              Here are a few project I&apos;ve <span>worked</span> on.
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* ---------------------------------------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
          height: 'auto',
        }}
      >
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          container
          size={'grow'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          spacing='3.75rem'
          borderRadius={1}
          sx={
            {
              // backgroundColor: 'background.paper',
            }
          }
        >
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgPortofolio}
              link='https://github.com/levisantn/react_website'
              title='Portofolio website with React + MUI'
              description={
                "Dive into my digital portfolio, the very website you're currently viewing. Discover my work and check out my projects. Feel free to fork this repository as a starting point to create your own portofolio."
              }
            />
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgUserChurnPrediction}
              link='https://github.com/levisantn/user_churn_prediction'
              title='Predicting user churn behavior analytic project'
              description={
                'This project aims to prevent monthly user churn on the Waze app, By analyzing the provided dataset of user information and behavior, we seek to understand why users churn and build a predictive model to identify users at risk of leaving the platform.'
              }
            />
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgEmployeeRetentionPrediction}
              link='https://github.com/levisantn/employee_retention_prediction'
              title='Predictive Modeling for Employee Retention analytic project'
              description={
                'This project seeks to improve employee retention by analyzing the data collected by the HR department of the company. The purpose of this analysis is to find the key factors driving employee turnover by building a effective model that predicts whether or not an employee will leave the company.'
              }
            />
          </Grid2>
        </Grid2>

        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>

      {/* ---------------------------------------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
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
          container
          size={'grow'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          spacing='3.75rem'
          borderRadius={1}
          sx={
            {
              // backgroundColor: 'background.paper',
            }
          }
        >
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgTokyo2020}
              link='https://github.com/levisantn/olympics_tokyo'
              title='A Data-Driven Overview at the Tokyo 2020 Olympics'
              description={
                'In this short project, I explored the Tokyo 2020 Olympic Games dataset. I performed data analysis and created visualizations to showcase key insights.'
              }
            />
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgRapportStageCerema}
              link='https://drive.google.com/file/d/1NPkMmMNxHBtXQY4zXDncXEzHXyDMHoo_/view?usp=sharing'
              title='Internship Report (FR version), Developer - Analyst SIG at Cerema'
              description={
                'As part of my end-of-study internship at Cerema Occitanie, I worked on a project focused on developing an automated pipeline for processing satellite imagery. The primary objective was to segment urban areas into coherent, homogeneous regions based on their morphological characteristics.'
              }
            />
          </Grid2>
          {/* -------------------------------- */}
          {/* <Grid2
            display='flex'
            size={'grow'}
            borderRadius={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ProjectCard
              img={imgEmployeeRetentionPrediction}
              link='https://github.com/levisantn/employee_retention_prediction'
              title='Predictive Modeling for Employee Retention analytic project'
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate '
              }
            />
          </Grid2> */}
        </Grid2>

        <Grid2
          display='flex'
          size={3}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default MyProjectsCard;
