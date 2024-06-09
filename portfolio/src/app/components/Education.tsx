import { Typography } from "@mui/material";
import React from "react";
import ElementCard from "../layout/ElementCard";

export default function Education() {
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        EDUCATION
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <ElementCard
          title="Bachelor of Technology"
          ListElements={[
            { name: "Computer Science and Engineering" },
            { name: "Chandigarh University" },
          ]}
        />
        <ElementCard
          title="Higher Secondary School"
          ListElements={[{ name: "CBSE Board" }, { name: "Chandigarh Board" }]}
        />
      </div>
    </div>
  );
}
