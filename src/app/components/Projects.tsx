import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import ElementCard from "../layout/ElementCard";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3, width: "60vw" }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Projects() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Typography variant="h4" style={{ padding: "20px" }}>
        PROJECTS
      </Typography>
      <Box sx={{ display: "flex", borderColor: "divider", margin: "20px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          //aria-label="basic tabs example"
          orientation="vertical"
          style={{
            maxWidth: "200px",
          }}
        >
          <Tab
            sx={{ textAlign: "right" }}
            label="One two trewww"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ textAlign: "right" }}
            label="Item Two Cart"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ textAlign: "right" }}
            label="my Dictionary"
            {...a11yProps(2)}
          />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <ElementCard
            type="project"
            title=""
            img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            ListElements={[]}
          />
          {/* <ProjectCard reverse={true} /> */}
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <ElementCard
            type="project"
            title=""
            img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            ListElements={[]}
          />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ElementCard
            type="project"
            title=""
            img="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
            ListElements={[]}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
