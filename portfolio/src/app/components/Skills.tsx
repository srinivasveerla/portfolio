import React from "react";
import { Grid, Typography } from "@mui/material";
import ElementPage from "../layout/ElementPage";
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
    <>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        SKILLS
      </Typography>
      <Grid container
        spacing={6}
        style={{justifyContent: "center" }}
      >
        <Grid item xs={12} md={3}>
        <AnimatedSection >
          <ElementPage title="Programming Languages" ListElements={p_l} />
        </AnimatedSection>
        </Grid>
        <Grid item xs={12} md={3}>
        <AnimatedSection>
          <ElementPage title="Frontend" ListElements={frontend} />
        </AnimatedSection>
        </Grid>
        <Grid item xs={12} md={3}>
        <AnimatedSection>
          <ElementPage title="Backend" ListElements={backend} />
        </AnimatedSection>
        </Grid>
      </Grid>
    </>
  );
}
