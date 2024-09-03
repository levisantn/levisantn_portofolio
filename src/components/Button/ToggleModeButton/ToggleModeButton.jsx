import { Button, useColorScheme } from '@mui/material';

const ToggleModeButton = () => {
  const { mode, setMode } = useColorScheme();
  return (
    <Button
      variant='contained'
      sx={{ textTransform: 'none' }}
      onClick={() => {
        setMode(mode === 'light' ? 'dark' : 'light');
      }}
    >
      Toggle mode
    </Button>
  );
};

export default ToggleModeButton;
