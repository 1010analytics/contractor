import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#389ba7',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#80C4E9',
          '&:hover': {
            backgroundColor: '#9ACF63',
          },
        },
      },
    },
  },
});

export default theme;
