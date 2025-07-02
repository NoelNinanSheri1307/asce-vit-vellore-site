// Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="contact-section common-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Contact Us</h2>

      <div className="contact-info">
        <p><strong>Email:</strong> asce@vit.ac.in</p>
        <p><strong>Phone:</strong> +91 98765 43210</p>
        <p>
          <strong>Socials:</strong> 
          <a href="https://instagram.com" target="_blank" >Instagram</a> | 
          <a href="https://linkedin.com" target="_blank" > LinkedIn</a>
        </p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>

      <div className="map-placeholder">
        <p>📍 VIT Vellore Map Embed (Coming Soon)</p>
      </div>
    </motion.section>
  );
};

export default Contact;
