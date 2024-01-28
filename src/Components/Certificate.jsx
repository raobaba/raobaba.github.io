import React from "react";
import styles from "../styles/Certificate.module.css";
function Certificate({ isDarkMode }) {
  return (
    <div id="certificate" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Certificate</h1>
      <div
        style={{
          width: "90%",
          height: "400px",
          border: "1px solid black",
          margin: "auto",
        }}
      ></div>
    </div>
  );
}

export default Certificate;
