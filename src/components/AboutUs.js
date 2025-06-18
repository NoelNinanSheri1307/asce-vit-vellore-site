  import { motion } from "framer-motion";
  import "./AboutUs.css";

  const AboutUs = () => {
    return (
      <motion.section
        id="about"
        className="about-section common-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Us</h2>

        <p>
          The ASCE VIT Student Chapter is an active and vibrant community of civil engineering students 
          at Vellore Institute of Technology (VIT), Vellore, officially affiliated with the American 
          Society of Civil Engineers (ASCE) : the world’s largest organization dedicated to advancing 
          civil engineering knowledge and practice. 
        </p>

        <p>
          Our chapter bridges academic learning and practical engineering by offering opportunities to develop 
          technical skills, leadership, and industry awareness. Through workshops, seminars, site visits, 
          competitions, and community projects, we prepare students to meet the challenges of modern civil 
          engineering. 
        </p>

        <p>
          At the core of our technical expertise is Team Eklavaya, the dedicated technical division of ASCE VIT. 
          Team Eklavaya actively participates in multiple national-level technical competitions, demonstrating 
          creativity, engineering skill, and teamwork by applying civil engineering principles to real-world 
          challenges. 
        </p>
        <a
        href="https://eklavya-vit.firebaseapp.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="splash-button"
      >
        Team Eklavya – View More
      </a>
      </motion.section>
    );
  };

  export default AboutUs;
