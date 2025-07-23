import React, { useState } from "react";
import "./registerform.css";

const RegisterForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState("");

  const validateEmail = (email) => {
    // Basic email validation
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    const form = e.target;
    const email = form["entry.431546487"].value.trim();
    const password = form["entry.1949509761"].value;
    const confirmPassword = form["entry.1931095289"].value;

    if (!validateEmail(email)) {
      e.preventDefault();
      setErrorPopup("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      e.preventDefault();
      setErrorPopup("Passwords do not match.");
      return;
    }

    setErrorPopup(""); // Clear any previous errors
    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
      window.location.href = "/#register";
    }, 4000);
  };

  return (
    <div className="form-page">
      <video autoPlay muted loop className="form-bg-video">
        <source src="form.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <h2 className="form-title">ASCE Registration Form</h2>

      <form
        action="https://docs.google.com/forms/d/e/1FAIpQLSeaGGe_youdq6UzkEXaTKKj-sq7uldOtwPNigIFnwAr4WUecQ/formResponse"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="register-form"
      >
        <input name="entry.431546487" type="text" placeholder="Email Address" required />
        <input name="entry.1687001166" type="text" placeholder="First Name" required />
        <input name="entry.1537789743" type="text" placeholder="Last Name" required />
        <input name="entry.1862136238" type="text" placeholder="Country/Region" required />
        <input name="entry.1540898818" type="text" placeholder="Home Address Line 1" required />
        <input name="entry.765557645" type="text" placeholder="City" required />
        <input name="entry.252242991" type="text" placeholder="State" required />
        <input name="entry.1355002744" type="text" placeholder="Zip Code" required />
        <input name="entry.631192590" type="text" placeholder="Phone" required />
        <input name="entry.1949509761" type="text" placeholder="Password" required />
        <input name="entry.1931095289" type="text" placeholder="Confirm Password" required />
        <input name="entry.898726390" type="text" placeholder="Date of Birth (e.g. 18-07-2004)" required />

        <select name="entry.961580857" required>
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
          <option value="Prefer not to say">Prefer not to say</option>
        </select>

        <input name="entry.475618579" type="text" placeholder="Course Enrolled in VIT" required />
        <input name="entry.1823431793" type="text" placeholder="Graduation Year" required />

        <button class= "joinbutton" type="submit">Join Now</button>
        <button type="button" className="return-btn" onClick={() => window.location.href = "/#register"}>
          Return to Main Page
        </button>
      </form>

      {showPopup && (
        <div className="form-popup success">
          Form submitted. ASCE VIT will be processing your registration.
        </div>
      )}

      {errorPopup && (
        <div className="form-popup error">
          {errorPopup}
        </div>
      )}

      <iframe name="hidden_iframe" style={{ display: "none" }} />
    </div>
  );
};

export default RegisterForm;
