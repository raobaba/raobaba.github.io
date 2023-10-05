import React from "react";
import { Route, Routes } from "react-router-dom"; // Make sure to import Routes as well
import Home from "../Components/Home";
import About from "../Components/About";
import Work from "../Components/Work";
import Skills from "../Components/Skills";
import Certificate from "../Components/Certificate";
import Contact from "../Components/Contact";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Routing;
