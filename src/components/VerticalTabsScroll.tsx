"use client";

import { backgroundColor } from "@/assets/Colors";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

interface SectionRef {
  current: HTMLDivElement | null;
}

{
  /* <Tab label="About" {...a11yProps(1)} />
          <Tab label="Experience" {...a11yProps(2)} />
          <Tab label="Education" {...a11yProps(3)} />
          <Tab label="Skills" {...a11yProps(4)} />
          <Tab label="Projects" {...a11yProps(5)} />
          <Tab label="Contact" {...a11yProps(6)} /> */
}

const tabsNameList = [
  "Sushma Manthena",
  "About",
  "Experience",
  "Education",
  "Skills",
  "Projects",
  "Contact",
];

const sections = [
  <Home key={0} />,
  <About key={1} />,
  <Experience key={2} />,
  <Education key={3} />,
  <Skills key={4} />,
  <Projects key={5} />,
  <Contact key={6} />,
];

const VerticalTabsWithScroll: React.FC = () => {
  const [value, setValue] = useState<number>(0);
  const sectionsRefs = useRef<Array<SectionRef>>([]);

  // Handle tab change when clicking on tabs
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    // Scroll to the corresponding section
    sectionsRefs.current[newValue]?.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  // Synchronize the tabs with the visible section on scroll
  const handleScroll = () => {
    const sectionPositions = sectionsRefs.current.map((section) =>
      section.current
        ? section.current.getBoundingClientRect().top
        : Number.POSITIVE_INFINITY
    );

    const closestIndex = sectionPositions.reduce((closest, position, index) => {
      return Math.abs(position) < Math.abs(sectionPositions[closest])
        ? index
        : closest;
    }, 0);

    setValue(closestIndex);
  };

  // Initialize section refs
  useEffect(() => {
    if (sectionsRefs.current.length === 0) {
      sectionsRefs.current = Array(4)
        .fill(null)
        .map(() => ({ current: null }));
    }
  }, []);

  return (
    <Box sx={{ display: "flex", height: "100vh", overflow: "hidden" }}>
      {/* Vertical Tabs */}
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleTabChange}
        sx={{ width: "30vw" }}
      >
        {tabsNameList.map((label, idx) => {
          return <Tab key={idx} label={label} />;
        })}
      </Tabs>

      {/* Content Sections */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "scroll",
          height: "100vh",
        }}
        onScroll={handleScroll}
      >
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el: HTMLDivElement) => {
              sectionsRefs.current[index] = { current: el };
            }}
            style={{
              height: "100vh",
              display: "flex",
              padding: 100,
              backgroundColor: backgroundColor,
            }}
          >
            {section}
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default VerticalTabsWithScroll;
