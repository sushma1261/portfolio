"use client";
import { backgroundColor } from "@/common/Colors";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import * as React from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        borderRight: 1,
        borderColor: "red",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          // height: "100vh",
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ width: "20vw" }}
          scrollButtons="auto"
        >
          <Tab
            label={
              <React.Fragment>
                <Box
                  sx={{
                    height: 100,
                    alignItems: "center",
                    alignContent: "center",
                    justifyContent: "center",
                  }}
                >
                  Sushma Manthena
                </Box>
              </React.Fragment>
            }
            {...a11yProps(0)}
          />
          <Tab label="About" {...a11yProps(1)} />
          <Tab label="Experience" {...a11yProps(2)} />
          <Tab label="Education" {...a11yProps(3)} />
          <Tab label="Skills" {...a11yProps(4)} />
          <Tab label="Projects" {...a11yProps(5)} />
          <Tab label="Contact" {...a11yProps(6)} />
        </Tabs>
        <CustomTabPanel value={value} index={0}>
          <Home />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <About />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Experience />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <Education />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <Box>Skills</Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <Box>Projects</Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <Contact />
        </CustomTabPanel>
      </Box>
    </Box>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

const CustomTabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      style={{
        padding: 100,
        background: backgroundColor,
        width: "80vw",
      }}
      {...other}
    >
      <Box>{children}</Box>
    </div>
  );
};
