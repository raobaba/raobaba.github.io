import React, { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Work from "./Components/Work";
import Navbar from "./Navbar/Navbar";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const disableRightClick = (e) => {
    e.preventDefault();
  }; 
  
  document.addEventListener("contextmenu", disableRightClick);

  const disableCopyAndPaste = (e) => {
    e.preventDefault();
  };

  document.addEventListener("copy", disableCopyAndPaste);
  document.addEventListener("cut", disableCopyAndPaste);
  document.addEventListener("paste", disableCopyAndPaste);

  return (
    <div
      className={`App ${isDarkMode ? "dark" : ""}`}
      style={{ userSelect: "none" }}
    >
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <div>
        <Home isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <Work isDarkMode={isDarkMode} />
        <Skills isDarkMode={isDarkMode} />
        <Certificate isDarkMode={isDarkMode} />
        <Contact isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default App;
