import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    error: React.CSSProperties;
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    error?: React.CSSProperties;
    label?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    error: true;
    label: true;
  }
}

declare module '@mui/material/styles' {
  interface PaletteColor {
    100?: string;
    400?: string;
  }

  interface SimplePaletteColorOptions {
    100?: string;
    400?: string;
  }
}

export const themes = createTheme({
  cssVariables: true,
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          borderRadius: '2px',
          '&.Mui-disabled': {
            color: 'transparent',
            background: 'rgba(0, 0, 0, 0.26)',
            borderRadius: '2px',
            border: 'none',
          },
        },
      },
    },
    MuiSwitch: {
      styleOverrides: {
        track: ({ theme }) => ({
          borderRadius: 50,
          backgroundColor: '#9A9A9A',
          '.Mui-checked.Mui-checked + &': {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: theme.palette.primary.main,
          },
        }),
        thumb: {
          color: '#fff',
        },
        root: {
          padding: 6,
          '& .MuiSwitch-thumb': {
            boxShadow: 'none',
            width: 16,
            height: 16,
            margin: 2,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderBottom: 'none',
          "&.Mui-error": {
            border: '1px solid #D12119',
            background: '#FFDBD9',
          }
        },
        input: {
          display: 'flex',
          alignItems: 'center',
          borderRadius: 6,
          background: 'white',
          '&.Mui-disabled': {
            background: '#D6D6D6',
            borderColor: '#D6D6D6',
          },
          // border: '1px solid #CCCCCC',
        },

      },
    },
    MuiTextField: {
      styleOverrides: {

      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderColor: 'transparent' },
        root: {
          borderRadius: 6,
          padding: 0,
          borderColor: 'transparent',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#000',
          cursor: 'pointer',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '6px',
          boxShadow: 'none',
          ':hover': {
            boxShadow: 'none',
          },
          ":disabled": {
            background: 'grey',
            color: 'white'
          }
        },
        sizeLarge: {
          height: 44,
          padding: '0 16px 0 16px',
        },
        sizeMedium: {
          height: 40,
          padding: '0 16px 0 16px',
        },
        sizeSmall: {
          height: 24,
          padding: '0 8px 0 8px',
        },
        containedPrimary: ({ theme }) => ({
          background: `transparent linear-gradient(0deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary['100']} 100%) 0% 0% no-repeat padding-box`,
          ':hover': {
            background: `transparent linear-gradient(0deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 100%) 0% 0% no-repeat padding-box`,
          }
        }),
        containedSecondary: ({ theme }) => ({
          background: `transparent linear-gradient(0deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary['100']} 100%) 0% 0% no-repeat padding-box`,
          ':hover': {
            background: `transparent linear-gradient(0deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.main} 100%) 0% 0% no-repeat padding-box`,
          },
        }),
        containedError: ({ theme }) => ({
          background: `transparent linear-gradient(0deg, ${theme.palette.error.main} 0%, ${theme.palette.error['100']} 100%) 0% 0% no-repeat padding-box`,
          ':hover': {
            background: `transparent linear-gradient(0deg, ${theme.palette.error.main} 0%, ${theme.palette.error.main} 100%) 0% 0% no-repeat padding-box`,
          },
        }),
        containedWarning: ({ theme }) => ({
          background: `transparent linear-gradient(0deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning['100']} 100%) 0% 0% no-repeat padding-box`,
          ':hover': {
            background: `transparent linear-gradient(0deg, ${theme.palette.warning.main} 0%, ${theme.palette.warning.main} 100%) 0% 0% no-repeat padding-box`,
          },
        }),
        containedInfo: ({ theme }) => ({
          background: `transparent linear-gradient(0deg, ${theme.palette.info.main} 0%, ${theme.palette.info.main} 100%) 0% 0% no-repeat padding-box`,
          ':hover': {
            background: `transparent linear-gradient(0deg, ${theme.palette.info['100']} 0%, ${theme.palette.info['100']} 100%) 0% 0% no-repeat padding-box`,
          },
        }),
      },
    },
  },
  palette: {
    background: {
      default: '#EAEAEA',
    },
    primary: {
      main: '#F18700',
      '100': '#F39F33',
      contrastText: '#fff',
    },
    secondary: {
      main: '#999999',
      '400': '#9A9A9A',
      '100': '#B3B3B3',
      contrastText: '#fff',
    },
    error: {
      main: '#9F041B',
      '100': '#F5515F',
      contrastText: '#fff',
    },
    warning: {
      main: '#028ED5',
      '100': '#026CA2',
      contrastText: '#fff',
    },
    info: {
      main: '#fff',
      '100': '#BBBBBB',
      contrastText: '#000',
    },
  },
  typography: {
    fontFamily: ['Open Sans', 'sans-serif'].join(','),
    label: {
      color: '#333333',
      fontSize: 12,
      marginBottom: '8px !important',
    },
    error: {
      color: '#D12119',
      fontSize: 12,
    },
  },
});
