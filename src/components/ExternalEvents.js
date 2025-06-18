import React from "react";
import { motion, reverseEasing } from "framer-motion";
import "./ExternalEvents.css";

const externalEvents = [
  {
    title: "ASCE India Student Symposium 2025",
    date: "March 28-29 2025",
    image: require("../imagesandassets/symposium.jpg"),
    description: (
      <>
      The ASCE India Student Symposium 2025, hosted at the Mukesh Patel School of Technology Management
       & Engineering on March 28–29, 2025, brought together civil engineering students from across India 
       to compete, collaborate, and innovate. This premier event offered a platform for ASCE student 
       members to showcase their technical skills, engage in hands-on competitions, and network with 
       industry leaders and peers. With a focus on real-world challenges, the symposium fostered 
       creativity, teamwork, and professional growth—all while providing free access to ASCE’s vast 
       resources. 
      </>
    )
  },
  {
    title: "Open Roads Designer Competition - Aakaar 2025, IIT Bombay",
    date: "March 22 2025",
    image: require("../imagesandassets/aakar.jpg"),
    description:
    "The ASCE VIT Student Chapter excelled at the OpenRoads Designer Competition, showcasing their innovative civil engineering solutions. Competing against top teams, the VIT representatives demonstrated mastery in infrastructure design using Bentley’s cutting-edge software, highlighting their technical prowess and collaborative spirit. The victory here, underscores the chapter’s commitment to pushing boundaries in civil engineering"
  }
];

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
      <div className="external-event-scroll-container">
        {externalEvents.map((event, index) => (
          <div className="event-card shimmer-border" key={index}>
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <div className="event-description">{event.description}</div>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExternalEvents;
