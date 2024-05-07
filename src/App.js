import React, { useState } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Navbar from "./Navbar/Navbar";
import styles from './styles/Common.module.css'
import { FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { Box } from "@chakra-ui/react";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { Link as ScrollLink } from "react-scroll";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Box
      className={`App ${isDarkMode ? "dark" : ""}`}
      style={{ userSelect: "none" }}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Box className={isDarkMode ? styles.darkMode : ""}>
        <Home />
        <About />
        <Work />
        <Skills />
        <Contact />
      </Box>

      <Box className={styles.staticButtons}>
        <a
          href="https://github.com/yourgithub"
          className={styles.staticButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/yourlinkedin"
          className={styles.staticButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail />
        </a>
        <a
          href="https://yourportfolio.com"
          className={styles.staticButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </Box>
      <Box className={styles.bottomRightButton}>
        <ScrollLink
          className={styles.bottomButton}
          to={"home"}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          rel="noopener noreferrer"
        >
          <MdOutlineKeyboardDoubleArrowUp />
        </ScrollLink>
      </Box>
    </Box>
  );
}

export default App;
