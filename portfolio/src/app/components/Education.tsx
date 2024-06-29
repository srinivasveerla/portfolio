import React from "react";
// import ElementCard from "../layout/ElementCard";
import { Box, Grid, Typography } from "@mui/material";
// import { useData } from "../context/DataContext";
import { Tab, Tabs } from "@mui/material";
// import WorkExPage from "../layout/WorkExPage";

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Education() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  // const data = useData();
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
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab 
            label="Master's in Computer Science"
            sx={{  fontSize: "16px" }}
            {...a11yProps(0)}
          />
          <Tab
            label="Bachelor's in Electronics and Communications"
            wrapped
            sx={{  fontSize: "16px" }}
            {...a11yProps(1)}
          />
        </Tabs>
        
        <CustomTabPanel value={value} index={0}>Hi</CustomTabPanel>
        <CustomTabPanel value={value} index={1}>Hello</CustomTabPanel>
      </Box>
      {/* <Grid
        container
        spacing={1}
        style={{ justifyContent: "center", padding: "20px", paddingTop: "0px" }}
      >
        {data.education.map((e) => (
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ElementCard
              type="education"
              img={e.logo}
              title={e.degree}
              ListElements={e.relevant_courses}
            />
          </Grid>
        ))}
      </Grid> */}
    </div>
  );
}
