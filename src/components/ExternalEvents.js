import { motion } from "framer-motion";
import "./ExternalEvents.css";

const ExternalEvents = () => {
  return (
    <motion.section
      id="events-external"
      className="external-events-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>External Events</h2>

      <div className="event-card">
        <h3>Bridge Design Competition - IIT Madras</h3>
        <p>Date: March 10, 2024</p>
        <p>
          Description: Our team represented ASCE VIT at a national-level bridge
          design competition and secured the 2nd position.
        </p>
        <p>Representatives: Arjun R, Priya M</p>
        <p>Outcome: Runner-Up</p>
      </div>

      <div className="event-card">
        <h3>Concrete Canoe Challenge - NIT Trichy</h3>
        <p>Date: April 2, 2024</p>
        <p>
          Description: Participated in an intercollegiate competition showcasing
          innovation in lightweight concrete materials.
        </p>
        <p>Representatives: Team Concrete Champs</p>
        <p>Outcome: Special Jury Mention</p>
      </div>
    </motion.section>
  );
};

export default ExternalEvents;
