// Sponsors.jsx
import { motion } from "framer-motion";
import "./Sponsors.css";

const Sponsors = () => {
  return (
    <motion.section
      id="sponsors"
      className="sponsors-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Our Sponsors</h2>

      <div className="sponsor-logos">
        <a href="https://www.ultratechcement.com" target="_blank">
          <img src="/imagesandassets/ultratech-logo.png" alt="UltraTech" />
        </a>
        <a href="https://www.lntconstruction.com" target="_blank">
          <img src="/imagesandassets/lnt-logo.png" alt="L&T Construction" />
        </a>
      </div>

      <h3>Past Sponsors</h3>
      <div className="sponsor-logos past">
        <img src="/imagesandassets/acme-logo.png" alt="Acme Corp" />
        <img src="/imagesandassets/buildpro-logo.png" alt="BuildPro" />
      </div>
    </motion.section>
  );
};

export default Sponsors;
