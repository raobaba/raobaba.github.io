import React, { useState } from "react";
import { Box, Flex, Text, Button, Spacer, IconButton } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import styles from "../Style/Navbar.module.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState("home");

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const handleSectionClick = (sectionId) => {
    setClickedSection(sectionId);
  };

  // Define an array of sections
  const sections = [
    { id: "home", name: "HOME" },
    { id: "about", name: "ABOUT" },
    { id: "work", name: "WORK" },
    { id: "skills", name: "SKILLS" },
    { id: "certificate", name: "CERTIFICATES" },
    { id: "contact", name: "CONTACT" },
  ];

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      borderBottom="1px"
      borderColor="gray.200"
      className={isDarkMode ? styles.darkMode : ""}
    >
      <Box>
        <Text className={styles.name} fontSize="5xl" fontWeight="bold">
          RAJAN
        </Text>
      </Box>
      <Spacer />
      <Flex as="ul" listStyleType="none">
        {sections.map((section) => (
          <Box
            as="li"
            key={section.id}
            marginRight="8"
            fontSize="2xl"
            fontWeight="bold"
          >
            <a
              href={`#${section.id}`}
              onClick={() => handleSectionClick(section.id)}
              onMouseEnter={() => setActiveSection(section.id)}
              className={`${
                activeSection === section.id || clickedSection === section.id
                  ? styles.active
                  : ""
              } ${clickedSection === section.id ? styles.click : ""}`}
            >
              {section.name}
            </a>
          </Box>
        ))}
      </Flex>
      <button className={styles.button}>
        RESUME
      </button>
      <Flex align="center">
        {isDarkMode ? (
          <IconButton
            aria-label="Toggle Light Mode"
            fontSize="3xl"
            icon={<MoonIcon />}
            variant="ghost"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              background: "linear-gradient(to right, #007bff, #525ac0)",
              margin:"10px 10px"
            }}
            onClick={toggleDarkMode}
          />
        ) : (
          <IconButton
            aria-label="Toggle Dark Mode"
            fontSize="3xl"
            icon={<SunIcon />}
            variant="ghost"
            style={{
              margin:"10px 10px"
            }}
            onClick={toggleDarkMode}
          />
        )}
      </Flex>
    </Flex>
  );
}

export default Navbar;
