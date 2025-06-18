import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "./InternalEvents.css";

const events = [
  {
    title: "YANTRA’25 – GREENPRINT",
    date: "March 2025",
    image: require("../imagesandassets/greenprint.jpg"),
    description:
      "GREENPRINT was a competition on sustainable design and AI-driven construction using AutoCAD, Revit, and Autodesk Forma.",
    winners: (
      <>
        <h4>1st Prize: Team ALOE VERA GEL</h4>
        <ul>
          <li>Abhijith Maneesh (23BCL0036)</li>
          <li>Mishal Aslam (23BCL0041)</li>
          <li>Tourangbam Achamba (23BCL0042)</li>
        </ul>
        <h4>2nd Prize: Team FUSION FLAMS</h4>
        <ul>
          <li>Pratham Choudhary (22BCL0088)</li>
          <li>Aushman Dutta (22BCL0106)</li>
        </ul>
        <h4>3rd Prize: Team KAP</h4>
        <ul>
          <li>Md Aryan Khan (23BCB0115)</li>
          <li>Kunal Shah (23BCB0111)</li>
          <li>Priyansh Gupta (23BCL0051)</li>
        </ul>
      </>
    )
  },
  {
    title: "ECOVISION",
    date: "Feb 2025",
    image: require("../imagesandassets/ecovision.jpg"),
    description:
      "A workshop and competition on optimizing solar and wind energy systems using Autodesk Forma.",
    winners: (
      <>
        <h4>1st Prize</h4>
        <ul>
          <li>Rithulraman (23BCL0007)</li>
          <li>Varoon R (23BCL0013)</li>
          <li>Jeevan K V (23BCL0018)</li>
          <li>G.P.Nishok Kumar (23BCL0026)</li>
        </ul>
        <h4>2nd Prize</h4>
        <ul>
          <li>Priyansh Gupta (23BCL0051)</li>
          <li>Kirtika Kashyap (23BCL0057)</li>
        </ul>
        <h4>3rd Prize</h4>
        <ul>
          <li>Mishal Aslam (23BCL0041)</li>
          <li>Tourangbam Achamba (23BCL0042)</li>
        </ul>
      </>
    )
  },
  {
    title: "BRIDGE THE GAP",
    date: "Jan 2025",
    image: require("../imagesandassets/bridge.jpg"),
    description:
      "A fun civil engineering icebreaker that encouraged creative thinking through games and design challenges.",
    winners: <p>This event was an icebreaker to welcome new members and foster bonding through fun civil-themed activities.</p>
  },
  {
    title: "DAMMED DECISION",
    date: "April 2025",
    image: require("../imagesandassets/dam.jpg"),
    description:
      "An interactive event tackling water resource challenges via a Round Table format.",
    winners: (
      <>
        <h4>1st Prize</h4>
        <ul>
          <li>Shreya Raghvan (22BCL0016)</li>
          <li>Sreya Prasobh (22BCL0079)</li>
          <li>Abhinav Sahil (23BCL0060)</li>
        </ul>
        <h4>2nd Prize</h4>
        <ul>
          <li>Athidharani K V (23BCL0011)</li>
          <li>Nishok Kumar G.P. (23BCL0026)</li>
          <li>Varoon R. (23BCL0013)</li>
        </ul>
        <h4>3rd Prize</h4>
        <ul>
          <li>Abhijith Maneesh (23BCL0036)</li>
          <li>Mishal Aslam (23BCL0041)</li>
          <li>Ratna Pani Bajracharyya (22BCL0142)</li>
        </ul>
      </>
    )
  }
];

const InternalEvents = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const scrollContainerRef = useRef(null);

  const closeDialog = () => setSelectedEvent(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const handleWheel = (e) => {
      if (container.scrollWidth > container.clientWidth) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, []);

        useEffect(() => {
      if (selectedEvent) {
        document.body.classList.add("modal-open");
      } else {
        document.body.classList.remove("modal-open");
      }
      return () => document.body.classList.remove("modal-open");
    }, [selectedEvent]);

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

      <div className="event-scroll-container" ref={scrollContainerRef}>
        {events.map((event, index) => (
          <div
            className="event-card shimmer-border"
            key={index}
            onClick={() => setSelectedEvent(event)}
          >
            <img src={event.image} alt={event.title} className="event-image" />
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="modal-overlay" onClick={closeDialog}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeDialog}>×</button>
            <h2>
              {selectedEvent.title === "BRIDGE THE GAP"
                ? "Bridge The Gap – Icebreaker Session"
                : `Winners of ${selectedEvent.title}`}
            </h2>

            <div className="modal-body">{selectedEvent.winners}</div>
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default InternalEvents;
