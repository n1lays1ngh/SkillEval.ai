

import React from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const ProfileForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    
    <Box
      component="form" 
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3, 
        maxWidth: '1150px', 
        mx: 'auto', 
        p: { xs: 2, sm: 3 }, 
      }}
    >
      
      <TextField
        label="Target Role" 
        id="role"
        name="role"
        value={formData.role}
        onChange={handleInputChange}
        required
        fullWidth 
        variant="outlined" 
        placeholder="e.g., Senior Python Developer"
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

      <TextField
        label="Your Skills"
        id="skills"
        name="skills"
        value={formData.skills}
        onChange={handleInputChange}
        required
        fullWidth
        multiline 
        rows={3} 
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

      
      <Box sx={{ textAlign: 'center', mt: 2 }}> 
        <Button
          type="submit"
          variant="contained" 
          color="primary" 
          size="large" 
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
          Analyze My Profile
        </Button>
      </Box>
    </Box>
  );
};

export default ProfileForm;