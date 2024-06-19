import { List, ListItem, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import React from "react";

export default function ElementPage({ title, ListElements }) {
  return (
    <Paper elevation={3} sx={{ p: 4, width: 300 }}>
      <Typography variant="h4" sx={{ paddingBottom:1, borderBottom: "0.2px dashed grey" }}>{title}</Typography>
      <List sx={{padding: 0}}>
        {ListElements.map((e) => (
          <ListItem sx={{padding: 0, mb:0.5,pt:0.5,mt:0.2, borderTop: "0.2px dashed grey"}} key={e.name}>{e.name}</ListItem>
        ))}
      </List>
    </Paper>
  );
}
