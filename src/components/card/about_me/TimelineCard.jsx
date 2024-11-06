import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { Grid2, Stack, Typography } from '@mui/material';

const TimelineCardHome = () => {
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
        borderRadius={1}
        sx={{
          backgroundColor: 'background.default',
          height: 'grow',
        }}
      >
        <Grid2 display='flex' size={1} borderRadius={1}></Grid2>

        <Grid2
          display='flex'
          size={'grow'}
          direction='column'
          borderRadius={1}
          sx={{
            justifyContent: 'center',
          }}
        >
          <Timeline position='alternate-reverse' sx={{ paddingTop: '2.5rem', paddingBottom: '2.5rem' }}>
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
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                    apprentissage automatique • apprentissage profond • traitement de données • visualisation de données
                    • traitement du signal • système de gestion de base de données • gestion de projet • apprentissage
                    par renforcement • prise de décision et planiﬁcation
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
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                    rasters et vecteurs • Implémentation d&apos;algorithmes de vision par ordinateur • communication des
                    résultats • SIG • traitement de données • traitement d’image satellite • superpixels • Geopandas •
                    Qgis • Gdal
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
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
                    alignItems: 'flex-end',
                  }}
                >
                  <Typography variant='h4' sx={{ fontWeight: '500', color: 'primary.light' }}>
                    Développement, maintien de pipeline et analyse de données
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: '500' }}>
                    Maintien et amélioration d’un pipeline d’extraction d’information, dans le contexte de la gestion de
                    crises via les réseaux sociaux.
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
                    traitement de données • fouille de données • API scraping • maintien et ajout de fonctionnalités sur
                    l&apos;interface web (dashboard) • déploiement et gestion de l&apos;interface web • communication
                    des résultats • javascript • react
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
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
                <TimelineConnector sx={{ backgroundColor: 'text.primary' }} />
              </TimelineSeparator>
              <TimelineContent>
                <Stack
                  marginRight='2.5rem'
                  marginBottom='2.5rem'
                  padding='2rem'
                  direction='column'
                  spacing={'1rem'}
                  borderRadius='15px'
                  sx={{
                    backgroundColor: 'primary.hover2',
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
        <Grid2 display='flex' size={1} borderRadius={1}></Grid2>
      </Grid2>
    </Grid2>
  );
};

export default TimelineCardHome;
