import React from "react";
import { Box, Button, Typography } from "@mui/material";
export default function Hero() {
  return (
    <Box
      sx={{
        // backgroundColor: "red",
        display: "flex",
        paddingTop:"15vh",
        paddingLeft:"4vw",        
        height: "80vh",

      }}
    >
      <Box
      //padding={1}
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h4" >
          Hey There!
        </Typography>
        <Typography variant="h4" sx={{ mb: 2 }}>I'm Srinivas(Sh-ri)...</Typography>
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
