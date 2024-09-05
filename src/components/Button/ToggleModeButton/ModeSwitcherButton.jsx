import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';

const ModeSwitcherButton = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select value={mode} onChange={(event) => setMode(event.target.value)} sx={({ minWidth: 80 }, { maxHeight: 40 })}>
      <MenuItem value='system'>
        <Typography variant='code'>System</Typography>
      </MenuItem>
      <MenuItem value='light'>
        <Typography variant='code'>Light</Typography>
      </MenuItem>
      <MenuItem value='dark'>
        <Typography variant='code'>Dark</Typography>
      </MenuItem>
    </Select>
  );
};

export default ModeSwitcherButton;
