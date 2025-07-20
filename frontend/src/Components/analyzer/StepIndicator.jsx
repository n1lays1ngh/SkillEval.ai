

import React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const steps = ['Your Profile', 'Analysis', 'Roadmap'];


const StepIndicator = ({ currentStep }) => {
  return (
    
      <Box sx={{ width: '100%', maxWidth: '700px' }}>
        <Stepper activeStep={currentStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    
  );
};

export default StepIndicator;


