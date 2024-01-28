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
import styles from "../styles/Navbar.module.css";
import { Link as ScrollLink } from "react-scroll";

function Navbar({ isDarkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState("home");
  const [clickedSection, setClickedSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isXL] = useMediaQuery("(max-width: 1200px)"); // Detect XL screen size

  const handleSectionClick = (sectionId) => {
    setClickedSection(sectionId);
  };

  // Define an array of sections
  const sections = [
    { id: "home", name: "HOME" },
    { id: "about", name: "ABOUT" },
    { id: "experience", name: "EXPERIENCE" },
    { id: "project", name: "PROJECT" },
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
      left="0"
      right="0"
      zIndex="1000"
      position="fixed"
      borderColor="gray.200"
      box-shadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
      className={isDarkMode ? styles.darkMode : ""}
      style={isDarkMode ? {} : { backgroundColor: "#FFFFFF" }}
    >
      <Box>
        <Text className={styles.name} fontSize="4xl" fontWeight="bold">
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
              fontSize="2xl"
              icon={
                isMenuOpen ? (
                  <CloseIcon
                    style={{
                      fontSize: "30px",
                      marginTop: "-6px",
                      backgroundColor: isDarkMode ? "rgb(31, 24, 24)" : "white",
                      color: isDarkMode ? "white" : "rgb(31, 24, 24)",
                    }}
                  />
                ) : (
                  <HamburgerIcon
                    style={{
                      fontSize: "55px",
                      marginTop: "-6px",
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
                marginRight="5"
                fontSize="20px"
                fontWeight="normal"
                cursor="pointer"
              >
                <ScrollLink
                  to={`${section.id}`}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
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
                </ScrollLink>
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
            fontSize="2xl"
            icon={<SunIcon />}
            variant="ghost"
            style={{
              backgroundColor: "#007bff",
              color: "#fff",
              border: "none",
              background: "linear-gradient(to right, #007bff, #525ac0)",
              margin: "8px 8px",
            }}
            onClick={toggleDarkMode}
          />
        ) : (
          <IconButton
            aria-label="Toggle Dark Mode"
            fontSize="2xl"
            icon={<MoonIcon />}
            variant="ghost"
            style={{
              margin: "8px 8px",
              fontSize: "35px",
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
          box-shadow="rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px"
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
            <Box
              as="li"
              key={section.id}
              marginRight="5"
              fontSize="20px"
              fontWeight="normal"
              cursor="pointer"
            >
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
            style={{ marginTop: "12px" }}
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
