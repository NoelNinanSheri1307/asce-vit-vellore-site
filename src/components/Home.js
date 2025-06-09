import React from "react";
import { motion } from "framer-motion";
import "./Home.css"; 

const Home = () => {
  return (
    <motion.section
      id="home"
      className="home-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h1>Welcome to ASCE VIT</h1>
      <p>
        We are the official student chapter of the American Society of Civil Engineers at VIT. 
        Explore our achievements, events, and team.
      </p>
      <div className="quick-links">
        <a href="#register">Join ASCE</a>
        <a href="#events-internal">Events</a>
        <a href="#gallery">Gallery</a>
      </div>
    </motion.section>
  );
};

export default Home;
