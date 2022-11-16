import React, { useState } from "react";
import "./Navbar.css";
import Img from "../../assets/img/logo.png"
import {Link} from 'react-scroll'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar" >
      <img className="navLogo" src={Img} alt="logo" />
      <div className={`navItems ${isOpen && "open"}`}>
        <div className="navItem" >
          <Link to="home" activeClass="active" spy={true} smooth={true}>
          Home
          </Link>
        </div>
        <div className="navItem" >
        <Link to="skills" activeClass="active" spy={true} smooth={true}>
        My Skills
          </Link>
          </div>
        <div className="navItem" >
        <Link to="projects" activeClass="active" spy={true} smooth={true}>
        Projects
          </Link>
          </div>
        <div className="navItem" >
        <Link to="about" activeClass="active" spy={true} smooth={true}>
        About Me
          </Link>
          </div>
        <div className="navItem" >
        <Link to="contact" activeClass="active" spy={true} smooth={true}>
        Contact
          </Link>
          </div>
      </div>
      <div
        className={`navToggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;