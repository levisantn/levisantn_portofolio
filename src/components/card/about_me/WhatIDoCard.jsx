import { useTheme } from '@emotion/react';
import { Box, Grid2, Stack, Typography } from '@mui/material';

const WhatIDoCard = () => {
  const theme = useTheme();
  return (
    <Grid2 container size={12} paddingLeft='2.75rem' paddingRight='2.75rem' spacing='0.75rem'>
      <Grid2
        container
        paddingTop='2.5rem'
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
            justifyContent: 'flex-start',
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
            What I do?
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
        sx={{
          backgroundColor: 'primary.hover2',
          height: 'auto',
          borderRadius: '0.5rem',
          transition: 'all 0.5s ease-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
            transform: 'scale(1.025)',
            transition: 'all 0.25s ease-out',
          },
        }}
      >
        <Grid2
          display='flex'
          size={0.5}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          sx={{
            alignItems: 'flex-end',
            justifyContent: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Box
            component='img'
            alt='drinking soda bitmoji '
            src='/src/assets/imgs/bitmoji/take_coffee.png'
            sx={{
              width: '380px',
              height: '380px',
              transform: 'scaleX(-1)',
            }}
          />
        </Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          spacing={'0.5rem'}
          padding={'0.5rem'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
        >
          <Stack direction='column' spacing={'3.75rem'}>
            <Typography
              variant='h3'
              sx={{
                paddingLeft: '5rem',
                paddingBottom: '1.25rem',
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              Data processing, analysis and visualisation<span style={{ fontWeight: '500' }}></span>
            </Typography>

            <Typography
              variant='h6'
              sx={{
                fontFamily: 'var(--mono-font)',
                fontWeight: '400',
                color: 'text.secondary',
                whiteSpace: 'pre-wrap',
              }}
            >
              𑁋 Extract, transform, and load data from various sources.
              <br />
              𑁋 Ensuring data quality and integrity through data cleaning, validation, and normalization techniques.
            </Typography>

            <Typography
              variant='h6'
              sx={{
                fontFamily: 'var(--mono-font)',
                fontWeight: '400',
                color: 'text.secondary',
                whiteSpace: 'pre-wrap',
              }}
            >
              𑁋 Applying statistical modeling techniques to analyze data.
              <br />
              𑁋 Using hypothesis testing, regression analysis, and time series analysis to uncover patterns and trends.
              <br />
              𑁋 Interacting with sql databases to send queries and retrieve, update and manipulate relevant data.
            </Typography>

            <Typography
              variant='h6'
              sx={{
                fontFamily: 'var(--mono-font)',
                fontWeight: '400',
                color: 'text.secondary',
                whiteSpace: 'pre-wrap',
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
        <Grid2
          display='flex'
          size={0.5}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
          borderRadius: '0.5rem',
          transition: 'all 0.5s ease-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
            transform: 'scale(1.025)',
            transition: 'all 0.25s ease-out',
          },
        }}
      >
        <Grid2
          display='flex'
          size={4}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          spacing={'0.5rem'}
          padding={'0.5rem'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack direction='column' spacing={'3.75rem'}>
            <Typography
              variant='h3'
              sx={{
                paddingLeft: '5rem',
                paddingBottom: '1.25rem',
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              IA and Machine Learning development<span style={{ fontWeight: '500' }}></span>
            </Typography>

            <Typography
              variant='h6'
              sx={{
                fontFamily: 'var(--mono-font)',
                fontWeight: '400',
                color: 'text.secondary',
                whiteSpace: 'pre-wrap',
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
        <Grid2
          display='flex'
          size={0.5}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2
        container
        size={12}
        sx={{
          backgroundColor: 'primary.hover2',
          height: 'auto',
          borderRadius: '0.5rem',
          transition: 'all 0.5s ease-out',
          '&:hover': {
            boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
            transform: 'scale(1.025)',
            transition: 'all 0.25s ease-out',
          },
        }}
      >
        <Grid2
          display='flex'
          size={1}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          spacing={'0.5rem'}
          padding={'0.5rem'}
          paddingTop='2.5rem'
          paddingBottom='2.5rem'
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack direction='column' spacing={'3.75rem'}>
            <Typography
              variant='h3'
              sx={{
                paddingLeft: '5rem',
                paddingBottom: '1.25rem',
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              Side Development skills
            </Typography>

            <Typography
              variant='h6'
              sx={{
                fontFamily: 'var(--mono-font)',
                fontWeight: '400',
                color: 'text.secondary',
                whiteSpace: 'pre-wrap',
              }}
            >
              𑁋 using git for version control and collaborating
              <br />
              𑁋 Proficient in Linux environments and bash scripting
              <br />
              𑁋 Building Frontend Web interface using React.
            </Typography>
          </Stack>
        </Grid2>
        <Grid2
          display='flex'
          size={0.5}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
      {/* -------------------------------- */}
    </Grid2>
  );
};

export default WhatIDoCard;
