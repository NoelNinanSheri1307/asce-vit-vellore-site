import { motion } from "framer-motion";
import "./Patron.css";
import sofiImage from "../imagesandassets/sofi.png";
import { FiMail } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const Patron = () => {
  const [hovered, setHovered] = useState(false);
  const [showCopiedPopup, setShowCopiedPopup] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("asofi@vit.ac.in");
    setShowCopiedPopup(true);
    setTimeout(() => setShowCopiedPopup(false), 3000); // Hide after 3 seconds
  };

  return (
    <motion.section
      id="patron"
      className="patron-section common-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Our Patron</h2>

      <div className="patron-content">
        <div
          className="image-wrapper"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={sofiImage}
            alt="Faculty Advisor"
            className={`patron-image ${hovered ? "faded" : ""}`}
          />
          {hovered && (
            <div className="icon-overlay">
              <FiMail className="icon" onClick={handleCopyEmail} />
              <FaLinkedin
                className="icon"
                onClick={() =>
                  window.open("https://www.linkedin.com/in/sofi-a-a9734933", "_blank")
                }
              />
            </div>
          )}
          {showCopiedPopup && (
            <div className="copy-popup">Email ID copied!</div>
          )}
        </div>

        <div className="patron-text">
          <h3>Dr. Sofi A</h3>
          <p>Faculty Coordinator – ASCE VIT Chapter</p>
          <h4>Professor: Department of Structural and Geotechnical Engineering</h4>
          <h4>School Of Civil Engineering</h4>
          <blockquote>
            “It gives me immense pride to witness the growth and dedication of
            our students through ASCE. Let us continue to strive for excellence
            in every endeavor.”
          </blockquote>
        </div>
      </div>
    </motion.section>
  );
};

export default Patron;
