import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3D8D7A',
      light: '#A3D1C6',
      dark: '#2C665A',
    },
    secondary: {
      main: '#B3D8A8',
      light: '#FBFFE4',
      dark: '#8FB580',
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Arial", sans-serif',
    h1: {
      fontFamily: '"Sora", sans-serif',
    },
    h2: {
      fontFamily: '"Sora", sans-serif',
    },
    h3: {
      fontFamily: '"Sora", sans-serif',
    },
    h4: {
      fontFamily: '"Sora", sans-serif',
    },
    h5: {
      fontFamily: '"Sora", sans-serif',
    },
    h6: {
      fontFamily: '"Sora", sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme; 