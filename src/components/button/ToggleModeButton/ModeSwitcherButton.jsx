import { useState, useEffect, useRef, useCallback } from 'react';
import { useColorScheme } from '@mui/material/styles';
import { FormControlLabel, Checkbox, Tooltip, Zoom } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ModeSwitcherButton = () => {
  const [useSystemMode, setUseSystemMode] = useState(true);
  const [indeterminate, setIndeterminate] = useState(true);
  const { mode, setMode } = useColorScheme();
  const isMountedRef = useRef(false);

  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
  const lightColor = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-light');
  const darkColor = window.getComputedStyle(document.documentElement).getPropertyValue('--primary-color-dark');

  // update the scrollbar color
  const setScrollbarColor = useCallback(
    (mode) => {
      const getScrollbarColor = (mode, hover = false) => {
        const thumbColor = mode === 'light' ? darkColor : lightColor;
        const thumbColorHover = hover ? '99' : '60';
        return `${thumbColor}${thumbColorHover}`;
      };
      document.documentElement.style.setProperty('--scrollbar-thumb-color', getScrollbarColor(mode));
      document.documentElement.style.setProperty('--scrollbar-thumb-color-hover', getScrollbarColor(mode, true));
    },
    [darkColor, lightColor],
  );

  const handleToggleSystemMode = (event) => {
    setUseSystemMode(event.target.checked);
    setIndeterminate(event.target.checked);
    if (event.target.checked) {
      setMode('system');
    } else {
      setMode(mode === 'dark' ? 'light' : 'dark');
      setScrollbarColor('light');
    }
  };

  const handleToggle = (event) => {
    if (useSystemMode) {
      // System mode is on, prevent toggling the first checkbox
      return;
    }
    setIndeterminate(false);
    setMode(event.target.checked ? 'light' : 'dark');
    // set color for scrollbar
    setScrollbarColor(mode);
  };

  // Media query listener for detecting system color scheme changes
  useEffect(() => {
    const handleMediaQueryChange = () => {
      // console.log('system color scheme changed:', mediaQuery.matches);
      // console.log('system color scheme changed:', mode);

      if (useSystemMode) {
        // Update mode if system mode is active
        setScrollbarColor(mediaQuery.matches ? 'light' : 'dark');
      }
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    handleMediaQueryChange(); // Call initially to capture the current system preference

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [useSystemMode, mediaQuery, setScrollbarColor]); // Only re-run the effect when `useSystemMode` changes

  useEffect(() => {
    if (isMountedRef.current) {
      setMode('system'); // Set the initial mode to 'light' on page refresh
    } else {
      isMountedRef.current = true;
    }
  }, [setMode]); // Empty dependency array ensures it runs only once on initial render

  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
      <Checkbox
        checked={mode === 'light' || indeterminate} // Set checked state based on current mode
        onChange={handleToggle}
        disabled={useSystemMode}
        icon={<LightModeIcon />}
        checkedIcon={<DarkModeIcon />}
        indeterminate={indeterminate}
        indeterminateIcon={<RemoveCircleIcon />}
        sx={{
          border: 2,
          borderRadius: 3,
          padding: '5px',
          color: 'secondary.main',
          backgroundColor: 'secondary.hover1',
          '& .MuiSvgIcon-root': { fontSize: '3rem', color: 'text.primary' },
          '&:hover': {
            bgcolor: 'secondary.main',
          },
          '&.Mui-checked': {
            color: 'secondary.main',
            backgroundColor: 'secondary.hover1',
            '& .MuiSvgIcon-root': {
              color: 'text.primary',
            },
            '&:hover': {
              bgcolor: 'secondary.main',
            },
          },
          '&.MuiCheckbox-indeterminate': {
            border: 0,
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
              checkedIcon={<SettingsIcon />}
              size='medium'
              sx={{
                padding: '5px',
                marginLeft: 3,

                '& .MuiSvgIcon-root': { fontSize: '3rem' },
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
                  backgroundColor: 'primary.hover1',
                  '& .MuiSvgIcon-root': {
                    color: 'text.primary',
                  },
                  '&:hover': {
                    bgcolor: 'primary.main',
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
