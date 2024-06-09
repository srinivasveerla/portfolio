import { Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
export default function About() {
  return (
    <Box>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        ABOUT ME
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="body1"
            style={{ padding: "20px", width: "100%" }}
          >
            I am a frontend developer with 5 years of experience. I am
            passionate about creating beautiful and intuitive user experiences
            for web and mobile applications. I have a strong background in
            frontend development, and I am always looking for new opportunities
            to learn and grow.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 233,
              width: 350,
              maxHeight: { xs: 333, md: 267 },
              maxWidth: { xs: 450, md: 350 },
            }}
            alt="The house from the offer."
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
