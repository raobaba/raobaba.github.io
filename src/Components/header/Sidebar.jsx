import React from "react";
import "./Sidebar.css";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
function Sidebar({ sidebar, close }) {
  return (
    <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
        onClick={close}
      >
        <li>Home</li>
      </Link>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        onClick={close}
      >
        <li>About</li>
      </Link>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Skills</li>
      </Link>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="certificates"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Certificates</li>
      </Link>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Projects</li>
      </Link>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="github"
        spy={true}
        smooth={true}
        offset={-80}
        duration={500}
        onClick={close}
      >
        <li>Github</li>
      </Link>
      <Link
        className="nav-menu nav-link.home"
        activeClass="active"
        to="Contact"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        onClick={close}
      >
        <li>Contact</li>
      </Link>
    </div>
  );
}

export default Sidebar;
