import React from "react";
import "./Sponsors.css";

const sponsors = [
  {
    name: "L&T",
    logo: require("../imagesandassets/lt.jpg"),
    link: "https://www.larsentoubro.com/",
  },
  {
    name: "Ultratech Cement",
    logo: require("../imagesandassets/ultratech.png"),
    link: "https://www.ultratechcement.com/",
  },
  {
    name: "Godrej",
    logo: require("../imagesandassets/godrej.png"),
    link: "https://www.godrej.com/",
  },
  {
    name: "JSW Cement",
    logo: require("../imagesandassets/jsw.jpg"),
    link: "https://www.jswcement.in/",
  },
];

const Sponsors = () => {
  const scrollingSponsors = [...sponsors, ...sponsors];

  return (
    <section className="sponsors-section">
      <h2>Our Sponsors</h2>
      <div className="slider-box">
        <div className="slider-fade left-fade" />
        <div className="slider-fade right-fade" />
        <div className="sponsor-slider">
          {scrollingSponsors.map((sponsor, index) => (
          <a
          key={index}
          href={sponsor.link}
          target="_blank"
          rel="noopener noreferrer"
          className="sponsor-logo"
        >
          <div className="logo-container">
            <img src={sponsor.logo} alt={sponsor.name} />
            <p className="sponsor-name">{sponsor.name}</p>
          </div>
        </a>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
