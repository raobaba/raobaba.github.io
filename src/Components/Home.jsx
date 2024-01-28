import React from "react";
import styles from '../styles/Home.module.css';
import common from '../styles/Common.module.css';
function Home({isDarkMode }) {
  return (
    <div 
    id="home" 
    style={{paddingTop:'100px',}} 
    className={isDarkMode ? styles.darkMode : ''}
    >
      <h1>Home</h1>
      <div className={common.boxes}></div>
    </div>
  );
}

export default Home;
