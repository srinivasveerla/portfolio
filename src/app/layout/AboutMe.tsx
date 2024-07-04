import React from 'react';
import { Typography, Box, Grid, Avatar, Paper } from '@mui/material';

const AboutMe = ({ name, bio, photoUrl, skills }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, my: 4 }}>
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={8}>
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h5" gutterBottom>
            Hi, I'm {name}
          </Typography>
          <Typography variant="body1" paragraph>
            {bio}
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              My Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill, index) => (
                <Paper key={index} elevation={1} sx={{ px: 2, py: 1, bgcolor: 'primary.light' }}>
                  <Typography variant="body2" color="primary.contrastText">
                    {skill}
                  </Typography>
                </Paper>
              ))}
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            alt={name}
            src={photoUrl}
            sx={{
              width: { xs: 200, md: 250 },
              height: { xs: 200, md: 250 },
              boxShadow: 3,
            }}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AboutMe;