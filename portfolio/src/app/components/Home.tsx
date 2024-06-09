import React from "react";
import { Box, Button, Typography } from "@mui/material";
export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          position: "relative",
          top: "-10%",
          left: "-10%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" sx={{ mb: 2 }}>
          Hey There! I'm Srinivas (Sh-ri)...
        </Typography>
        <Typography variant="h5">I'm a Full Stack Developer</Typography>
        <Typography variant="h5">
          Interested in building software to solve everyday problems!!
        </Typography>
        <Box sx={{ display: "flex", gap: 2, mt: 5 }}>
          <Button variant="contained">LinkedIn</Button>
          <Button variant="contained">Mail</Button>
          <Button variant="contained">Github</Button>
        </Box>
      </Box>
    </Box>
  );
}
