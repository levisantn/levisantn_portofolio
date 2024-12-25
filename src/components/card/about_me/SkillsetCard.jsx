import { Grid2, Typography } from '@mui/material';
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
import SkillCard from './SkillCard';

const SkillsetCard = () => {
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
            Skillset
          </Typography>
        </Grid2>
      </Grid2>
      {/* -------------------------------- */}
      <Grid2 container size={12}>
        <Grid2 size={{ xs: 1, sm: 1.5, md: 1.5, lg: 2, xl: 2 }} />
        <Grid2
          container
          size={'grow'}
          spacing={{ xs: '1.25rem', sm: '1.25rem', md: '1.25rem', lg: '1.875rem', xl: '1.875rem' }}
          justifyContent='center'
          alignItems='center'
        >
          <SkillCard img={svgPython} title='python' />
          {/* -------------------------------- */}
          <SkillCard img={svgPandas} title='pandas' />
          {/* -------------------------------- */}
          <SkillCard img={svgMatplotLib} title='matplotlib' />
          {/* -------------------------------- */}
          <SkillCard img={svgScikitLearn} title='scikit-learn' />
          {/* -------------------------------- */}
          <SkillCard img={svgPytorch} title='pytorch' />
          {/* -------------------------------- */}
          <SkillCard img={svgMySql} title='mySql' />
          {/* -------------------------------- */}
          <SkillCard img={svgTableau} title='tableau' />
          {/* -------------------------------- */}
          <SkillCard img={svgLinux} title='linux' />
          {/* -------------------------------- */}
          <SkillCard img={svgGit} title='git' />
          {/* -------------------------------- */}
          <SkillCard img={svgQgis} title='qgis' />
          {/* -------------------------------- */}
          <SkillCard img={svgJavascript} title='javascript' />
          {/* -------------------------------- */}
          <SkillCard img={svgReact} title='react' />
        </Grid2>
        <Grid2 size={{ xs: 1, sm: 1.5, md: 1.5, lg: 2, xl: 2 }} />
      </Grid2>
    </Grid2>
  );
};

export default SkillsetCard;
