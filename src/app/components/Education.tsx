import React from "react";
import { Box, Typography } from "@mui/material";
import { Tab, Tabs } from "@mui/material";
import CustomTabPanel from "./CustomTabPanel";

export default function Education() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const a11yProps = (index: number) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  };

  return (
    <div style={{ paddingTop: "50px" }}>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          padding: "20px",
        }}
      >
        EDUCATION
      </Typography>
      <Box sx={{ borderColor: "divider", margin: "20px" }}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab
            label="Master's in Computer Science"
            sx={{ fontSize: "16px" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Bachelor's in Electronics and Communications"
            wrapped
            sx={{ fontSize: "16px" }}
            {...a11yProps(1)}
          />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          Hi
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Hello
        </CustomTabPanel>
      </Box>
    </div>
  );
}
