import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Achievements.css";
import symposiumImg from "../imagesandassets/symposiumwinners.jpg"; 
import aakarImg from "../imagesandassets/aakarwinners.jpg"; 

const achievements = [
  {
    title: "ASCE India Student Symposium 2025",
    summary:
      "Multiple awards including runner-up and third-place positions across Poster Making, Design Challenges, and Quizzes.",
    image: symposiumImg,
    details: (
      <>
        <h4>🏅 Runner-up – Technical Poster Making</h4>
        <ul>
          <li>Niranjana S (22BCL0054)</li>
          <li>Sreya Prasobh (22BCL0079)</li>
          <li>Lakshmi Nair (22BCL0110)</li>
          <li>Athidharani K.V (23BCL0011)</li>
          <li>Vignesh Pranav V.S (23BCL0012)</li>
          <li>Lakshmi S (23BCL0089)</li>
        </ul>
        <h4>🏅 Runner-up – Sky Is Pink – Design Challenge</h4>
        <ul>
          <li>Annie Elsa Sujith (22BCL0006)</li>
          <li>Ratna Pani Bajracharya (22BCL0142)</li>
          <li>Abhijith Maneesh (23BCL0036)</li>
          <li>Mishal Aslam (23BCL0041)</li>
          <li>Tourangbam Achamba (23BCL0042)</li>
        </ul>
        <h4>🥉 Third Place – Inquisitive Quiz</h4>
        <ul>
          <li>Varoon R (23BCL0013)</li>
          <li>Nishok Kumaar G.P (23BCL0026)</li>
          <li>Abhinav Sahil (23BCL0060)</li>
        </ul>
        <h4>🥉 Third Place – Design & Innovation Concept</h4>
        <ul>
          <li>Niranjana S (22BCL0054)</li>
          <li>Merlin T Jai (22BCL0072)</li>
          <li>Sreya Prasobh (22BCL0079)</li>
          <li>Lakshmi Nair (22BCL0110)</li>
          <li>Harshit Sajeevan (22BCL0124)</li>
          <li>Vignesh Pranav V.S (23BCL0012)</li>
        </ul>
        <h4>🥉 Third Place – ASCE UESI Surveying</h4>
        <ul>
          <li>Ajay Shankar (22BCL0105)</li>
          <li>Ratna Pani Bajracharya (22BCL0142)</li>
          <li>Abhijith Maneesh (23BCL0036)</li>
          <li>Mishal Aslam (23BCL0041)</li>
          <li>Tourangbam Achamba (23BCL0042)</li>
          <li>Abhinav Sahil (23BCL0060)</li>
        </ul>
      </>
    ),
  },
  {
    title: "IIT Bombay – Aakar 2025",
    summary: "1st Prize in the Open Roads Designer Competition by a dynamic VIT team.",
    image: aakarImg,
    details: (
      <>
        <h4>🥇 1st Prize – Open Roads Designer</h4>
        <ul>
          <li>Athidharani K V (23BCL0011)</li>
          <li>Nishok Kumar G.P. (23BCL0026)</li>
          <li>Varoon R. (23BCL0013)</li>
        </ul>
      </>
    ),
  },
];

const Achievements = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }
    return () => document.body.classList.remove("modal-open");
  }, [selected]);

  return (
    <motion.section
      id="achievements"
      className="achievements-section common-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Our Achievements</h2>
      <div className="achievements-container">
        {achievements.map((achievement, index) => (
          <div
            className="achievement-card shimmer-border"
            key={index}
            onClick={() => setSelected(achievement)}
          >
            <div className="achievement-text">
              <h3>{achievement.title}</h3>
              <p>{achievement.summary}</p>
            </div>
            <div className="achievement-img">
              <img src={achievement.image} alt={achievement.title} />
            </div>
          </div>
        ))}
      </div>
      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelected(null)}>
              ×
            </button>
            <h2>{selected.title}</h2>
            <div className="modal-body">{selected.details}</div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Achievements;
