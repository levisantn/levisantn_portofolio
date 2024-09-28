import { useState } from 'react';
import { useColorScheme } from '@mui/material/styles';
import { FormControlLabel, Checkbox, Tooltip, Zoom } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ModeSwitcherButton = () => {
  const [useSystemMode, setUseSystemMode] = useState(false);
  const [indeterminate, setIndeterminate] = useState(false);
  const { mode, setMode } = useColorScheme();
  // if (!mode) {
  //   return null;
  // }

  const handleToggleSystemMode = (event) => {
    setUseSystemMode(event.target.checked);
    setIndeterminate(event.target.checked);
    if (event.target.checked) {
      setMode('system');
    } else {
      setMode(mode === 'dark' ? 'light' : 'dark');
    }
  };

  const handleToggle = (event) => {
    if (useSystemMode) {
      // System mode is on, prevent toggling the first checkbox
      return;
    }
    setIndeterminate(false);

    setMode(event.target.checked ? 'light' : 'dark');
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Checkbox
        checked={mode === 'light' || indeterminate} // Set checked state based on current mode
        onChange={handleToggle}
        disabled={useSystemMode}
        icon={<DarkModeIcon />}
        checkedIcon={<LightModeIcon sx={{ color: 'primary.main' }} />}
        indeterminate={indeterminate}
        indeterminateIcon={<RemoveCircleIcon />}
        color='primary'
        sx={{
          border: 2,
          borderRadius: 3,
          padding: '5px',
          color: 'primary.main',
          backgroundColor: 'primary.main',
          '& .MuiSvgIcon-root': { fontSize: 25, color: 'background.default' },

          '&:hover': {
            bgcolor: 'primary.dark',
          },
          '&.Mui-disabled': {
            border: 0,
            color: 'text.disabled',
            backgroundColor: 'background.default',
            '& .MuiSvgIcon-root': {
              color: 'text.disabled',
            },
          },
          '&.Mui-checked': {
            color: 'primary.main',
            '& .MuiSvgIcon-root': {
              color: 'background.default',
            },
          },
          '&.MuiCheckbox-indeterminate': {
            color: 'text.disabled', // Set indeterminate icon color
            backgroundColor: 'background.default', // Set indeterminate background color
            '& .MuiSvgIcon-root': {
              color: 'text.disabled', // Set indeterminate icon color
            },
          },
        }}
      />
      <FormControlLabel
        control={
          <Tooltip
            title='toggle system preference'
            placement='bottom-start'
            arrow
            TransitionComponent={Zoom}
            enterDelay={1000}
          >
            <Checkbox
              checked={useSystemMode}
              onChange={handleToggleSystemMode}
              icon={<SettingsIcon />}
              checkedIcon={<SettingsIcon sx={{ color: 'primary.main' }} />}
              size='medium'
              sx={{
                padding: '5px',
                marginLeft: 3,

                '& .MuiSvgIcon-root': { fontSize: 25 },
                '&:hover': {
                  bgcolor: 'primary.hover1',
                  borderRadius: 3,
                },
                '&.Mui-disabled': {
                  color: 'text.disabled',
                  backgroundColor: 'text.primary',
                  '& .MuiSvgIcon-root': {
                    color: 'text.disabled',
                  },
                },
                '&.Mui-checked': {
                  border: 2,
                  color: 'primary.main',
                  backgroundColor: 'primary.main',
                  '& .MuiSvgIcon-root': {
                    color: 'background.default',
                  },
                  '&:hover': {
                    bgcolor: 'primary.dark',
                  },
                },
              }}
            />
          </Tooltip>
        }
      />
    </div>
  );
};

export default ModeSwitcherButton;
