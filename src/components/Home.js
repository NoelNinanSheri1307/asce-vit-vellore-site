import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Home.css";
import teamImage from "../imagesandassets/asceteam.jpg";

const Home = () => {
  const fullText = "Weelcome to ASCE VIT";
  const [typedText, setTypedText] = useState("");
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
  if (index >= fullText.length) {
    clearInterval(interval);
    setIsTypingDone(true);
    return;
  }
  setTypedText((prev) => prev + fullText.charAt(index));
  index++;
}, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id="home"
      className="home-section"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(17,17,17,0.6)), url(${teamImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "white",
        zIndex: 0,
        position:"relative"
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className={`typewriter-heading ${isTypingDone ? "done" : ""}`}
      >
        {typedText}
      </motion.h1>

      <h1>Empowering the Civil Engineers of Tomorrow </h1>
      <p>
        The American Society of Civil Engineers (ASCE) Student Chapter at VIT Vellore is
        a vibrant student-led initiative committed to shaping the next generation of civil engineering professionals. Driven by innovation, collaboration, and technical excellence, we provide a platform for students to explore real-world challenges, develop industry-relevant skills, and lead meaningful change in the field of infrastructure. 
        From classrooms to real-world engineering; the journey begins here, with  ASCE VIT. 
        We don’t just learn civil engineering : we live it, lead it, and elevate it.
      </p>
      <h1>Explore. Innovate. Build.<br />Welcome to your future in civil engineering.</h1>
      <div className="quick-links">
        <a href="#register">Join ASCE</a>
        <a href="#events-internal">Events</a>
        <a href="#gallery">Gallery</a>
      </div>
    </motion.section>
  );
};

export default Home;
