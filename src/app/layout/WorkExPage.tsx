import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
export default function WorkExPage({ titles_descs }) {
  return (
    <div>
      <Box
        sx={{ maxWidth: 900, p: 5,pt:0, display: "flex", flexDirection: "column" }}>
        {titles_descs.map((e) => (
          <div key={e.title}>
            <Typography variant="h5"> {e.title} <span style={{ fontSize: "16px"}}>(Sept-2020  Jul-2022)</span></Typography>
            <Typography variant="h6"> Benguluru,India</Typography>
            
            <Typography sx={{ pl: 3,pt:1, textAlign: "justify" }} variant="body1">
              {" "}
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica and
              Antarctica Lizards are a widespread group of squamate reptiles,
              with over 6,000 species, ranging across all continents except
              Antarctica and Antarctica
            </Typography>
            <List
              sx={{ display: "flex", flexDirection: "row", padding: 0, pb: 2, flexWrap: "wrap" }}
            >
              {e.skills.map((skill) => (
                <ListItem sx={{ width: "auto" }}>{skill}</ListItem>
              ))}
            </List>
          </div>
        ))}
      </Box>
    </div>
  );
}
