import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Box, Flex, Image } from "@chakra-ui/react";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
import AOS from "aos";
import handleClick from "../utils/Contant";
import TypewriterEffect from "../utils/Typewritter";

function Home() {
  const dynamicTexts  = [
    " Full Stack Developer.",
    " Tech Enthusiast.",
    " Life Long Learner.",
  ]; 
  const staticText = "I'm "; 
  const speed = 200;
  useEffect(() => {
    applyScrollReveal(".scrollview");
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <>
      <Box iv id="home" style={{ paddingTop: "100px" }} className="scrollview">
        <Flex className={common.boxes}>
          <Flex className={styles.aboutContainer}>
            <Flex className={styles.content}>
              <Box className={styles.aboutText}>
                <h2>Hello <span className={styles.wave}>👋</span> My name is </h2>
                <p>Rajan Kumar.</p>
                <Flex style={{ display: "flex" }}>
                  {" "}
                  <TypewriterEffect dynamicTexts={dynamicTexts} staticText={staticText} speed={speed} />
                </Flex>
                <a
                  download="Rajan-Kumar-Resume"
                  onClick={handleClick}
                  className={styles.resumeButton}
                >
                  Resume
                </a>
              </Box>
            </Flex>
            <Box className={styles.imageContainer}>
              <Box className={styles.imageWithCircle}>
                <Image src="/profile.png" alt="Rajan Kumar" />
              </Box>
            </Box>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default Home;
