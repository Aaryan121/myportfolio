import React, { useState } from "react";
import "./Navbar.css";
import Img from "../../assets/img/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <img className="nav-logo" src={Img} />
      <div className={`nav-items ${isOpen && "open"}`}>
        <div className="nav-item" >Home</div>
        <div className="nav-item" >My Skills</div>
        <div className="nav-item" >Projects</div>
        <div className="nav-item" >About Me</div>
        <div className="nav-item" >Contact</div>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;