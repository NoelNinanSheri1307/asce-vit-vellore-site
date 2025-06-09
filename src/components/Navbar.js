import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#events-internal">Internal</a>
        <a href="#events-external">External</a>
        <a href="#winners">Winners</a>
        <a href="#achievements">Achievements</a>
        <a href="#sponsors">Sponsors</a>
        <a href="#about">About</a>
        <a href="#patron">Patron</a>
        <a href="#team">Team</a>
        <a href="#register">Register</a>
        <a href="#gallery">Gallery</a>
        <a href="#archive">Archive</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
