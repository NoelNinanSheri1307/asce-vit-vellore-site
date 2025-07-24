import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ message: "", type: "" }); // type: "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7qdj0pp",
        "template_xi2dp2l",
        form.current,
        "5vgHYDqHRYGabebfj"
      )
      .then(() => {
        setStatus({ message: "Message sent successfully!", type: "success" });
        form.current.reset();

        // Remove message after 4 seconds
        setTimeout(() => setStatus({ message: "", type: "" }), 4000);
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setStatus({ message: "Failed to send message. Please try again later.", type: "error" });

        // Remove message after 4 seconds
        setTimeout(() => setStatus({ message: "", type: "" }), 4000);
      });
  };

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
          <a href="https://www.instagram.com/asce.vit/" target="_blank">Instagram</a> | 
          <a href="https://in.linkedin.com/company/ascevit" target="_blank">LinkedIn</a>
        </p>
      </div>

      <form className="contact-form" ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      

      {/* Animated message box */}
      <AnimatePresence>
        {status.message && (
          <motion.div
            className={`status-box ${status.type}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {status.message}
          </motion.div>
        )}
      </AnimatePresence>
        <footer className="asce-footer">
          <p>Developed by Noel Ninan and Arpit Baiju</p>
          <p>Trademark © ASCE VIT 2025 · All rights reserved</p>
      </footer>
    </motion.section>
    
  );
};

export default Contact;
