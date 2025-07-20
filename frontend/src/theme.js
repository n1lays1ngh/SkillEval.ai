// src/theme.js
import { createTheme } from '@mui/material/styles';

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#6366F1', // Closest to Tailwind's indigo-500 / indigo-600
      dark: '#4F46E5', // Closest to Tailwind's indigo-700 for hover states
    },
    background: {
      default: '#0F172A', // Closest to Tailwind's bg-slate-900
      paper: '#1E293B', // Closest to Tailwind's bg-slate-800 for input fields and card backgrounds
    },
    text: {
        primary: '#F1F5F9', // Closest to Tailwind's text-gray-100 (for main headings/light text)
        secondary: '#94A3B8', // Closest to Tailwind's text-gray-400 (for paragraphs/secondary text)
        disabled: '#64748B', // A slightly darker grey for disabled elements, similar to grey-500
    },
    // Custom grey shades to directly map to Tailwind's slate/gray scales for easier reference
    grey: {
        50: '#F8FAFC',
        100: '#F1F5F9', // text-gray-100
        200: '#E2E8F0',
        300: '#CBD5E1', // text-gray-300
        400: '#94A3B8', // text-gray-400
        500: '#64748B',
        600: '#475569',
        700: '#334155', // slate-700
        800: '#1E293B', // slate-800
        900: '#0F172A', // slate-900
    },
    // Adding specific colors for analysis view sections to match your Tailwind versions
    warning: {
      light: '#FDE047', // Closest to text-yellow-300
      main: '#FACC15',
      dark: '#EAB308', // Closest to border-yellow-800
      darker: '#422006', // Closest to bg-yellow-900/30 (a dark, desaturated yellow)
    },
    success: {
      light: '#86EFAC', // Closest to text-green-300
      main: '#22C55E',
      dark: '#16A34A', // Closest to border-green-800
      darker: '#064E3B', // Closest to bg-green-900/30 (a dark, desaturated green)
    },
    info: {
      light: '#93C5FD', // Closest to text-blue-300
      main: '#3B82F6',
      dark: '#2563EB', // Closest to border-blue-800
      darker: '#1E3A8A', // Closest to bg-blue-900/30 (a dark, desaturated blue)
    },
  },
  components: {
    // These were already defined for your stepper, keeping them for consistency
    MuiStepIcon: {
        styleOverrides: {
            root: ({ theme }) => ({
                color: theme.palette.grey[700], // Using grey.700 for inactive step icons
                '&.Mui-active': {
                    color: theme.palette.primary.main, // Using primary.main for active step
                },
                '&.Mui-completed': {
                    color: theme.palette.primary.main, // Using primary.main for completed steps
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
    // Explicitly setting styles for TextField to ensure it uses the new palette
    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          '& .MuiOutlinedInput-root': {
            backgroundColor: theme.palette.background.paper, // Use paper background for inputs
            '& fieldset': {
              borderColor: theme.palette.grey[700], // Use grey.700 for border
            },
            '&:hover fieldset': {
              borderColor: theme.palette.primary.main, // Use primary.main on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: theme.palette.primary.main, // Use primary.main on focus
            },
          },
          '& .MuiInputBase-input': {
            color: theme.palette.text.primary, // Use primary text color for input text
          },
          '& .MuiInputLabel-root': {
            color: theme.palette.text.secondary, // Use secondary text color for label
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: theme.palette.primary.main, // Use primary.main for focused label
          },
        }),
      },
    },
    // Explicitly setting styles for Button to ensure it uses the new palette
    MuiButton: {
      styleOverrides: {
        containedPrimary: ({ theme }) => ({
          backgroundColor: theme.palette.primary.main, // Use primary.main for contained primary buttons
          color: theme.palette.text.primary, // Button text color (like text-white/gray-100)
          '&:hover': {
            backgroundColor: theme.palette.primary.dark, // Use primary.dark on hover
          },
        }),
        text: ({ theme }) => ({ // For text buttons like "Start Over"
          color: theme.palette.text.secondary, // text-gray-400
          '&:hover': {
            color: theme.palette.text.primary, // hover:text-gray-200 (closest is text.primary)
            backgroundColor: 'transparent', // Keep transparent background on hover
          },
        }),
      },
    },
  },
});