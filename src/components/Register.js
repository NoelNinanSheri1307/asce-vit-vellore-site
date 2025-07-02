import { motion } from "framer-motion";
import "./Register.css";

const Register = () => {
  return (
    <motion.section
      id="register"
      className="register-section common-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Register</h2>

      <div className="form-container">
        {/* Join ASCE Form */}
        <div className="form-box">
          <h3>Join ASCE</h3>
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Registration Number" required />
            <button type="submit">Join Now</button>
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default Register;
