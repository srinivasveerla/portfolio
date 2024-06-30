import React from "react";
import { Button } from "@mui/material";
import ArrowCircleUpSharpIcon from "@mui/icons-material/ArrowCircleUpSharp";

// import WiggleComponent from "../animations/WiggleComponent";

const NavigateHomeButton = () => (
  <Button
    style={{
      position: "fixed",
      bottom: "2rem",
      left: "2rem",
    }}
    sx={{
      color: "primary.main",
      borderRadius: "20px",
    }}
    onClick={() => window.scrollTo(0, 0)}
  >
    <ArrowCircleUpSharpIcon color="primary" />
  </Button>
);

export default NavigateHomeButton;
