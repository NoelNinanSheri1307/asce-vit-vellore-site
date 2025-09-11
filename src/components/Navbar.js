import { useState } from "react";
import logo from "../imagesandassets/ascelogo.png";
import engineerIcon from "../imagesandassets/engineericon.png";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#home" className="navbar-logo">
          <img src={logo} alt="ASCE Logo" height="50" />
        </a>
      </div>

      <button
  className="menu-btn"
  onClick={() => setOpen(!open)}
  aria-label={open ? "Close menu" : "Open menu"}
  aria-expanded={open}
  aria-controls="primary-navigation"
>
  {open ? <FiX /> : <FiMenu />}
</button>

      <div id="primary-navigation" className={`navbar-links ${open ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#achievements">Achievements</a>
        <a href="#patron">Faculty</a>
        <a href="#team">Team</a>
        <a href="#register">Register</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
        <img src={engineerIcon} alt="Engineer Icon" className="engineer-icon" />
      </div>

      <div className="navbar-right">
        <div className="social-icons">
          <a href="https://in.linkedin.com/company/ascevit" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="social-icon" />
          </a>
          <a href="https://www.instagram.com/asce.vit/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="#contact">
            <FiMail className="social-icon" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
