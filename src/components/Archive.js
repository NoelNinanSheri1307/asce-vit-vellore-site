// Archive.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Archive.css";

const archiveData = [
  {
    year: "2023–24",
    events: ["Civil Quiz Fest", "Bridge Design Contest"],
    team: "Team Led by Arpit & Noel",
    highlights: ["2nd Place - TechExpo", "Paper Published in CivilScope"],
  },
  {
    year: "2022–23",
    events: ["GeoTech Challenge", "Concrete Workshop"],
    team: "Team Led by Sakshi & Aditya",
    highlights: ["Best College Chapter Award", "Runner-up - Infra Hackathon"],
  },
];

const Archive = () => {
  return (
    <motion.section
      id="archive"
      className="archive-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Archive</h2>
      <div className="archive-list">
        {archiveData.map((item, index) => (
          <div key={index} className="archive-box">
            <h3>{item.year}</h3>
            <p><strong>Team:</strong> {item.team}</p>
            <p><strong>Events:</strong></p>
            <ul>
              {item.events.map((event, i) => (
                <li key={i}>{event}</li>
              ))}
            </ul>
            <p><strong>Highlights:</strong></p>
            <ul>
              {item.highlights.map((h, j) => (
                <li key={j}>{h}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Archive;
