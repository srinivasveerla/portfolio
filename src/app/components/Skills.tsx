import React from "react";
import { Grid, Typography } from "@mui/material";
import ElementPage from "../layout/SkillsPage";
import AnimatedSection from "../animations/AnimatedSection";
export default function Skills() {
  const p_l = [
    { name: "Python" },
    { name: "Javascript" },
    { name: "C#" },
    { name: "Golang" },
    { name: "Typscript" },
    { name: "HTML/CSS" },
  ];

  const frontend = [
    { name: "React" },
    { name: "Redux" },
    { name: "JQuery" },
    { name: "Blazor" },
  ];

  const backend = [{ name: "Django" }, { name: ".NET" }];
  return (
    <div
      style={{
        justifyContent: "center",
        // backgroundColor: "blue",
        paddingTop: "50px",
      }}
    >
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        SKILLS
      </Typography>
      <Grid
        container
        gap={3}
        style={{
          display: "flex",
          maxWidth: "1000px",
          justifyContent: "center",
          padding: "20px",
          paddingTop: "0px",
        }}
        sx={{ flexDirection: { xs: "column", md: "row" } }}
      >
        <Grid
          item
          // xs={12}
          // sm={12}
          md
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <ElementPage title="Languages" ListElements={p_l} />
          </AnimatedSection>
        </Grid>
        <Grid
          item
          // xs={12}
          md
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <ElementPage title="Frontend" ListElements={frontend} />
          </AnimatedSection>
        </Grid>
        <Grid
          item
          md
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <AnimatedSection>
            <ElementPage title="Backend" ListElements={backend} />
          </AnimatedSection>
        </Grid>
      </Grid>
    </div>
  );
}
