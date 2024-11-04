import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Box, Divider, Grid2, Stack, Typography } from '@mui/material';
const Aboutme = () => {
  return (
    <>
      <Grid2
        container
        padding={2}
        spacing={1}
        sx={{
          backgroundColor: 'background.default',
          flexDirection: 'column',
        }}
      >
        <Grid2
          container
          spacing={0.5}
          padding={0.5}
          size={12}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.paper',
            height: '40rem',
          }}
        >
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
          <Grid2
            display='flex'
            size={3}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-end',
              alignItems: 'center',
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
            spacing={0.5}
            padding={0.5}
            direction='column'
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Stack
              direction='column'
              spacing={'5rem'}
              sx={{
                justifyContent: 'center',
                alignItems: 'flex-start',
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '400',
                  '& span:first-of-type': { color: 'primary.main' },
                  paddingLeft: '5rem',
                }}
              >
                What I Do?<span style={{ fontWeight: '500' }}></span>
              </Typography>

              <Typography
                variant='h5'
                sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
              >
                My passion for computer science ignited in high School. I find joy in understanding the mechanisms of
                new technologies and am driven by the satisfaction of solving problems.
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
        </Grid2>
        {/* -------------------------------- */}
        <Divider
          sx={{
            borderColor: 'background.paper',
            borderWidth: 2,
            borderRadius: 1,
            // margin: '1rem',
          }}
        />
        {/* -------------------------------- */}
        <Grid2
          container
          spacing={0.5}
          padding={0.5}
          size={12}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.paper',
            height: '40rem',
          }}
        >
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>

          <Grid2
            display='flex'
            size={'grow'}
            spacing={0.5}
            padding={0.5}
            direction='column'
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}
          >
            <Stack
              direction='column'
              spacing={'5rem'}
              sx={{
                justifyContent: 'center',
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant='h2'
                sx={{
                  fontWeight: '400',
                  '& span:first-of-type': { color: 'primary.main' },
                  paddingRight: '5rem',
                }}
              >
                What Drives Me?
              </Typography>

              <Typography
                variant='h5'
                sx={{ fontWeight: '400', whiteSpace: 'pre-wrap', '& span:first-of-type': { color: 'primary.main' } }}
              >
                My passion for computer science ignited in high School. I find joy in understanding the mechanisms of
                new technologies and am driven by the satisfaction of solving problems.
              </Typography>
            </Stack>
          </Grid2>
          <Grid2
            display='flex'
            size={3}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              component='img'
              alt='drinking soda bitmoji '
              src='/src/assets/imgs/bitmoji/working_bubble.png'
              sx={{
                width: '300px',
                height: '300px',
              }}
            />
          </Grid2>
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
        </Grid2>
        {/* -------------------------------- */}
        <Divider
          sx={{
            borderColor: 'background.paper',
            borderWidth: 2,
            borderRadius: 1,
            // margin: '1rem',
          }}
        />
        {/* -------------------------------- */}
        <Grid2
          container
          spacing={0.5}
          padding={0.5}
          size={12}
          borderRadius={1}
          sx={{
            backgroundColor: 'background.paper',
            height: 'grow',
          }}
        >
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>

          <Grid2
            display='flex'
            size={'grow'}
            spacing={0.5}
            padding={0.5}
            direction='column'
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
              justifyContent: 'center',
            }}
          >
            <Timeline position='alternate-reverse' sx={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
              <TimelineItem>
                <TimelineSeparator>
                  <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                    2024
                  </Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingRight='2.5rem'
                    paddingTop='0.5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-end',
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
                      logiciel Tableau ・analyse & gestion de données・visualisation de données・présentation de données
                      ・ dashboards
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingLeft='5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-start',
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
                      analyse et traitement de données・EDA・analyses statistiques ・modèles de régression・A/B
                      test・apprentissage automatique ・modélisation prédictive・data visualisation ・logiciel Tableau
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                    2023
                  </Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingTop='0.5rem'
                    paddingRight='2.5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-end',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500' }}>
                      Master Data Science and Artiﬁcial Intelligence
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Université Paul Sabatier - Toulouse
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      apprentissage automatique • apprentissage profond • traitement de données • visualisation de
                      données • traitement du signal • système de gestion de base de données • gestion de projet •
                      apprentissage par renforcement • prise de décision et planiﬁcation
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingLeft='5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                      Développeur - Analyste SIG
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: '500' }}>
                      Développement d’une méthodologie opérationnelle de segmentation morphologique du tissu urbain
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Cerema Occitanie - stage M2 - Toulouse
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      réalisation d’un État de l’Art • élaboration d’un pipeline de traitement de données sur des images
                      rasters et vecteurs • Implémentation d&apos;algorithmes de vision par ordinateur • communication
                      des résultats • SIG • traitement de données • traitement d’image satellite • superpixels •
                      Geopandas • Qgis • Gdal
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingRight='2.5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-end',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                      Développement, maintien de pipeline et analyse de données
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: '500' }}>
                      Maintien et amélioration d’un pipeline d’extraction d’information, dans le contexte de la gestion
                      de crises via les réseaux sociaux.
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Institut de Recherche En Informatique (IRIT) - stage M1 - Toulouse
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      traitement de données • fouille de données • API scraping • maintien et ajout de fonctionnalités
                      sur l&apos;interface web (dashboard) • déploiement et gestion de l&apos;interface web •
                      communication des résultats • javascript • react
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingLeft='5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                      Traitement et analyse de données, interprétation de modèles de ML
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: '500' }}>
                      Étude sur la robustesse de modèles de Machine Learning de régression, en fonction de la pertinence
                      et de la présence des données d&apos;entrées (dans le cadre d&apos;une thèse)
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Institut de Recherche En Informatique (IRIT) - projet d&apos;étude - Toulouse
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      traitement de données • imputation de données • analyse de données • implémentation et comparaison
                      de modèles de Machine Learning • communication des résultats • linear regression • Random Forest •
                      KNN • SVM • réseau de neurones • XGB
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                    2021
                  </Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingRight='2.5rem'
                    paddingTop='0.5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-end',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500' }}>
                      Licence informatique (L3)
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Université Paul Sabatier - Toulouse
                    </Typography>
                    <Typography variant='h4' sx={{ fontWeight: '500' }}>
                      Double Licence mathématiques-informatique (L1-L2)
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Institut National Universitaire Champollion - Albi
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      algèbre • analyse • statistiques • prog. orientée objet • structure et modélisation de données •
                      algorithmique • prog. fonctionnelle • gestion de projet • base de données • génie logiciel •
                      sécurité informatique
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingBottom='3rem'
                    paddingLeft='5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-start',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                      Développement, visualisation de données
                    </Typography>
                    <Typography variant='h5' sx={{ fontWeight: '500' }}>
                      Réalisation d’un dashboard Home Assistant aﬁn d’exploiter et d’analyser les données récupérées par
                      les divers capteurs situés sur les sites de l’Université Paul Sabatier.
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      projet d&apos;étude &apos;neOCampus data visualisation & automaton&apos; - Toulouse
                    </Typography>

                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      analyse de données • visualisation de données • réalisation d’un dashboard interactif • Grafana
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <Typography variant='code' sx={{ fontSize: '3rem', color: 'primary.light' }}>
                    2017
                  </Typography>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Stack
                    paddingTop='0.5rem'
                    paddingRight='2.5rem'
                    direction='column'
                    spacing={'1rem'}
                    sx={{
                      alignItems: 'flex-end',
                    }}
                  >
                    <Typography variant='h4' sx={{ fontWeight: '500' }}>
                      Baccalauréat - série S, spéc. mathématiques
                    </Typography>
                    <Typography
                      variant='h5'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '500', color: 'primary.light' }}
                    >
                      Lycée Lapérouse - Albi
                    </Typography>
                    <Typography
                      variant='h6'
                      sx={{ fontFamily: 'var(--mono-font)', fontWeight: '400', color: 'text.secondary' }}
                    >
                      mention bien
                    </Typography>
                  </Stack>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid2>
          <Grid2
            display='flex'
            size={1}
            borderRadius={1}
            sx={{
              backgroundColor: 'background.default',
            }}
          ></Grid2>
        </Grid2>
      </Grid2>
    </>
  );
};

export default Aboutme;
