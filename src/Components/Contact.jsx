import React, { useEffect } from "react";
import styles from "../styles/Contact.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";
function Contact() {
  useEffect(() => {
    applyScrollReveal(".scrollview");
  }, []);
  return (
    <>
      <div
        id="contact"
        className="scrollview"
      >
        <h1>Contact</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Contact;
