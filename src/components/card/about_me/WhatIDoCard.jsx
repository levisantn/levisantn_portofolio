import { Box, Grid2, Stack, Typography } from '@mui/material';

const WhatIDoCard = () => {
  return (
    <Grid2 container size={12}>
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
          paddingLeft={'1rem'}
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
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='h3'
              sx={{
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
              - Designing and implementing robust data pipelines to extract, transform, and load data from various
              sources.
              <br />- Ensuring data quality and integrity through data cleaning, validation, and normalization
              techniques.
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
              - Applying statistical modeling techniques to analyze data and draw meaningful conclusions.
              <br />
              - Using hypothesis testing, regression analysis, and time series analysis to uncover patterns and trends.
              <br />- notes on sql and database management
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
              - Creating data visualizations using tools like Tableau, Qgis, or Python libraries (Matplotlib, Seaborn,
              Plotly).
              <br />
              - Developing interactive dashboards.
              <br />- Communicating data insights effectively through clear and concise visualizations, while adapting
              to technical and non-technical audiences.
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
        }}
      >
        <Grid2
          display='flex'
          size={5}
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
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='h3'
              sx={{
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
              - Developing and deploying machine learning models for various tasks, such as segmentation,
              classification, regression, clustering.
              <br />- Utilizing advanced machine learning techniques for computer vision tasks like CNNs and
              Autoencoders.
              <br />- Evaluating the performance of machine learning models and fine-tuning them to improve accuracy and
              efficiency.
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
          paddingBottom='5rem'
          direction='column'
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
            // backgroundColor: 'background.paper',
          }}
        >
          <Stack direction='column' spacing={'2.5rem'}>
            <Typography
              variant='h3'
              sx={{
                fontWeight: '400',
                '& span:first-of-type': { color: 'primary.main' },
              }}
            >
              Diverse Development
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
              - using git for version control
              <br />- Confident with Linux distribution and bash scripting
              <br />- Some Web development, Building responsive website front end using React with Material UI
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
