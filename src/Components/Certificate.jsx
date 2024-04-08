import React, { useEffect } from "react";
import styles from "../styles/Certificate.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
function Certificate({ isDarkMode }) {
    useEffect(() => {
    applyScrollReveal('.scrollview');
  }, []);
  return (
    <>
    
      <div id="certificate" className={`${isDarkMode ? styles.darkMode : ""} scrollview`}>
        <h1>Certificate</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Certificate;
