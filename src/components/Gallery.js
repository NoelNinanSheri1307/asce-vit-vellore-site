import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";

import gallery1 from "../imagesandassets/gallery1.jpg";
import gallery2 from "../imagesandassets/gallery2.jpg";
import gallery3 from "../imagesandassets/gallery3.jpg";
import gallery4 from "../imagesandassets/gallery4.jpg";
import gallery5 from "../imagesandassets/gallery5.jpg";
import gallery6 from "../imagesandassets/gallery6.jpg";
import gallery7 from "../imagesandassets/gallery7.jpg";
import gallery8 from "../imagesandassets/gallery8.jpg";
import gallery9 from "../imagesandassets/gallery9.jpg";
import gallery10 from "../imagesandassets/gallery10.jpg";
import gallery11 from "../imagesandassets/gallery11.jpg";
import gallery12 from "../imagesandassets/gallery12.jpg";

const images = [
  { src: gallery1, title: "Gallery 1" },
  { src: gallery2, title: "Gallery 2" },
  { src: gallery3, title: "Gallery 3" },
  { src: gallery4, title: "Gallery 4" },
  { src: gallery5, title: "Gallery 5" },
  { src: gallery6, title: "Gallery 6" },
  { src: gallery7, title: "Gallery 7" },
  { src: gallery8, title: "Gallery 8" },
  { src: gallery9, title: "Gallery 9" },
  { src: gallery10, title: "Gallery 10" },
  { src: gallery11, title: "Gallery 11" },
  { src: gallery12, title: "Gallery 12" },
];

const MAX_VISIBILITY = 3;

const getOffset = (active, i, count) => {
  const direct = i - active;
  const wrapLeft = i - active + count;
  const wrapRight = i - active - count;
  const best =
    Math.abs(direct) <= Math.abs(wrapLeft) && Math.abs(direct) <= Math.abs(wrapRight)
      ? direct
      : Math.abs(wrapLeft) <= Math.abs(wrapRight)
      ? wrapLeft
      : wrapRight;
  return best;
};

const Card = ({ title, imageSrc }) => (
  <div className="card">
    <img src={imageSrc} alt={title} />
   
  </div>
);

const Carousel = ({ children }) => {
  const [active, setActive] = useState(0);
  const count = React.Children.count(children);
  const intervalRef = useRef(null);
  const carouselRef = useRef(null);

  const goPrev = () => setActive(i => (i - 1 + count) % count);
  const goNext = () => setActive(i => (i + 1) % count);

  useEffect(() => {
    const startAutoPlay = () => {
      intervalRef.current = setInterval(() => {
        setActive(i => (i - 1 + count) % count); // Reverse direction
      }, 1750);
    };

    const stopAutoPlay = () => {
      clearInterval(intervalRef.current);
    };

    const node = carouselRef.current;
    if (node) {
      node.addEventListener("mouseenter", stopAutoPlay);
      node.addEventListener("mouseleave", startAutoPlay);
    }

    startAutoPlay();

    return () => {
      stopAutoPlay();
      if (node) {
        node.removeEventListener("mouseenter", stopAutoPlay);
        node.removeEventListener("mouseleave", startAutoPlay);
      }
    };
  }, [count]);

  return (
  <div className="carousel" ref={carouselRef}>
    <button className="nav-btn left" onClick={goPrev}>
      &#10094; {/* Left arrow */}
    </button>

    {React.Children.map(children, (child, i) => {
      const offset = getOffset(active, i, count);
      const absOffset = Math.abs(offset);
      const visible = absOffset <= MAX_VISIBILITY;

      return (
        <div
          className="card-container"
          style={{
            "--offset": offset / 3,
            "--abs-offset": absOffset / 3,
            "--active": i === active ? 1 : 0,
            pointerEvents: i === active ? "auto" : "none",
            opacity: visible ? 1 : 0,
            display: visible ? "block" : "none",
          }}
        >
          {child}
        </div>
      );
    })}

    <button className="nav-btn right" onClick={goNext}>
      &#10095; {/* Right arrow */}
    </button>

    <div className="autoplay-progress">
      <div className="autoplay-bar" />
    </div>
  </div>
);

};

const Gallery = () => (
  <section id="gallery" className="gallery-section common-section">
    <h2>Gallery</h2>
    <Carousel>
  {images.map((img, i) => (
    <Card key={i} imageSrc={img.src} title={img.title} />
  ))}
</Carousel>

  </section>
);

export default Gallery;


