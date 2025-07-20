import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaQuestionCircle } from "react-icons/fa";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      id="register"
      className="register-section common-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="register-header">
        <h2>Register</h2>
        <div className="tooltip-container">
          <FaQuestionCircle className="info-icon" />
          <span className="tooltip-text">
            Please be sure to change your password after ASCE VIT processes your membership and you are intimated by email.
          </span>
        </div>
      </div>

      <div className="register-button-container">
        <button className="go-register-button" onClick={() => navigate("/registerform")}>
          Go to Registration Form
        </button>
      </div>
    </motion.section>
  );
};

export default Register;
