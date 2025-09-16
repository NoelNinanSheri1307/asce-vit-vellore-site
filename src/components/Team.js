import React, { useEffect, useState, useRef } from "react";
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

const INTERVAL = 1800; // keep > transition to avoid overlap
const SPREAD = 0.6;
const CARD_WIDTH = 280;
const CARD_HEIGHT = 400;
const GAP = 32;

export default function Team() {
  const [centerIdx, setCenterIdx] = useState(0);
  const [manualPause, setManualPause] = useState(false);
  const [clickedIdx, setClickedIdx] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (manualPause) return;
    const id = setInterval(() => {
      setCenterIdx(i => (i + 1) % teamMembers.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, [manualPause]);

  useEffect(() => {
    const handleOutsideClick = e => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setManualPause(false);
        setClickedIdx(null);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  // set CSS variables on container so media queries still work
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    el.style.setProperty("--card-width", `${CARD_WIDTH}px`);
    el.style.setProperty("--card-height", `${CARD_HEIGHT}px`);
    el.style.setProperty("--gap-x", `${GAP}px`);
    el.style.setProperty("--spread", `${SPREAD}`);
    // computed slide-distance used by CSS: (card + gap) * spread
    el.style.setProperty(
      "--slide-distance",
      `${(CARD_WIDTH + GAP) * SPREAD}px`
    );
  }, []);

  // compute visible set (same as before)
  const visible = [];
  for (let offset = -2; offset <= 2; offset++) {
    const idx = (centerIdx + offset + teamMembers.length) % teamMembers.length;
    visible.push({ ...teamMembers[idx], pos: offset, actualIdx: idx });
  }

  return (
    <section className="team-section">
      <h2>Our Team</h2>
      <div className="slideshow-container" id="team" ref={containerRef}>
        {visible.map(member => {
          const posClass = `pos${member.pos}`; // pos-2, pos-1, pos0, pos1, pos2
          const isClicked = member.actualIdx === clickedIdx;

          return (
            <div
              key={member.actualIdx}
              className={`slideshow-card ${posClass} ${isClicked ? "clicked" : ""}`}
              onClick={() => {
                setCenterIdx(member.actualIdx);
                setManualPause(true);
                setClickedIdx(member.actualIdx);
              }}
            >
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <div className="icon-container" onClick={e => e.stopPropagation()}>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-icon"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
