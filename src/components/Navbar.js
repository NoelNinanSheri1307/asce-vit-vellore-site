  import React from "react";
  import logo from "../imagesandassets/ascelogo.png";
  import { FaLinkedin, FaInstagram, FaMailBulk } from "react-icons/fa";
  import "./Navbar.css";
  import engineerIcon from "../imagesandassets/engineericon.png";
  import { FiMail } from "react-icons/fi";
  const Navbar = () => {
    return (
      <nav className="navbar">
        <div className="navbar-left">
          <a href="#home" className="navbar-logo">
            <img src={logo} alt="ASCE Logo" height="50" />
          </a>

          {/* Social Icons */}
          <div className="social-icons">
            <a
              href="https://in.linkedin.com/company/ascevit"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="social-icon" />
            </a>
            <a
              href="https://www.instagram.com/asce.vit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="social-icon" />
            </a>
            <a
              href="#contact"
            >
              <FiMail className="social-icon" href="#contact"/>
            </a>
          </div>
        </div>

        <div className="navbar-links">
          <a href="#home">Home</a>
          <a href="#events-internal">Internal</a>
          <a href="#events-external">External</a>
          <a href="#achievements">Achievements</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#about">About</a>
          <a href="#patron">Patron</a>
          <a href="#team">Team</a>
          <a href="#register">Register</a>
          <a href="#gallery">Gallery</a>
          <a href="#archive">Archive</a>
          <a href="#contact">Contact</a>
          <img
            src={engineerIcon}
            alt="Engineer Icon"
            className="engineer-icon"
          />
        </div>
      </nav>
    );
  };

  export default Navbar;
