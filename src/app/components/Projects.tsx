import { Box, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import ElementCard from "../layout/ElementCard";
import CustomTabPanel from "./CustomTabPanel";

export default function Projects() {
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

  const projects = [
    {
      label: "One two trewww",
      title: "",
      desc: "",
      listElements: [],
      giturl: "",
      demourl: "",
      imgurl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    },
    {
      label: "Item Two Cart",
      title: "",
      desc: "",
      listElements: [],
      giturl: "",
      demourl: "",
      imgurl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    },
    {
      label: "my Dictionary",
      title: "",
      desc: "",
      listElements: [],
      giturl: "",
      demourl: "",
      imgurl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
    },
  ];

  return (
    <div>
      <Typography variant="h4" style={{ padding: "20px" }}>
        PROJECTS
      </Typography>
      <Box sx={{ display: "flex", borderColor: "divider", margin: "20px" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          orientation="vertical"
          style={{
            maxWidth: "200px",
          }}
        >
          {projects.map((project, index) => (
            <Tab
              sx={{ textAlign: "right" }}
              label={project.label}
              {...a11yProps(index)}
              key={index}
            />
          ))}
        </Tabs>
        {projects.map((project, index) => (
          <CustomTabPanel value={value} index={index} key={index}>
            <ElementCard
              type="project"
              title={project.title}
              description={project.desc}
              img={project.imgurl}
              gitUrl={project.giturl}
              demoUrl={project.demourl}
              listElements={project.listElements}
            />
          </CustomTabPanel>
        ))}
      </Box>
    </div>
  );
}
