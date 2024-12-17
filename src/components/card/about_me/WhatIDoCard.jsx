import { useTheme } from '@emotion/react';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import bitmojiTakeCoffee from '../../../assets/imgs/bitmoji/take_coffee.png';

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
        paddingTop={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
        paddingBottom={{ xs: '1.25rem', sm: '2.5rem', md: '3.75rem', lg: '3.75rem', xl: '3.75rem' }}
      >
        <Grid2 size={3} />
        <Grid2 size={'grow'}>
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
        <Grid2 size={3} />
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
        <Grid2 size={0.5} />
        <Grid2 display='flex' size={2} alignItems='flex-end' justifyContent='center'>
          <Box
            component='img'
            alt='drinking coffee bitmoji'
            src={bitmojiTakeCoffee}
            sx={{
              width: { xs: '21.2rem', sm: '25.9rem', md: '30.6rem', lg: '35.3rem', xl: '40rem' },
              height: { xs: '21.2rem', sm: '25.9rem', md: '30.6rem', lg: '35.3rem', xl: '40rem' },
              transform: 'scaleX(-1)',
            }}
          />
        </Grid2>

        <Grid2
          size={'grow'}
          padding='0.75rem'
          paddingTop={{ xs: '0.25rem', sm: '1.5rem', md: '2.75rem', lg: '2.75rem', xl: '2.75rem' }}
          paddingBottom={{ xs: '0.25rem', sm: '1.5rem', md: '2.75rem', lg: '2.75rem', xl: '2.75rem' }}
        >
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '1.48rem', sm: '1.8rem', md: '2.14rem', lg: '2.47rem', xl: '2.8rem' }}
              paddingLeft={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
              sx={{ color: theme.palette.primary.light }}
            >
              Data processing, analysis and visualisation
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
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
              fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
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
              fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
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
        <Grid2 size={0.5} />
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
        <Grid2 size={4} />

        <Grid2
          size={'grow'}
          padding='0.75rem'
          paddingTop={{ xs: '0.25rem', sm: '1.5rem', md: '2.75rem', lg: '2.75rem', xl: '2.75rem' }}
          paddingBottom={{ xs: '0.25rem', sm: '1.5rem', md: '2.75rem', lg: '2.75rem', xl: '2.75rem' }}
        >
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '1.48rem', sm: '1.8rem', md: '2.14rem', lg: '2.47rem', xl: '2.8rem' }}
              paddingLeft={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
              sx={{ color: theme.palette.primary.light }}
            >
              IA and Machine Learning development<span style={{ fontWeight: '500' }}></span>
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
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
        <Grid2 size={0.5} />
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
        <Grid2 size={1} />

        <Grid2
          size={'grow'}
          padding='0.75rem'
          paddingTop={{ xs: '0.25rem', sm: '1.5rem', md: '2.75rem', lg: '2.75rem', xl: '2.75rem' }}
          paddingBottom={{ xs: '0.25rem', sm: '1.5rem', md: '2.75rem', lg: '2.75rem', xl: '2.75rem' }}
        >
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='headerSectionMono'
              fontSize={{ xs: '1.48rem', sm: '1.8rem', md: '2.14rem', lg: '2.47rem', xl: '2.8rem' }}
              paddingLeft={{ xs: '2.5rem', sm: '3.75rem', md: '5rem', lg: '6.25rem', xl: '7.5rem' }}
              sx={{ color: theme.palette.primary.light }}
            >
              Side Development skills
            </Typography>

            <Typography
              variant='subHeaderSectionMono'
              fontSize={{ xs: '0.99rem', sm: '1.21rem', md: '1.43rem', lg: '1.65rem', xl: '1.875rem' }}
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
        <Grid2 size={0.5} />
      </Grid2>
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default WhatIDoCard;
