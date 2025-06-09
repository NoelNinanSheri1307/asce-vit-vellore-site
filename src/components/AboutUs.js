import { motion } from "framer-motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <motion.section
      id="about"
      className="about-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>About Us</h2>

      <p>
        The American Society of Civil Engineers (ASCE) – VIT Chapter is a
        student-driven organization that fosters passion for civil engineering,
        innovation, and sustainability. We bring together like-minded students
        who aim to contribute to real-world engineering challenges.
      </p>

      <p>
        Established in 2017, the ASCE VIT Chapter has consistently worked toward
        technical excellence by organizing workshops, seminars, and
        competitions. We aim to bridge the gap between classroom learning and
        practical application.
      </p>

      <p>
        Our goals for the academic year include expanding outreach, increasing
        industry interaction, and promoting research culture within the
        undergraduate community.
      </p>
    </motion.section>
  );
};

export default AboutUs;
