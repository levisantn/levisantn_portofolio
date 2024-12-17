import { useTheme } from '@emotion/react';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import bitmojiTakeCoffee from '../../../assets/imgs/bitmoji/take_coffee_2.png';

const WhatIDoCard = () => {
  const theme = useTheme();
  return (
    <Grid2
      container
      spacing={{ xs: '0rem', md: '1rem' }}
      paddingLeft={{ xs: '0rem', md: '3.25rem' }}
      paddingRight={{ xs: '0rem', md: '3.25rem' }}
    >
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        padding={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
        paddingBottom={{ xs: '0rem', sm: '0rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
        spacing={{ xs: '1.25rem', sm: '2.5rem', md: '0rem', lg: '0rem', xl: '0rem' }}
      >
        <Grid2 display={{ xs: 'none', md: 'flex' }} size={3} />
        <Grid2 display={{ xs: 'flex', md: 'none' }} alignItems='flex-end' justifyContent='center'>
          <Box
            component='img'
            alt='drinking coffee bitmoji'
            src={bitmojiTakeCoffee}
            sx={{
              width: { xs: '14.6rem', sm: '17.8rem', md: '21rem', lg: '24.3rem', xl: '27.5rem' },
              height: { xs: '19.8rem', sm: '24.3rem', md: '28.7rem', lg: '33.1rem', xl: '37.5rem' },
              transform: 'scaleX(-1)',
            }}
          />
        </Grid2>
        <Grid2 size={'grow'} display='flex' alignItems='center'>
          <Typography
            variant='headerSection'
            fontSize={{ xs: '1.85rem', sm: '2.26rem', md: '2.68rem', lg: '3.09rem', xl: '3.5rem' }}
            sx={{
              wordSpacing: '0.25rem',
              '& span:first-of-type': { color: theme.palette.primary.main },
            }}
          >
            What I do ?
          </Typography>
        </Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
          backgroundColor: theme.palette.primary.hover2,
          transition: 'all 0.5s ease-out',
          '&:hover': {
            boxShadow: { xs: 'none', md: `0rem 0rem 0.75rem ${theme.palette.primary.light}` },
            transform: { xs: 'none', md: 'scale(1.025)' },
            transition: 'all 0.25s ease-out',
          },
        }}
      >
        <Grid2 display={{ xs: 'none', md: 'flex' }} size='auto' alignItems='flex-end' justifyContent='center'>
          <Box
            component='img'
            alt='drinking coffee bitmoji'
            src={bitmojiTakeCoffee}
            sx={{
              width: { xs: '14.6rem', sm: '17.8rem', md: '21rem', lg: '24.3rem', xl: '27.5rem' },
              height: { xs: '19.8rem', sm: '24.3rem', md: '28.7rem', lg: '33.1rem', xl: '37.5rem' },
              transform: 'scaleX(-1)',
            }}
          />
        </Grid2>

        <Grid2
          size={'grow'}
          display='flex'
          justifyContent='flex-start'
          padding={{ xs: '2.5rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
        >
          <Stack
            direction='column'
            spacing={{ xs: '1.25rem', sm: '1.25rem', md: '2.5rem', lg: '2.5rem', xl: '2.5rem' }}
          >
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '1.27rem', sm: '1.53rem', md: '1.83rem', lg: '2.12rem', xl: '2.4rem' }}
              paddingLeft={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
              sx={{ color: theme.palette.primary.light }}
            >
              Data processing, analysis and visualisation
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.85rem', sm: '1.03rem', md: '1.22rem', lg: '1.41rem', xl: '1.6rem' }}
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              𑁋 Extract, transform, and load data from various sources.
              <br />
              𑁋 Ensuring data quality and integrity through data cleaning, validation, and normalization techniques.
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.85rem', sm: '1.03rem', md: '1.22rem', lg: '1.41rem', xl: '1.6rem' }}
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              𑁋 Applying statistical modeling techniques to analyze data.
              <br />
              𑁋 Using hypothesis testing, regression analysis, and time series analysis to uncover patterns and trends.
              <br />
              𑁋 Interacting with SQL databases to send queries and retrieve, update and manipulate relevant data.
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.85rem', sm: '1.03rem', md: '1.22rem', lg: '1.41rem', xl: '1.6rem' }}
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              𑁋 Creating data visualizations using tools like Tableau, Qgis and Python libraries (Matplotlib, Seaborn,
              Plotly).
              <br />
              𑁋 Developing interactive dashboards.
              <br />
              𑁋 Communicating data insights effectively, while adapting to audience.
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
          backgroundColor: theme.palette.background.default,
          transition: 'all 0.5s ease-out',
          '&:hover': {
            boxShadow: { xs: 'none', md: `0rem 0rem 0.75rem ${theme.palette.primary.light}` },
            transform: { xs: 'none', md: 'scale(1.025)' },
            transition: 'all 0.25s ease-out',
          },
        }}
      >
        <Grid2
          size={'grow'}
          display='flex'
          justifyContent='flex-end'
          padding={{ xs: '2.5rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
        >
          <Stack
            direction='column'
            spacing={{ xs: '1.25rem', sm: '1.25rem', md: '2.5rem', lg: '2.5rem', xl: '2.5rem' }}
          >
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '1.27rem', sm: '1.53rem', md: '1.83rem', lg: '2.12rem', xl: '2.4rem' }}
              paddingLeft={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
              sx={{ color: theme.palette.primary.light }}
            >
              IA and Machine Learning development<span style={{ fontWeight: '500' }}></span>
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.85rem', sm: '1.03rem', md: '1.22rem', lg: '1.41rem', xl: '1.6rem' }}
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              𑁋 Developing ML models for various tasks such as: segmentation, classification, regression, clustering.
              <br />
              𑁋 Utilizing advanced ML techniques for Computer Vision tasks like CNNs and Autoencoders.
              <br />
              𑁋 Evaluating the performance and fine-tuning ML models to improve accuracy and efficiency.
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
          backgroundColor: theme.palette.primary.hover2,
          transition: 'all 0.5s ease-out',
          '&:hover': {
            boxShadow: { xs: 'none', md: `0rem 0rem 0.75rem ${theme.palette.primary.light}` },
            transform: { xs: 'none', md: 'scale(1.025)' },
            transition: 'all 0.25s ease-out',
          },
        }}
      >
        <Grid2
          size={'grow'}
          display='flex'
          justifyContent='flex-start'
          padding={{ xs: '2.5rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
        >
          <Stack
            direction='column'
            spacing={{ xs: '1.25rem', sm: '1.25rem', md: '2.5rem', lg: '2.5rem', xl: '2.5rem' }}
          >
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '1.27rem', sm: '1.53rem', md: '1.83rem', lg: '2.12rem', xl: '2.4rem' }}
              paddingLeft={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '5rem', xl: '6.25rem' }}
              sx={{ color: theme.palette.primary.light }}
            >
              Side Development skills
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.85rem', sm: '1.03rem', md: '1.22rem', lg: '1.41rem', xl: '1.6rem' }}
              sx={{
                color: theme.palette.text.secondary,
              }}
            >
              𑁋 Leveraging Git for version control and collaboration.
              <br />
              𑁋 Proficient in Linux environments and bash scripting.
              <br />
              𑁋 Building Frontend Web interface using React.
            </Typography>
          </Stack>
        </Grid2>
      </Grid2>
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default WhatIDoCard;
