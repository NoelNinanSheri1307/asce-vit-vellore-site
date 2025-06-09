import { motion } from "framer-motion";
import "./Achievements.css";

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="achievements-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Our Achievements</h2>

      <div className="achievement-card">
        <h3>National Level Award – 2023</h3>
        <p>
          ASCE VIT won the Best Student Chapter Award at the ASCE India
          Conference 2023 for outstanding contributions to civil engineering
          education and outreach.
        </p>
      </div>

      <div className="achievement-card">
        <h3>Innovation Recognition – 2024</h3>
        <p>
          Recognized for innovation in sustainable construction at a national
          expo. The project was led by the Green Civil Initiative team.
        </p>
      </div>

      <div className="achievement-card">
        <h3>Technical Paper Presentation</h3>
        <p>
          Our paper on Seismic Retrofitting Techniques was selected and
          presented at the International Civil Engineering Conference 2024.
        </p>
      </div>
    </motion.section>
  );
};

export default Achievements;
