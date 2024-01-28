import React from "react";
import styles from "../styles/Contact.module.css";
import common from '../styles/Common.module.css';
function Contact({ isDarkMode }) {
  return (
    <div id="contact" className={isDarkMode ? styles.darkMode : ""}>
      <h1>Contact</h1>
      <div className={common.boxes}></div>
    </div>
  );
}

export default Contact;
