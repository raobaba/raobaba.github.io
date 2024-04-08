import React, { useEffect } from "react";
import styles from "../styles/Home.module.css";
import common from "../styles/Common.module.css";
import { applyScrollReveal } from "../config/scrollRevealConfig";

function Home({ isDarkMode }) {
  useEffect(() => {
    applyScrollReveal('.scrollview');
  }, []);

  return (
    <>
      <div
        id="home"
        style={{ paddingTop: "100px" }}
        className={`${isDarkMode ? styles.darkMode : ""} scrollview`}
      >
        <h1>Home</h1>
        <div className={common.boxes}></div>
      </div>
    </>
  );
}

export default Home;
