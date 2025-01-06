"use client";
import { backgroundColor } from "@/common/Colors";
import { Box, Tab, Tabs } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";

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
  Home,
  About,
  Experience,
  Education,
  Skills,
  Projects,
  Contact,
];

const VerticalTabs: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<number>(0); // Active tab index
  const sectionsRef = useRef<(HTMLDivElement | null)[]>([]); // References to sections
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Set up Intersection Observer to observe sections
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionsRef.current.findIndex(
              (section) => section === entry.target
            );
            if (index !== -1) {
              setCurrentTab(index);
            }
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of a section is visible
    );

    // Observe each section
    sectionsRef.current.forEach((section) => {
      if (section) observerRef.current?.observe(section);
    });

    // Cleanup observer on unmount
    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  // Handle tab click: scroll to section
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    sectionsRef.current[newValue]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      {/* Vertical Tabs */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={currentTab}
        onChange={handleTabChange}
        sx={{ width: "20vw" }}
      >
        {tabsNameList.map((label, idx) => {
          return <Tab key={idx} label={label} />;
        })}
      </Tabs>

      {/* Content Sections */}
      <Box sx={{ flex: 1, overflowY: "auto", scrollBehavior: "smooth" }}>
        {sections.map((tab, index) => {
          const SectionComponent = tab;
          return (
            <Box
              key={index}
              ref={(el: HTMLDivElement | null) => {
                sectionsRef.current[index] = el;
              }}
              sx={{
                maxHeight: "400vh",
                minHeight: "100vh",
                display: "flex",
                backgroundColor: backgroundColor,
              }}
            >
              <div style={{ padding: 100 }}>
                <SectionComponent isVisible={currentTab === index} />
              </div>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

const VerticalTabsIntersectionObserver: React.FC = () => {
  return (
    <div>
      <VerticalTabs />
    </div>
  );
};

export default VerticalTabsIntersectionObserver;
