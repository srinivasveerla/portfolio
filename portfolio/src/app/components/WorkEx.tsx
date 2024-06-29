import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import WorkExPage from "../layout/WorkExPage";
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
      {value === index && <Box sx={{p: 3, width: "60vw"}}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function WorkEx() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div
    style={{ paddingTop: "50px" }}
    >
      <Typography variant="h4" style={{ padding: "20px" }}>
        WORK EXPERIENCE
      </Typography>
      <Box sx={{  borderColor: "divider", margin: "20px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
        >
          <Tab label="WIPRO" sx={{ fontSize: "16px"}} {...a11yProps(0)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <WorkExPage
            titles_descs={[
              { title: "Frontend Developer", desc: "WIPRO",skills:["React","Redux","JQuery","Blazor"] },
            ]}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
