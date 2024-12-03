import { useTheme } from '@emotion/react';
import { Box, Grid2, Stack, Typography } from '@mui/material';
import svgPython from '../../../assets/imgs/icons/color/python.svg';
import svgPandas from '../../../assets/imgs/icons/color/pandas.svg';
import svgMatplotLib from '../../../assets/imgs/icons/color/matplotlib.svg';
import svgScikitLearn from '../../../assets/imgs/icons/color/scikit-learn.svg';
import svgPytorch from '../../../assets/imgs/icons/color/pytorch.svg';
import svgMySql from '../../../assets/imgs/icons/color/mysql.svg';
import svgTableau from '../../../assets/imgs/icons/color/tableau.svg';
import svgLinux from '../../../assets/imgs/icons/color/linux.svg';
import svgGit from '../../../assets/imgs/icons/color/git.svg';
import svgQgis from '../../../assets/imgs/icons/color/qgis.svg';
import svgJavascript from '../../../assets/imgs/icons/color/javascript.svg';
import svgReact from '../../../assets/imgs/icons/color/react.svg';

const SkillsetCardHome = () => {
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
            Skillset
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
        paddingTop='2.5rem'
        paddingBottom='2.5rem'
        spacing='1.25rem'
        size={12}
        sx={{
          backgroundColor: 'background.default',
          height: 'auto',
        }}
      >
        {/* --------------- row 1 --------------- */}
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
        <Grid2
          container
          size={8}
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                python
              </Typography>
              <Box component='img' alt='svgPython' src={svgPython} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                pandas
              </Typography>
              <Box component='img' alt='svgPandas' src={svgPandas} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                Matplotlib
              </Typography>
              <Box component='img' alt='svg MatplotLib' src={svgMatplotLib} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                scikit-learn
              </Typography>
              <Box component='img' alt='svg cikitLearn' src={svgScikitLearn} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                pytorch
              </Typography>
              <Box component='img' alt='svg pytorch' src={svgPytorch} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
        </Grid2>
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        {/* --------------- row 2 --------------- */}
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
        <Grid2
          container
          size={8}
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                mySql
              </Typography>
              <Box component='img' alt='svg mysql' src={svgMySql} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                tableau
              </Typography>
              <Box component='img' alt='svg Tableau' src={svgTableau} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                linux
              </Typography>
              <Box component='img' alt='svg Linux' src={svgLinux} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                git
              </Typography>
              <Box component='img' alt='svg Git' src={svgGit} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
        </Grid2>
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>

        {/* --------------- row 3 --------------- */}
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
        <Grid2
          container
          size={8}
          borderRadius={1}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'background.paper',
          }}
        >
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                qgis
              </Typography>
              <Box component='img' alt='svg Qgis' src={svgQgis} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                javascript
              </Typography>
              <Box component='img' alt='svg Javascript' src={svgJavascript} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
          {/* -------------------------------- */}
          <Grid2
            display='flex'
            size={2}
            borderRadius={1}
            sx={{
              alignItems: 'center',
              justifyContent: 'center',
              width: '20rem',
              height: '12.5rem',
              backgroundColor: 'primary.hover2',
              transition: 'all 0.5s ease-out',
              '&:hover': {
                boxShadow: `0rem 0rem 0.75rem ${theme.palette.primary.light}`,
                transform: 'scale(1.025)',
                transition: 'all 0.25s ease-out',
              },
            }}
          >
            <Stack
              direction='column-reverse'
              sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '100%',
                height: '100%',
              }}
            >
              <Typography
                variant='code'
                sx={{
                  padding: '0.5rem',
                  paddingRight: '1rem',
                  width: '100%',
                  textAlign: 'right',
                  fontWeight: '400',
                  fontSize: '1.25rem',
                  color: 'text.secondary',
                }}
              >
                react
              </Typography>
              <Box component='img' alt='svg React' src={svgReact} sx={{ width: '75px', height: 'auto' }} />
            </Stack>
          </Grid2>
        </Grid2>
        <Grid2
          display='flex'
          size={2}
          borderRadius={1}
          // sx={{ backgroundColor: 'background.paper' }}
        ></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default SkillsetCardHome;
