import React, { useState, useRef, useEffect } from "react";
import "./Sponsors.css";
import travancoreLogo from "../imagesandassets/travancore_logo.jpg";

const Sponsors = () => {
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef(null);
  const cardRef = useRef(null);

  const toggleExpand = () => setExpanded((prev) => !prev);

  // Collapse when clicking/tapping outside the card
  useEffect(() => {
    const handleOutside = (e) => {
      if (!cardRef.current) return;
      if (!cardRef.current.contains(e.target)) {
        setExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("touchstart", handleOutside);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("touchstart", handleOutside);
    };
  }, []);

  // compute maxHeight (collapsed vs expanded)
  const collapsedHeight = "260px";
  const expandedHeight =
    contentRef.current?.scrollHeight
      ? `${contentRef.current.scrollHeight + 240}px`
      : "520px"; // fallback while measuring

  return (
    <section className="sponsors-section">
      <h2>Our Sponsor</h2>

      <div
        ref={cardRef}
        className={`sponsor-card ${expanded ? "expanded" : ""}`}
        onClick={toggleExpand}
        style={{
          maxHeight: expanded ? expandedHeight : collapsedHeight,
        }}
      >
        <div className="logo-container">
          <img src={travancoreLogo} alt="Travancore" />
          <h3 className="sponsor-name">Travancore Builders</h3>
        </div>

        <div className="sponsor-details" ref={contentRef}>
          <p>
            Travancore is our proud sponsor, supporting innovation and
            engineering excellence. Click this card to expand or collapse
            details dynamically.
          </p>
          <a
            href="https://travancorebuilders.com"
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-link"
            onClick={(e) => e.stopPropagation()} // avoid collapsing when clicking link
          >
            Visit Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
