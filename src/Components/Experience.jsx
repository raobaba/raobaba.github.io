import React, { useEffect } from "react";
import styles from "../styles/Experience.module.css";
import common from '../styles/Common.module.css';
import { applyScrollReveal } from "../config/scrollRevealConfig";
function Experience({ isDarkMode }) {
  useEffect(() => {
    applyScrollReveal('.scrollview');
  }, []);
  return (
    <>
    
    <div id="experience" className={`${isDarkMode ? styles.darkMode : ""} scrollview`}>
      <h1>Experience</h1>
      <div className={common.boxes}></div>
    </div>
    </>
  );
}

export default Experience;
