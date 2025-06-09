import { motion } from "framer-motion";
import "./Winners.css";

const Winners = () => {
  return (
    <motion.section
      id="winners"
      className="winners-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Winners</h2>

      <div className="winner-category">
        <h3>Internal Events - 2024</h3>
        <ul>
          <li>Model Building: Team Alpha (Rohit, Anika)</li>
          <li>Survey Workshop: Jane Smith, Arav</li>
        </ul>
      </div>

      <div className="winner-category">
        <h3>External Events - 2024</h3>
        <ul>
          <li>Bridge Design @ IITM: Arjun R, Priya M (2nd Place)</li>
          <li>Concrete Canoe @ NIT Trichy: Team Concrete Champs (Special Mention)</li>
        </ul>
      </div>
    </motion.section>
  );
};

export default Winners;
