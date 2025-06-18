import React, { useEffect, useRef } from "react";
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
  { name: "Annie Elsa Sujith", role: "Chairperson", image: annieImg, linkedin: "https://linkedin.com/in/annie" },
  { name: "Shreya A. Raghavan", role: "Vice Chairperson", image: shreyaImg, linkedin: "https://linkedin.com/in/shreya" },
  { name: "Meetu R Binu", role: "Secretary", image: meetuImg, linkedin: "https://linkedin.com/in/meetu" },
  { name: "Abhinav Sahil", role: "Co-Secretary", image: abhinavImg, linkedin: "https://linkedin.com/in/abhinav" },
  { name: "Abhijith Maneesh", role: "Finance Head", image: abhijithImg, linkedin: "https://linkedin.com/in/abhijith" },
  { name: "Lakshmi Nair", role: "Design Head", image: lakshmiImg, linkedin: "https://linkedin.com/in/lakshmi" },
  { name: "Merlin T Jai", role: "Outreach Head", image: merlinImg, linkedin: "https://linkedin.com/in/merlin" },
  { name: "Anjana K", role: "R&D Head", image: anjanaImg, linkedin: "https://linkedin.com/in/anjana" },
  { name: "Athidharani K.V", role: "Creative Head", image: athidharaniImg, linkedin: "https://linkedin.com/in/athidharani" },
  { name: "V S Vignesh Pranav", role: "Management Head", image: vigneshImg, linkedin: "https://linkedin.com/in/vignesh" },
];


const Team = () => {
  const orbitRef = useRef(null);

 useEffect(() => {
  let angle = 0;
  const radius = 300; // Increased from 200 to 300
  const speed = 0.5;
    const animate = () => {
      if (orbitRef.current) {
        const children = orbitRef.current.children;
        const cardCount = children.length;
        const angleStep = 360 / cardCount;

        for (let i = 0; i < cardCount; i++) {
          const cardAngle = angle + angleStep * i;
          const rad = (cardAngle * Math.PI) / 180;
          const x = radius * Math.cos(rad);
          const y = radius * Math.sin(rad);

          children[i].style.transform = `translate(${x}px, ${y}px)`;
        }
        angle += speed;
      }
      requestAnimationFrame(animate);
    };
    animate();
  }, []);


  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="orbit-container">
        <div className="orbit" ref={orbitRef}>
          {teamMembers.map((member, index) => (
            <div className="orbit-card" key={index}>
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-icon">
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
