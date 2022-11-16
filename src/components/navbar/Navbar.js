import React, { useState } from "react";
import "./Navbar.css";
import Img from "../../assets/img/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="navLogo" src={Img} />
      <div className={`navItems ${isOpen && "open"}`}>
        <div className="navItem" >Home</div>
        <div className="navItem" >My Skills</div>
        <div className="navItem" >Projects</div>
        <div className="navItem" >About Me</div>
        <div className="navItem" >Contact</div>
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