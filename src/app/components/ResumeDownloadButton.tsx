import React from "react";
import { Button, Typography } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import WiggleComponent from "../animations/WiggleComponent";

const ResumeDownloadButton = () => {
  const handleClick = (event) => {
    event.preventDefault();
    window.open("public/files/srinivas_resume_ sde.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <Button
      onClick={handleClick}
      style={{
        zIndex: 100,
        position: "fixed",
        bottom: "3rem",
        right: "3rem",
      }}
      sx={{
        color: "primary.main",
        borderRadius: "20px",
        borderWidth: "2px",
        borderColor: "primary.main",
      }}
      variant="outlined"
    >
      <WiggleComponent>
        <DownloadIcon sx={{ mr: 1 }} />
      </WiggleComponent>
      <Typography variant="body1" sx={{ mr: 1 }}>
        Resume
      </Typography>
    </Button>
  );
};

export default ResumeDownloadButton;