import React, { useState, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ChainBackground = ({ particleId = "tsparticles" }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  if (isMobile) return null; // completely skip particles on mobile

  return (
    <Particles
      id={particleId}
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 30 },
          color: { value: "#00bfff" },
          links: { enable: true, distance: 220, color: "#ffffff", opacity: 1, width: 1 },
          move: { enable: true, speed: 4.5, bounce: true },
          size: { value: 4, random: true },
          collisions: { enable: true },
          shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
          opacity: { value: 0.8, random: true },
          shadow: { enable: true, color: "#00bfff", blur: 6 },
        },
        interactivity: {
          events: {
            onClick: { enable: true, mode: "push" },
            onHover: { enable: true, mode: "repulse" },
          },
          modes: { push: { quantity: 4 }, repulse: { distance: 100 } },
        },
      }}
    />
  );
};

export default ChainBackground;
