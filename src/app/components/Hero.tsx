import React from "react";
import { Box, Button, Typography } from "@mui/material";
export default function Hero() {
  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: "15vh",
        paddingLeft: "4vw",
        height: "80vh",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Typography variant="h4" sx={{ mb: 2 }}>
        Hey There! <br />
        I'm Srinivas(Sh-ri)...
      </Typography>
      <Typography variant="h6">
        I'm a Computer Science Graduate from the University at Buffalo.
        <br />
        I'm actively looking for fulltime SDE opportunities. If you have an
        opening that I could be a good fit for, let's connect!
      </Typography>
      <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
        <Button
          href="https://www.linkedin.com/in/srinivas-veerla"
          target="_blank"
          variant="contained"
        >
          LinkedIn
        </Button>
        <Button href="mailto:dssrinivas.veerla@gmail.com" variant="contained">
          Mail
        </Button>
        <Button
          href="https://github.com/srinivasveerla"
          target="_blank"
          variant="contained"
        >
          Github
        </Button>
      </Box>
    </Box>
  );
}
