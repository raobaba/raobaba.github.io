import React from "react";
import styles from "../styles/Certificate.module.css";
import common from '../styles/Common.module.css';
function Certificate({ isDarkMode }) {
  return (
    <div id="certificate" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Certificate</h1>
      <div className={common.boxes}></div>
    </div>
  );
}

export default Certificate;
