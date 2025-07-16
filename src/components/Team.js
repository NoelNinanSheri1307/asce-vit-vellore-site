import React, { useEffect, useRef, useState } from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";

import annieImg from "../imagesandassets/annie.jpg";
import shreyaImg from "../imagesandassets/shreya.jpg";
import meetuImg from "../imagesandassets/meetu.jpg";
import abhinavImg from "../imagesandassets/abhinav.jpg";
import abhijithImg from "../imagesandassets/abhijith.jpg";
import lakshmiImg from "../imagesandassets/lakshmi.jpg";
import merlinImg from "../imagesandassets/merlin.jpg";
import anjanaImg from "../imagesandassets/anjana.jpg";
import athidharaniImg from "../imagesandassets/athidharani.jpg";
import vigneshImg from "../imagesandassets/vignesh.jpg";

const teamMembers = [
  { name: "Annie Elsa Sujith", role: "Chairperson", image: annieImg, linkedin: "https://www.linkedin.com/in/annie-elsa-sujith-53063924b/" },
  { name: "Shreya A. Raghavan", role: "Vice Chairperson", image: shreyaImg, linkedin: "https://www.linkedin.com/in/shreyaanilraghavan/" },
  { name: "Meetu R Binu", role: "Secretary", image: meetuImg, linkedin: "https://www.linkedin.com/in/meetu-r-binu-798662274" },
  { name: "Abhinav Sahil", role: "Co-Secretary", image: abhinavImg, linkedin: "https://www.linkedin.com/in/abhinav-sahil-411898285" },
  { name: "Abhijith Maneesh", role: "Finance Head", image: abhijithImg, linkedin: "https://www.linkedin.com/in/abhijithh245" },
  { name: "Lakshmi Nair", role: "Design Head", image: lakshmiImg, linkedin: "https://www.linkedin.com/in/lakshmi-nair7" },
  { name: "Merlin T Jai", role: "Outreach Head", image: merlinImg, linkedin: "https://www.linkedin.com/in/merlin-t-jai-b40946253" },
  { name: "Anjana K", role: "R&D Head", image: anjanaImg, linkedin: "https://www.linkedin.com/in/anjana-k-4601a2275/" },
  { name: "Athidharani K.V", role: "Creative Head", image: athidharaniImg, linkedin: "https://www.linkedin.com/in/athidharani-kv-736b8728a" },
  { name: "V S Vignesh Pranav", role: "Management Head", image: vigneshImg, linkedin: "https://www.linkedin.com/in/vignesh-pranav-9310881b1" },
];

const Team = () => {
  const orbitRef = useRef(null);
  const animationRef = useRef(null);
  const angleRef = useRef(0);
  const [expandedCard, setExpandedCard] = useState(null);

  useEffect(() => {
    const radius = 300;
    const speed = 0.5;

    const animate = () => {
      if (orbitRef.current && expandedCard === null) {
        const children = orbitRef.current.children;
        const cardCount = children.length;
        const angleStep = 360 / cardCount;

        for (let i = 0; i < cardCount; i++) {
          const cardAngle = angleRef.current + angleStep * i;
          const rad = (cardAngle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);
          children[i].style.transform = `translate(${x}px, ${y}px)`;
        }
        angleRef.current += speed;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [expandedCard]); // animation reacts to change in expandedCard

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".orbit-card")) {
        setExpandedCard(null);
      }
    };

    if (expandedCard !== null) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [expandedCard]);

  const handleCardClick = (e, index) => {
    e.stopPropagation();
    setExpandedCard(index === expandedCard ? null : index); // toggle
  };

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="orbit-container">
        <div className="orbit" ref={orbitRef}>
          {teamMembers.map((member, index) => (
            <div
              className={`orbit-card ${expandedCard === index ? "expanded" : ""}`}
              key={index}
              onClick={(e) => handleCardClick(e, index)}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="linkedin-icon"
                onClick={(e) => e.stopPropagation()}
              >
                <FaLinkedin />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
