

import React from 'react';
import { Box, Typography, Button, CircularProgress } from '@mui/material'; // Import CircularProgress from @mui/material
import { useCountUp } from 'use-count-up'; // Import useCountUp hook

const AnalysisView = ({ result, handleGenerateRoadmap, handleStartOver }) => {
  // Use useCountUp for the readiness score animation
  const { value: animatedScore } = useCountUp({
    isCounting: true, // Start counting immediately when component mounts
    duration: 1.5, // Animation duration in seconds
    start: 0,
    end: result.readiness_score,
    easing: 'easeOutCubic', // Smooth easing function
  });

  return (
    // Main container using Box for flex layout and responsiveness
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column on small screens, row on medium and up
        gap: { xs: 4, md: 8 }, // Gap between columns, responsive
        py: { xs: 2, sm: 3, md: 4 }, // Vertical padding around the entire view
        px: { xs: 1, sm: 2, md: 2 }, // Reduced horizontal padding for the entire view
        maxWidth: 'lg', // Max width for the content for better readability
        mx: 'auto', // Center the content horizontally
      }}
    >
      {/* Left Column for Readiness Score */}
      <Box
        sx={{
          flexShrink: 0, // Prevent shrinking
          width: { xs: '100%', md: '50%', lg: '33.33%' }, // Increased width for the score box column
          display: 'flex', // Use flex to center the inner box
          justifyContent: 'center', // Center horizontally
          alignItems: 'flex-start', // Align to top
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            width: '100%', // Ensure the inner box fills its parent's width
            maxWidth: '300px', // Optional: Limit the max width of the score box itself
            display: 'flex', // Use flexbox for vertical centering of content
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
              size={250} // Increased size for a more prominent circle
              thickness={3} // Reduced thickness for a thinner outline
              sx={{
                color: 'primary.main', // Color of the progress bar (blue)
                backgroundColor: 'transparent',
                borderRadius: '50%', // Ensure circular shape
                boxShadow: '0px 0px 8px rgba(0, 123, 255, 0.5)', // Blue glow
                transition: 'box-shadow 0.3s ease-in-out', // Smooth transition for glow
                '&:hover': {
                  boxShadow: '0px 0px 12px rgba(0, 123, 255, 0.8)', // More intense glow on hover
                },
                '& .MuiCircularProgress-circle': {
                  strokeLinecap: 'butt', // Makes the end of the progress bar blunt
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
                variant="h2" // Larger typography for score inside circle
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

      {/* Right Column for Details */}
      <Box
        sx={{
          flexGrow: 1, // Allows this column to take remaining space
          width: { xs: '100%', md: '50%', lg: '66.66%' }, // Adjusted width to compensate for the left column change
          display: 'flex',
          flexDirection: 'column',
          gap: 4, // Spacing between detail sections
        }}
      >
        <Typography variant="h4" component="h2" sx={{ color: 'text.primary', fontWeight: 'bold' }}>
          Profile Analysis Details
        </Typography>

        {/* Identified Skill Gaps */}
        <Box>
          <Typography variant="h6" component="h3" sx={{ color: 'text.secondary', fontWeight: 'bold', mb: 1 }}>
            Identified Skill Gaps
          </Typography>
          <Box
            component="ul"
            sx={{
              listStyleType: 'disc', // Bullet points
              listStylePosition: 'inside', // Bullets inside the box
              mt: 1,
              p: 2,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'grey.700', // Consistent border color
              backgroundColor: 'background.paper', // Consistent background color
              color: 'text.primary', // Consistent text color for list items
            }}
          >
            {result.skill_gaps.map((gap, index) => (
              <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                {gap}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Project Feedback */}
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
              borderColor: 'grey.700', // Consistent border color
              backgroundColor: 'background.paper', // Consistent background color
              color: 'text.primary', // Consistent text color for list items
            }}
          >
            {result.project_feedback.map((feedback, index) => (
              <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                {feedback}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Next Suggestions */}
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
              borderColor: 'grey.700', // Consistent border color
              backgroundColor: 'background.paper', // Consistent background color
              color: 'text.primary', // Consistent text color for list items
            }}
          >
            {result.next_suggestions.map((suggestion, index) => (
              <Typography component="li" key={index} sx={{ mb: 0.5 }}>
                {suggestion}
              </Typography>
            ))}
          </Box>
        </Box>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between', // Aligns items to start and end
            alignItems: 'center',
            pt: 3, // Padding top
          }}
        >
          <Button
            onClick={handleStartOver}
            sx={{
              color: 'text.secondary', // Gray text
              '&:hover': {
                color: 'text.primary', // Lighter gray on hover
                backgroundColor: 'transparent', // Keep background transparent
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
            endIcon={<span>→</span>} // Simple arrow icon
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