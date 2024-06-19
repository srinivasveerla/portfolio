import { Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";
export default function About() {
  return (
    <div style={{ padding: "20px",  }}>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          //paddingBottom: "20px",
        }}
      >
        ABOUT ME
      </Typography>
      <Grid container spacing={2} style={{ justifyContent: "center" }}>
        <Grid item xs md>
          <Typography
            variant="body1"
            style={{ padding: "40px", width: "100%", minWidth: "300px", textAlign: "justify" }}
          >
            I am a frontend developer with 5 years of experience. I am
            passionate about creating beautiful and intuitive user experiences
            for web and mobile applications. I have a strong background in
            frontend development, and I am always looking for new opportunities
            to learn and grow.
            {/* <p>-Specialisation 1</p>
              <p>-Specialisation 1</p>
              <p>-Specialisation 1</p>
              <p>-Specialisation 1</p>
              <p>-Specialisation 1</p>
              <p>-Specialisation 1</p>
              <p>-Specialisation 1</p> */}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          md
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card elevation={3}>
            <CardMedia
              sx={{ height: 300, width: 200 }}
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              title="The house from the offer."
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}
