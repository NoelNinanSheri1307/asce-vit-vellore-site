import { motion } from "framer-motion";
import "./Patron.css";

const Patron = () => {
  return (
    <motion.section
      id="patron"
      className="patron-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Our Patron</h2>

      <div className="patron-content">
        <img
          src="/imagesandassets/patron.jpg"
          alt="Faculty Advisor"
          className="patron-image"
        />

        <div className="patron-text">
          <h3>Dr. Priya Ramanathan</h3>
          <p>Faculty Advisor – ASCE VIT Chapter</p>
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
