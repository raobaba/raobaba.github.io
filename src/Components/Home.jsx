import React from "react";
import styles from '../styles/Home.module.css';
function Home({isDarkMode }) {
  return (
    <div 
    id="home" 
    style={{paddingTop:'100px',}} 
    className={isDarkMode ? styles.darkMode : ''}
    >
      <h1>Home</h1>
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

export default Home;
