import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import WorkExPage from "../layout/WorkExPage";
import PhoneIcon from '@mui/icons-material/Phone';
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
    //style={{ backgroundColor: "blue" }}
    >
      <Typography variant="h4" style={{ padding: "20px" }}>
        WORK EXPERIENCE
      </Typography>
      <Box sx={{ display: "flex", borderColor: "divider", margin: "20px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          //aria-label="basic tabs example"
          style={{
            maxWidth: "200px",
          }}
          orientation="vertical"
        >
          <Tab icon={<PhoneIcon />} {...a11yProps(0)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <WorkExPage
            titles_descs={[
              { title: "Frontend Developer", desc: "WIPRO",skills:["React","Redux","JQuery","Blazor"] },
              { title: ".NET Developer", desc: "WIPRO",skills:["React","Redux","JQuery","Blazor"] },
            ]}
          />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
