import React, { useEffect } from "react";
import styles from "../styles/Skill.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
function Project({ isDarkMode }) {
  useEffect(() => {
    applyScrollReveal('.scrollview');
  }, []);
  return (
    <>
    
      <div id="project" className={`${isDarkMode ? styles.darkMode : ""} scrollview`}>
        <h1>Projects</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Project;
