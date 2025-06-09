// Team.jsx
import { motion } from "framer-motion";
import "./Team.css";

const teamMembers = [
  {
    name: "Arpit Sharma",
    role: "President",
    image: "/imagesandassets/arpit.jpg",
  },
  {
    name: "Noel Raj",
    role: "Vice President",
    image: "/imagesandassets/noel.jpg",
  },
  {
    name: "Riya Patel",
    role: "Event Coordinator",
    image: "/imagesandassets/riya.jpg",
  },
  // Add more team members as needed
];

const Team = () => {
  return (
    <motion.section
      id="team"
      className="team-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Our Team</h2>

      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-member" key={index}>
            <img src={member.image} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>

      <a href="#archive" className="past-teams-link">
        View Past Teams →
      </a>
    </motion.section>
  );
};

export default Team;
