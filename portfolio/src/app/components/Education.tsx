import React from "react";
import ElementCard from "../layout/EducationCard";
import { Grid, Typography } from "@mui/material";

export default function Education() {
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        EDUCATION
      </Typography>
      <Grid
        container
        spacing={1}
        style={{ justifyContent: "center", padding: "20px", paddingTop: "0px" }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ElementCard
          type = "education"
            img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            title="Bachelor of Technology"
            ListElements={[
              { name: "Computer Science and Engineering" },
              { name: "Chandigarh University" },
            ]}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ElementCard
          type = "education"
            img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            title="Higher Secondary School"
            ListElements={[
              { name: "CBSE Board" },
              { name: "Chandigarh Board" },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
