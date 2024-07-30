import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#DEF9C4',
      main: '#50B498',
      dark: '#468585',
      contrastText: '#000',
    },
    secondary: {
      main: '#9CDBA6',
    },
  },
});

export default theme;
