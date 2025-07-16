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
        <div className="form-box">
          <h3>Join ASCE</h3>
          <form
            action="https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={() => alert("Submitted!")}
          >
            <input name="entry.111111111" type="email" placeholder="Email Address" required />
            <input name="entry.222222222" type="text" placeholder="First Name" required />
            <input name="entry.333333333" type="text" placeholder="Last Name" required />
            <input name="entry.444444444" type="text" placeholder="Country/Region" required />
            <input name="entry.555555555" type="text" placeholder="Home Address Line 1" required />
            <input name="entry.666666666" type="text" placeholder="City" required />
            <input name="entry.777777777" type="text" placeholder="State" required />
            <input name="entry.888888888" type="text" placeholder="Zip Code" required />
            <input name="entry.999999999" type="tel" placeholder="Phone" required />
            <input name="entry.101010101" type="password" placeholder="Password" required />
            <input name="entry.111213141" type="password" placeholder="Confirm Password" required />
            <input name="entry.151617181" type="date" placeholder="DOB" required />
            <select name="entry.192021222" required>
              <option value="">Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
              <option>Prefer not to say</option>
            </select>
            <input name="entry.232425262" type="text" placeholder="Course Enrolled In VIT" required />
            <input name="entry.272829303" type="number" placeholder="Graduation Year" required />
            <button type="submit">Join Now</button>
          </form>
          <iframe name="hidden_iframe" style={{ display: "none" }}></iframe>
        </div>
      </div>
    </motion.section>
  );
};

export default Register;
