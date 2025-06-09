import React from "react";
import { motion } from "framer-motion";
import "./InternalEvents.css";

const InternalEvents = () => {
  return (
    <motion.section
      id="events-internal"
      className="internal-events-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Internal Events</h2>
      <div className="event-card">
        <h3>Surveying Workshop</h3>
        <p>Date: Jan 20, 2024</p>
        <p>Description: A hands-on workshop on Total Station and Leveling equipment.</p>
        <p>Winners: John Doe, Jane Smith</p>
      </div>

      <div className="event-card">
        <h3>Model Building Contest</h3>
        <p>Date: Feb 15, 2024</p>
        <p>Description: Teams competed to build earthquake-resistant structures.</p>
        <p>Winners: Team Alpha</p>
      </div>
    </motion.section>
  );
};

export default InternalEvents;
