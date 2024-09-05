import { useColorScheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ModeSwitcherButton = () => {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select value={mode} onChange={(event) => setMode(event.target.value)} sx={({ minWidth: 80 }, { maxHeight: 40 })}>
      <MenuItem value='system'>System</MenuItem>
      <MenuItem value='light'>Light</MenuItem>
      <MenuItem value='dark'>Dark</MenuItem>
    </Select>
  );
};

export default ModeSwitcherButton;
