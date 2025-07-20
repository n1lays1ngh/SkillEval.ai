// src/theme.js
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1', 
      dark: '#4F46E5', 
    },
    background: {
      default: '#0F172A', 
      paper: '#1E293B', 
    },
    text: {
        primary: '#F1F5F9', 
        secondary: '#94A3B8', 
        disabled: '#64748B', 
    },
  
    grey: {
        50: '#F8FAFC',
        100: '#F1F5F9', 
        200: '#E2E8F0',
        300: '#CBD5E1', 
        400: '#94A3B8', 
        500: '#64748B',
        600: '#475569',
        700: '#334155', 
        800: '#1E293B', 
        900: '#0F172A', 
    },
    
    warning: {
      light: '#FDE047', 
      main: '#FACC15',
      dark: '#EAB308', 
      darker: '#422006', 
    },
    success: {
      light: '#86EFAC', 
      main: '#22C55E',
      dark: '#16A34A', 
      darker: '#064E3B', 
    },
    info: {
      light: '#93C5FD', 
      main: '#3B82F6',
      dark: '#2563EB', 
      darker: '#1E3A8A', 
    },
  },
  components: {
    
    MuiStepIcon: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.grey[700], 
                '&.Mui-active': {
                    color: theme.palette.primary.main, 
                },
                '&.Mui-completed': {
                    color: theme.palette.primary.main, 
                },
            }),
        },
    },
    MuiStepLabel: {
        styleOverrides: {
            label: {
                '&.Mui-active': {
                    fontWeight: 'bold',
                },
                 '&.Mui-completed': {
                    fontWeight: 'bold',
                },
            }
        }
    },
    MuiStepper: {
        styleOverrides: {
            root: {
                backgroundColor: 'transparent',
            }
        }
    },
   
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.paper, 
            '& fieldset': {
              borderColor: theme.palette.grey[700], 
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main, 
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main, 
            },
          },
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary, 
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.text.secondary, 
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.primary.main, 
          },
        }),
      },
    },
    
    MuiButton: {
      styleOverrides: {
        containedPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main, 
          color: theme.palette.text.primary, 
          '&:hover': {
            backgroundColor: theme.palette.primary.dark, 
          },
        }),
        text: ({ theme }) => ({ 
          color: theme.palette.text.secondary, 
          '&:hover': {
            color: theme.palette.text.primary, 
            backgroundColor: 'transparent', 
          },
        }),
      },
    },
  },
});