import React, { useState } from "react";
import {
  Box,
  Flex,
  Text,
  Spacer,
  IconButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import styles from "../Style/Navbar.module.css";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isXL] = useMediaQuery("(max-width: 1200px)"); // Detect XL screen size

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
      {isXL ? (
        // XL screen: Show menu button and hide sections
        <>
          <Spacer />
          <Flex>
            <IconButton
              aria-label="Toggle Menu"
              fontSize="3xl"
              icon={
                isMenuOpen ? (
                  <CloseIcon
                    style={{
                      fontSize:"30px",
                      marginTop:"-6px",
                      backgroundColor: isDarkMode ? "rgb(31, 24, 24)" : "white",
                      color: isDarkMode ? "white" : "rgb(31, 24, 24)",
                    }}
                  />
                ) : (
                  <HamburgerIcon
                    style={{
                      fontSize:"55px",
                      marginTop:"-6px",
                      backgroundColor: isDarkMode ? "rgb(31, 24, 24)" : "white",
                      color: isDarkMode ? "white" : "rgb(31, 24, 24)",
                    }}
                  />
                )
              }
              variant="ghost"
              style={{
                margin: "10px 10px",
                display: "block",
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
          </Flex>
        </>
      ) : (
        // Non-XL screen: Show sections and RESUME button
        <>
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
                    activeSection === section.id ||
                    clickedSection === section.id
                      ? styles.active
                      : ""
                  } ${clickedSection === section.id ? styles.click : ""}`}
                >
                  {section.name}
                </a>
              </Box>
            ))}
          </Flex>
          <button className={styles.button}>RESUME</button>
        </>
      )}
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
              margin: "10px 10px",
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
              margin: "10px 10px",
              fontSize:"35px"
            }}
            onClick={toggleDarkMode}
          />
        )}
      </Flex>
      {/* Toggle sections visibility */}
      {isMenuOpen && (
        <Flex
          as="ul"
          listStyleType="none"
          flexDirection="column"
          alignItems="flex-end"
          position="absolute"
          top="105px"
          borderColor="gray.200"
          right="1px"
          style={{
            backgroundColor: isDarkMode ? "rgb(31, 24, 24)" : "white",
            color: isDarkMode ? "white" : "rgb(31, 24, 24)",
          }}
          borderBottomLeftRadius="10px"
          boxShadow="md"
          padding="6"
          zIndex="999"
        >
          {sections.map((section) => (
            <Box as="li" key={section.id} fontSize="2xl" marginTop="10px" fontWeight="bold">
              <a
                href={`#${section.id}`}
                onClick={() => {
                  handleSectionClick(section.id);
                  setIsMenuOpen(false); // Close the menu on section click
                }}
                className={`${
                  activeSection === section.id ? styles.active : ""
                } ${clickedSection === section.id ? styles.click : ""}`}
              >
                {section.name}
              </a>
            </Box>
          ))}
          <button
            className={styles.button}
            style={{marginTop:'12px'}}
            onClick={() => setIsMenuOpen(false)} // Close the menu on button click
          >
            RESUME
          </button>
        </Flex>
      )}
    </Flex>
  );
}

export default Navbar;
