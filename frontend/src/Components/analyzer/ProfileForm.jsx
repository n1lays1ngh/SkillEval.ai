

import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProfileForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    // Box component for spacing and layout, replacing the 'space-y-6' Tailwind class
    <Box
      component="form" // Render as a form element
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3, // Equivalent to space-y-3 (or 24px) for vertical spacing between items
        maxWidth: '1150px', // Optional: Constrain form width for better readability on large screens
        mx: 'auto', // Center the form horizontally
        p: { xs: 2, sm: 3 }, // Padding for responsiveness
      }}
    >
      {/* Target Role Input */}
      <TextField
        label="Target Role" // Label provided by TextField
        id="role"
        name="role"
        value={formData.role}
        onChange={handleInputChange}
        required
        fullWidth // Makes the text field take full width of its parent
        variant="outlined" // Standard Material-UI outlined style
        placeholder="e.g., Senior Python Developer"
        sx={{
          '& .MuiOutlinedInput-root': { // Targeting the input field's root
            backgroundColor: 'background.paper', // Using theme's background color for input
            borderRadius: 3,
            '& fieldset': {
              borderColor: 'grey.700', // Border color for outlined variant
            },
            '&:hover fieldset': {
              borderColor: 'primary.main', // Hover border color
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main', // Focused border color
            },
          },
          '& .MuiInputBase-input': { // Targeting the actual input element
            color: 'text.primary', // Input text color
          },
          '& .MuiInputLabel-root': { // Targeting the label
            color: 'text.secondary', // Label color
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'primary.main', // Focused label color
          },
        }}
      />

      {/* Your Skills Textarea */}
      <TextField
        label="Your Skills"
        id="skills"
        name="skills"
        value={formData.skills}
        onChange={handleInputChange}
        required
        fullWidth
        multiline // Makes it a textarea
        rows={3} // Sets initial number of rows
        variant="outlined"
        placeholder="Comma-separated, e.g., React, Node.js, SQL, Docker"
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
            borderRadius: 3,
            '& fieldset': {
              borderColor: 'grey.700',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            color: 'text.primary',
          },
          '& .MuiInputLabel-root': {
            color: 'text.secondary',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'primary.main',
          },
        }}
      />

      {/* Your Projects Textarea */}
      <TextField
        label="Your Projects"
        id="projects"
        name="projects"
        value={formData.projects}
        onChange={handleInputChange}
        required
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        placeholder="Describe 1-2 key projects, their tech stack, and your role."
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
            borderRadius: 3,
            '& fieldset': {
              borderColor: 'grey.700',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            color: 'text.primary',
          },
          '& .MuiInputLabel-root': {
            color: 'text.secondary',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'primary.main',
          },
        }}
      />

      {/* GitHub Username Input */}
      <TextField
        label="GitHub Username"
        id="github_username"
        name="github_username"
        value={formData.github_username}
        onChange={handleInputChange}
        required
        fullWidth
        variant="outlined"
        placeholder="your-github-handle"
        sx={{
          '& .MuiOutlinedInput-root': {
            backgroundColor: 'background.paper',
            borderRadius: 3,
            '& fieldset': {
              borderColor: 'grey.700',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            color: 'text.primary',
          },
          '& .MuiInputLabel-root': {
            color: 'text.secondary',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'primary.main',
          },
        }}
      />

      {/* Submit Button */}
      <Box sx={{ textAlign: 'center', mt: 2 }}> {/* Margin top for spacing */}
        <Button
          type="submit"
          variant="contained" // Solid background button
          color="primary" // Uses the primary color from your darkTheme
          size="large" // Larger button size
          sx={{
            px: 4, // Horizontal padding
            py: 1.5, // Vertical padding
            borderRadius: 2, // Rounded corners
            boxShadow: 3, // Add a shadow
            
            '&:hover': {
              backgroundColor: 'primary.dark', // Darker primary on hover
            },
          }}
        >
          Analyze My Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;