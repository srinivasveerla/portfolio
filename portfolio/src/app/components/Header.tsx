import React from "react";
import AppBar from "@mui/material/AppBar";
import DownloadIcon from "@mui/icons-material/Download";
import {
  Button,
  Toolbar,
  Typography,
} from "@mui/material";
import CustomSwitch from "../layout/Swtich";

interface Props {
  dark: boolean;
  HandleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Header({ dark, HandleChange }: Props) {
  let theme = dark ? "121212" : "#fff";
  let logoTextColor = dark ? "#fff" : "#121212";
  let logo = dark ? "/icon_dark.svg" : "/icon_default.svg";
  return (
    <AppBar
      position="static"
      sx={{mt:3}}
      elevation={0}

    >
      <Toolbar sx={{ backgroundColor: theme, width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography
          variant="h6"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex"},
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: logoTextColor,
            textDecoration: "none",
          }}
          style={{ flexGrow: 1 }}
        >
          Srinivas Veerla
        </Typography>
        <CustomSwitch checked={dark} HandleChange={HandleChange} />
        <Button
          variant="outlined"
          sx={{
            color: "secondary.main",
            borderRadius: "20px",
            borderWidth: "2px",
            borderColor: "secondary.main",
          }}
        >
          <DownloadIcon sx={{ mr: 1 }} />
          <Typography variant="body1" sx={{ mr: 1 }}>Resume</Typography>
        </Button>
      </Toolbar>
    </AppBar>
  );
}
