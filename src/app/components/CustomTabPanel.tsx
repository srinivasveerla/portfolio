import { Box, BoxProps } from "@mui/material";
import React from "react";

export interface TabPanelProps extends BoxProps {
  children?: React.ReactNode;
  index: number;
  value: number;

}
const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Box>
  );
};

export default CustomTabPanel;
