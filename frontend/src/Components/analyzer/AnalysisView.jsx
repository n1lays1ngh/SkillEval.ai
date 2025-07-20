

import React from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material'; 
import { useCountUp } from 'use-count-up'; 

const AnalysisView = ({ result, handleGenerateRoadmap, handleStartOver }) => {
  
  const { value: animatedScore } = useCountUp({
    isCounting: true, 
    duration: 1.5, 
    start: 0,
    end: result.readiness_score,
    easing: 'easeOutCubic', 
  });

  return (
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        gap: { xs: 4, md: 8 }, 
        py: { xs: 2, sm: 3, md: 4 }, 
        px: { xs: 1, sm: 2, md: 2 }, 
        maxWidth: 'lg', 
        mx: 'auto', 
      }}
    >
      
      <Box
        sx={{
          flexShrink: 0, 
          width: { xs: '100%', md: '50%', lg: '33.33%' }, 
          display: 'flex',
          justifyContent: 'center', 
          alignItems: 'flex-start', 
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            width: '100%', 
            maxWidth: '300px', 
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography variant="h6" component="h3" sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 2 }}>
            Readiness Score
          </Typography>
          <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
            <CircularProgress
              variant="determinate"
              value={animatedScore}
              size={250} 
              thickness={3} 
              sx={{
                color: 'primary.main', 
                backgroundColor: 'transparent',
                borderRadius: '50%', 
                boxShadow: '0px 0px 8px rgba(0, 123, 255, 0.5)', 
                transition: 'box-shadow 0.3s ease-in-out', 
                '&:hover': {
                  boxShadow: '0px 0px 12px rgba(0, 123, 255, 0.8)', 
                },
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'butt', 
                },
              }}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography
                variant="h2" 
                component="p"
                sx={{
                  fontWeight: 'bold',
                  color: 'primary.light',
                  display: 'inline-flex',
                  alignItems: 'baseline',
                }}
              >
                {Math.round(animatedScore)}
                <Typography component="span" variant="h4" sx={{ color: 'text.disabled', ml: 0.5 }}>
                  %
                </Typography>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      
      <Box
        sx={{
          flexGrow: 1, 
          width: { xs: '100%', md: '50%', lg: '66.66%' }, 
          display: 'flex',
          flexDirection: 'column',
          gap: 4, 
        }}
      >
        <Typography variant="h4" component="h2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          Profile Analysis Details
        </Typography>

        
        <Box>
          <Typography variant="h6" component="h3" sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 1 }}>
            Identified Skill Gaps
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: 'disc', 
              listStylePosition: 'inside', 
              mt: 1,
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'grey.700', 
              backgroundColor: 'background.paper', 
              color: 'text.primary', 
            }}
          >
            {result.skill_gaps.map((gap, index) => (
              <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                {gap}
              </Typography>
            ))}
          </Box>
        </Box>

        
        <Box>
          <Typography variant="h6" component="h3" sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 1 }}>
            Project Feedback
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              mt: 1,
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'grey.700', 
              backgroundColor: 'background.paper', 
              color: 'text.primary', 
            }}
          >
            {result.project_feedback.map((feedback, index) => (
              <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                {feedback}
              </Typography>
            ))}
          </Box>
        </Box>

        
        <Box>
          <Typography variant="h6" component="h3" sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 1 }}>
            Next Suggestions
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: 'disc',
              listStylePosition: 'inside',
              mt: 1,
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'grey.700', 
              backgroundColor: 'background.paper', 
              color: 'text.primary', 
            }}
          >
            {result.next_suggestions.map((suggestion, index) => (
              <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                {suggestion}
              </Typography>
            ))}
          </Box>
        </Box>

        
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between', 
            alignItems: 'center',
            pt: 3, 
          }}
        >
          <Button
            onClick={handleStartOver}
            sx={{
              color: 'text.secondary', 
              '&:hover': {
                color: 'text.primary', 
                backgroundColor: 'transparent', 
              },
            }}
          >
            Start Over
          </Button>
          <Button
            onClick={handleGenerateRoadmap}
            variant="contained"
            color="primary"
            size="large"
            endIcon={<span>→</span>} 
            sx={{
              px: 4,
              py: 1.5,
              borderRadius: 2,
              boxShadow: 3,
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
          >
            Generate My Roadmap
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AnalysisView;