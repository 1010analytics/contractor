import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#B4E380',
    },
    secondary: {
      main: '#ffffff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#B4E380',
          '&:hover': {
            backgroundColor: '#9ACF63',
          },
        },
      },
    },
  },
});

export default theme;
